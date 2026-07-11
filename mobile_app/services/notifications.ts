// =====================================================
// Service de notifications push pour rappels d'entraînement
// Push notification service for training reminders
// =====================================================
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configure how notifications appear when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// ==================== TYPES ====================
export type NotificationTime = {
  hour: number;
  minute: number;
};

export type NotificationSettings = {
  enabled: boolean;
  dailyReminder: boolean;
  reminderTime: NotificationTime;
  reminderDays: string[]; // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
};

export const DEFAULT_SETTINGS: NotificationSettings = {
  enabled: true,
  dailyReminder: true,
  reminderTime: { hour: 19, minute: 0 }, // 7:00 PM
  reminderDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
};

// ==================== NOTIFICATION MESSAGES ====================
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

// ==================== PERMISSIONS ====================

/**
 * Request notification permissions from the user
 */
export async function requestNotificationPermissions(): Promise<boolean> {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Notification permissions denied');
      return false;
    }

    // Android requires a notification channel
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('training-reminders', {
        name: 'Rappels d\'entraînement',
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

// ==================== SETTINGS MANAGEMENT ====================

/**
 * Load notification settings from AsyncStorage
 */
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

/**
 * Save notification settings to AsyncStorage
 */
export async function saveNotificationSettings(settings: NotificationSettings): Promise<void> {
  try {
    await AsyncStorage.setItem('notificationSettings', JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving notification settings:', error);
  }
}

// ==================== SCHEDULING ====================

/**
 * Schedule daily training reminder notifications
 */
export async function scheduleDailyReminder(settings: NotificationSettings): Promise<void> {
  // Cancel all existing scheduled notifications first
  await Notifications.cancelAllScheduledNotificationsAsync();

  if (!settings.enabled || !settings.dailyReminder) {
    console.log('Notifications disabled, skipping scheduling');
    return;
  }

  // Get a random motivational message
  const messages = NOTIFICATION_MESSAGES.fr; // Default to French
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Schedule the daily notification
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

    console.log(`Scheduled daily reminder at ${settings.reminderTime.hour}:${settings.reminderTime.minute.toString().padStart(2, '0')}`);
  } catch (error) {
    console.error('Error scheduling notification:', error);
  }
}

/**
 * Schedule a one-time reminder (e.g., for exam preparation)
 */
export async function scheduleOneTimeReminder(
  title: string,
  body: string,
  seconds: number
): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds,
      },
    });
  } catch (error) {
    console.error('Error scheduling one-time notification:', error);
  }
}

/**
 * Schedule weekly exam reminder (e.g., every Sunday at 10 AM)
 */
export async function scheduleWeeklyExamReminder(): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '📝 Simulez l\'examen !',
        body: 'C\'est le moment de faire un test complet de 30 questions comme le vrai examen !',
        data: { type: 'weekly-exam-reminder' },
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
        weekday: 1, // Sunday
        hour: 10,
        minute: 0,
      },
    });
  } catch (error) {
    console.error('Error scheduling weekly exam reminder:', error);
  }
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Get all scheduled notifications
 */
export async function getScheduledNotifications(): Promise<Notifications.NotificationRequest[]> {
  try {
    return await Notifications.getAllScheduledNotificationsAsync();
  } catch (error) {
    console.error('Error getting scheduled notifications:', error);
    return [];
  }
}

/**
 * Cancel all scheduled notifications
 */
export async function cancelAllNotifications(): Promise<void> {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log('All notifications cancelled');
  } catch (error) {
    console.error('Error cancelling notifications:', error);
  }
}

/**
 * Send an immediate notification (for testing)
 */
export async function sendTestNotification(): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '🔔 Test de notification',
        body: 'Les notifications fonctionnent correctement ! Vous recevrez des rappels quotidiens.',
        sound: true,
      },
      trigger: null, // Send immediately
    });
  } catch (error) {
    console.error('Error sending test notification:', error);
  }
}

/**
 * Initialize notifications on app start
 */
export async function initializeNotifications(): Promise<void> {
  const settings = await loadNotificationSettings();
  
  if (settings.enabled) {
    const hasPermission = await requestNotificationPermissions();
    if (hasPermission) {
      await scheduleDailyReminder(settings);
    }
  }
}

/**
 * Update notification schedule based on new settings
 */
export async function updateNotificationSchedule(settings: NotificationSettings): Promise<void> {
  await saveNotificationSettings(settings);
  
  if (settings.enabled) {
    const hasPermission = await requestNotificationPermissions();
    if (hasPermission) {
      await scheduleDailyReminder(settings);
    }
  } else {
    await cancelAllNotifications();
  }
}
