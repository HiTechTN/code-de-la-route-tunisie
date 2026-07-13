import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { t, type Language } from '../data/translations';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export type NotificationTime = {
  hour: number;
  minute: number;
};

export type NotificationSettings = {
  enabled: boolean;
  dailyReminder: boolean;
  reminderTime: NotificationTime;
  reminderDays: string[];
};

export const DEFAULT_SETTINGS: NotificationSettings = {
  enabled: true,
  dailyReminder: true,
  reminderTime: { hour: 19, minute: 0 },
  reminderDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
};

const NOTIFICATION_MESSAGES = {
  fr: [
    { title: '🚗 Temps de réviser !', body: 'Prêt pour une session d\'entraînement ? Testez vos connaissances du code de la route !' },
    { title: '📝 Examen imminent ?', body: 'Entraînez-vous maintenant pour être prêt le jour J !' },
    { title: '⭐ Vous avez des favoris !', body: 'Révisez les questions que vous avez marquées comme difficiles.' },
    { title: '🎯 Objectif du jour', body: 'Répondez à 10 questions pour maintenir votre progression !' },
    { title: '📚 Ne perdez pas le fil !', body: 'Continuez votre apprentissage du code de la route tunisien.' },
    { title: '🏆 Devenez un expert !', body: 'Chaque question vous rapproche de la réussite à l\'examen.' },
  ],
  ar: [
    { title: '🚗 حان وقت المراجعة!', body: 'مستعد لجلسة تدريب؟ اختبر معلوماتك في قانون الطرقات!' },
    { title: '📝 امتحان قادم؟', body: 'تدرب الآن لتكون جاهزاً في اليوم المحدد!' },
    { title: '⭐ لديك أسئلة مفضلة!', body: 'راجع الأسئلة التي حددتها كصعبة.' },
    { title: '🎯 هدف اليوم', body: 'أجب على 10 أسئلة للحفاظ على تقدمك!' },
    { title: '📚 لا تفوت التعلم!', body: 'واصل تعلم قانون الطرقات التونسي.' },
    { title: '🏆 كن خبيراً!', body: 'كل سؤال يقربك من النجاح في الامتحان.' },
  ],
};

const LANG_KEY = 'appLanguage';

async function getStoredLanguage(): Promise<Language> {
  try {
    const lang = await AsyncStorage.getItem(LANG_KEY);
    return lang === 'ar' ? 'ar' : 'fr';
  } catch {
    return 'fr';
  }
}

export async function requestNotificationPermissions(lang?: Language): Promise<boolean> {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return false;
    }

    if (Platform.OS === 'android') {
      const resolvedLang = lang ?? await getStoredLanguage();
      await Notifications.setNotificationChannelAsync('training-reminders', {
        name: t('notifications.channelName', resolvedLang),
        importance: Notifications.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#2563eb',
      });
    }

    return true;
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
    return false;
  }
}

export async function loadNotificationSettings(): Promise<NotificationSettings> {
  try {
    const saved = await AsyncStorage.getItem('notificationSettings');
    if (saved) {
      return JSON.parse(saved);
    }
    return DEFAULT_SETTINGS;
  } catch (error) {
    console.error('Error loading notification settings:', error);
    return DEFAULT_SETTINGS;
  }
}

export async function saveNotificationSettings(settings: NotificationSettings): Promise<void> {
  try {
    await AsyncStorage.setItem('notificationSettings', JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving notification settings:', error);
  }
}

export async function scheduleDailyReminder(settings: NotificationSettings, lang?: Language): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();

  if (!settings.enabled || !settings.dailyReminder) {
    return;
  }

  const resolvedLang = lang ?? await getStoredLanguage();
  const messages = NOTIFICATION_MESSAGES[resolvedLang] || NOTIFICATION_MESSAGES.fr;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: randomMessage.title,
        body: randomMessage.body,
        data: { type: 'daily-reminder' },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: settings.reminderTime.hour,
        minute: settings.reminderTime.minute,
      },
    });
  } catch (error) {
    console.error('Error scheduling notification:', error);
  }
}

export async function scheduleOneTimeReminder(
  title: string,
  body: string,
  seconds: number
): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: true },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds,
      },
    });
  } catch (error) {
    console.error('Error scheduling one-time notification:', error);
  }
}

export async function scheduleWeeklyExamReminder(lang?: Language): Promise<void> {
  const resolvedLang = lang ?? await getStoredLanguage();
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: t('notifications.weeklyExamTitle', resolvedLang),
        body: t('notifications.weeklyExamBody', resolvedLang),
        data: { type: 'weekly-exam-reminder' },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
        weekday: 1,
        hour: 10,
        minute: 0,
      },
    });
  } catch (error) {
    console.error('Error scheduling weekly exam reminder:', error);
  }
}

export async function getScheduledNotifications(): Promise<Notifications.NotificationRequest[]> {
  try {
    return await Notifications.getAllScheduledNotificationsAsync();
  } catch (error) {
    console.error('Error getting scheduled notifications:', error);
    return [];
  }
}

export async function cancelAllNotifications(): Promise<void> {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch (error) {
    console.error('Error cancelling notifications:', error);
  }
}

export async function sendTestNotification(lang?: Language): Promise<void> {
  const resolvedLang = lang ?? await getStoredLanguage();
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: t('notifications.testTitle', resolvedLang),
        body: t('notifications.testBody', resolvedLang),
        sound: true,
      },
      trigger: null,
    });
  } catch (error) {
    console.error('Error sending test notification:', error);
  }
}

export async function initializeNotifications(lang?: Language): Promise<void> {
  const settings = await loadNotificationSettings();
  const resolvedLang = lang ?? await getStoredLanguage();

  if (settings.enabled) {
    const hasPermission = await requestNotificationPermissions(resolvedLang);
    if (hasPermission) {
      await scheduleDailyReminder(settings, resolvedLang);
    }
  }
}

export async function updateNotificationSchedule(settings: NotificationSettings, lang?: Language): Promise<void> {
  await saveNotificationSettings(settings);

  const resolvedLang = lang ?? await getStoredLanguage();
  if (settings.enabled) {
    const hasPermission = await requestNotificationPermissions(resolvedLang);
    if (hasPermission) {
      await scheduleDailyReminder(settings, resolvedLang);
    }
  } else {
    await cancelAllNotifications();
  }
}
