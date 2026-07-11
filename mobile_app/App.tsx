import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View, TouchableOpacity, ScrollView, 
  TextInput, Modal, Dimensions, Platform, Animated,
  Share, Vibration
} from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  QUESTIONS, CATEGORIES, getQuestionsByCategory, 
  getRandomQuestions, getExamQuestions, getCategoryStats,
  type Question 
} from './data/questions';
import { 
  COURSE_MODULES, getModuleById, getTotalChapters,
  type CourseModule, type Chapter 
} from './data/courses';

const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ==================== TYPES ====================
type QuizMode = 'practice' | 'exam' | 'category';
type Language = 'fr' | 'ar';

// ==================== THEME ====================
const COLORS = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  primaryLight: '#3b82f6',
  secondary: '#7c3aed',
  success: '#10b981',
  danger: '#ef4444',
  warning: '#f59e0b',
  info: '#06b6d4',
  background: '#f8fafc',
  card: '#ffffff',
  text: '#1e293b',
  textLight: '#64748b',
  textMuted: '#94a3b8',
  border: '#e2e8f0',
  white: '#ffffff',
  black: '#000000',
  gradient1: '#2563eb',
  gradient2: '#7c3aed',
};

const FONTS = {
  bold: { fontWeight: '700' as const },
  semibold: { fontWeight: '600' as const },
  medium: { fontWeight: '500' as const },
  regular: { fontWeight: '400' as const },
};

// ==================== HELPER COMPONENTS ====================

// Animated Card Component
function AnimatedCard({ children, style, delay = 0 }: { children: React.ReactNode; style?: any; delay?: number }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 400, delay, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 400, delay, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[{ opacity, transform: [{ translateY }] }, style]}>
      {children}
    </Animated.View>
  );
}

// Progress Bar Component
function ProgressBar({ progress, color = COLORS.primary, height: h = 8 }: { progress: number; color?: string; height?: number }) {
  return (
    <View style={[styles.progressBarContainer, { height: h }]}>
      <View style={[styles.progressBarFill, { width: `${Math.min(progress * 100, 100)}%`, backgroundColor: color }]} />
    </View>
  );
}

// Badge Component
function Badge({ text, color = COLORS.primary, size = 'small' }: { text: string; color?: string; size?: 'small' | 'medium' }) {
  const isSmall = size === 'small';
  return (
    <View style={[styles.badge, { backgroundColor: color + '20', paddingHorizontal: isSmall ? 8 : 12, paddingVertical: isSmall ? 3 : 6 }]}>
      <Text style={[styles.badgeText, { color, fontSize: isSmall ? 10 : 12 }]}>{text}</Text>
    </View>
  );
}

// Stat Card Component
function StatCard({ icon, value, label, color }: { icon: string; value: string | number; label: string; color: string }) {
  return (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// ==================== HOME SCREEN ====================
function HomeScreen({ navigation }: any) {
  const [totalQuestions, setTotalQuestions] = useState(QUESTIONS.length);
  const [progress, setProgress] = useState(0);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Bonjour ☀️');
    else if (hour < 18) setGreeting('Bon après-midi 🌤️');
    else setGreeting('Bonsoir 🌙');
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const answered = await AsyncStorage.getItem('answeredQuestions');
      const total = answered ? JSON.parse(answered).length : 0;
      setProgress(total / totalQuestions);
    } catch (e) {}
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <AnimatedCard delay={0}>
        <View style={styles.homeHeader}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.homeTitle}>Code de la Route</Text>
            <Text style={styles.homeSubtitle}>🇹🇳 Tunisie</Text>
          </View>
          <View style={styles.headerStats}>
            <View style={styles.headerStatItem}>
              <Text style={styles.headerStatValue}>{totalQuestions}</Text>
              <Text style={styles.headerStatLabel}>Questions</Text>
            </View>
          </View>
        </View>
      </AnimatedCard>

      {/* Progress Card */}
      <AnimatedCard delay={100}>
        <TouchableOpacity 
          style={styles.progressCard}
          onPress={() => navigation.navigate('QuizTab', { screen: 'QuizHome' })}
        >
          <View style={styles.progressCardHeader}>
            <Text style={styles.progressCardTitle}>📊 Votre progression</Text>
            <Text style={styles.progressCardPercent}>{Math.round(progress * 100)}%</Text>
          </View>
          <ProgressBar progress={progress} color={COLORS.success} height={10} />
          <Text style={styles.progressCardText}>
            {Math.round(progress * totalQuestions)} / {totalQuestions} questions répondues
          </Text>
        </TouchableOpacity>
      </AnimatedCard>

      {/* Quick Actions */}
      <AnimatedCard delay={200}>
        <View style={styles.quickActions}>
          <TouchableOpacity 
            style={[styles.quickActionBtn, { backgroundColor: '#dbeafe' }]}
            onPress={() => navigation.navigate('QuizTab', { screen: 'QuizHome', params: { mode: 'exam' } })}
          >
            <Text style={styles.quickActionIcon}>📝</Text>
            <Text style={[styles.quickActionText, { color: COLORS.primary }]}>Examen</Text>
            <Text style={styles.quickActionSubtext}>30 questions</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.quickActionBtn, { backgroundColor: '#dcfce7' }]}
            onPress={() => navigation.navigate('QuizTab', { screen: 'QuizHome', params: { mode: 'practice' } })}
          >
            <Text style={styles.quickActionIcon}>🎯</Text>
            <Text style={[styles.quickActionText, { color: COLORS.success }]}>Entraînement</Text>
            <Text style={styles.quickActionSubtext}>10 questions</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.quickActionBtn, { backgroundColor: '#f3e8ff' }]}
            onPress={() => navigation.navigate('CourseTab', { screen: 'Courses' })}
          >
            <Text style={styles.quickActionIcon}>📚</Text>
            <Text style={[styles.quickActionText, { color: COLORS.secondary }]}>Cours</Text>
            <Text style={styles.quickActionSubtext}>6 modules</Text>
          </TouchableOpacity>
        </View>
      </AnimatedCard>

      {/* Categories Preview */}
      <AnimatedCard delay={300}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🏷️ Catégories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CourseTab', { screen: 'Courses' })}>
            <Text style={styles.seeAllBtn}>Voir tout →</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {CATEGORIES.map((cat, index) => (
            <TouchableOpacity 
              key={cat.id}
              style={[styles.categoryPill, { backgroundColor: cat.color + '15', borderColor: cat.color + '30' }]}
              onPress={() => navigation.navigate('QuizTab', { 
                screen: 'QuizHome', 
                params: { mode: 'category', categoryId: cat.id } 
              })}
            >
              <Text style={styles.categoryPillIcon}>{cat.icon}</Text>
              <Text style={[styles.categoryPillText, { color: cat.color }]}>{cat.name}</Text>
              <Text style={styles.categoryPillCount}>
                {getQuestionsByCategory(cat.id).length} Q
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </AnimatedCard>

      {/* Recent Questions Preview */}
      <AnimatedCard delay={400}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>❓ Questions populaires</Text>
        </View>
        {QUESTIONS.slice(0, 3).map((q, index) => (
          <TouchableOpacity 
            key={q.id}
            style={styles.questionPreview}
            onPress={() => navigation.navigate('QuizTab', { 
              screen: 'QuizPlay', 
              params: { questions: [q], mode: 'practice' } 
            })}
          >
            <View style={styles.questionPreviewHeader}>
              <Badge text={CATEGORIES.find(c => c.id === q.category)?.name || q.category} 
                     color={CATEGORIES.find(c => c.id === q.category)?.color || COLORS.primary} />
              <Badge text={q.difficulty} color={
                q.difficulty === 'facile' ? COLORS.success : 
                q.difficulty === 'moyen' ? COLORS.warning : COLORS.danger
              } />
            </View>
            <Text style={styles.questionPreviewText} numberOfLines={2}>{q.question}</Text>
          </TouchableOpacity>
        ))}
      </AnimatedCard>

      {/* Tips Section */}
      <AnimatedCard delay={500}>
        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>💡</Text>
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Astuce du jour</Text>
            <Text style={styles.tipText}>
              La formule magique pour la distance de sécurité: votre vitesse en km/h divisée par 10 = distance en mètres. Par exemple à 90 km/h, gardez 9 mètres minimum !
            </Text>
          </View>
        </View>
      </AnimatedCard>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ==================== COURSES SCREEN ====================
function CoursesScreen({ navigation }: any) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('fr');
  const totalChapters = getTotalChapters();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Language Toggle */}
      <View style={styles.languageToggle}>
        <TouchableOpacity 
          style={[styles.langBtn, selectedLanguage === 'fr' && styles.langBtnActive]}
          onPress={() => setSelectedLanguage('fr')}
        >
          <Text style={[styles.langBtnText, selectedLanguage === 'fr' && styles.langBtnTextActive]}>🇫🇷 Français</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.langBtn, selectedLanguage === 'ar' && styles.langBtnActive]}
          onPress={() => setSelectedLanguage('ar')}
        >
          <Text style={[styles.langBtnText, selectedLanguage === 'ar' && styles.langBtnTextActive]}>🇹🇳 عربي</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <AnimatedCard delay={0}>
        <View style={styles.courseStats}>
          <StatCard icon="📚" value={COURSE_MODULES.length} label="Modules" color={COLORS.primary} />
          <StatCard icon="📖" value={totalChapters} label="Chapitres" color={COLORS.success} />
          <StatCard icon="❓" value={QUESTIONS.length} label="Questions" color={COLORS.warning} />
        </View>
      </AnimatedCard>

      {/* Modules List */}
      {COURSE_MODULES.map((module, index) => (
        <AnimatedCard key={module.id} delay={100 * (index + 1)}>
          <TouchableOpacity 
            style={[styles.moduleCard, { borderLeftColor: module.color }]}
            onPress={() => navigation.navigate('ModuleDetail', { moduleId: module.id, language: selectedLanguage })}
          >
            <View style={styles.moduleCardHeader}>
              <View style={[styles.moduleIcon, { backgroundColor: module.color + '20' }]}>
                <Text style={styles.moduleIconText}>{module.icon}</Text>
              </View>
              <View style={styles.moduleInfo}>
                <Text style={styles.moduleTitle}>
                  {selectedLanguage === 'ar' ? module.titleAr : module.title}
                </Text>
                <Text style={styles.moduleSubtitle}>
                  {module.chapters.length} chapitre{module.chapters.length > 1 ? 's' : ''}
                </Text>
              </View>
              <Text style={styles.moduleArrow}>→</Text>
            </View>
            <View style={styles.moduleChapters}>
              {module.chapters.map((ch, i) => (
                <View key={ch.id} style={styles.moduleChapterItem}>
                  <View style={[styles.chapterDot, { backgroundColor: module.color }]} />
                  <Text style={styles.moduleChapterText} numberOfLines={1}>
                    {selectedLanguage === 'ar' ? ch.titleAr : ch.title}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </AnimatedCard>
      ))}

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ==================== MODULE DETAIL SCREEN ====================
function ModuleDetailScreen({ route, navigation }: any) {
  const { moduleId, language } = route.params;
  const module = getModuleById(moduleId);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  if (!module) return <View><Text>Module non trouvé</Text></View>;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Module Header */}
      <AnimatedCard delay={0}>
        <View style={[styles.moduleDetailHeader, { backgroundColor: module.color + '10' }]}>
          <Text style={styles.moduleDetailIcon}>{module.icon}</Text>
          <Text style={[styles.moduleDetailTitle, { color: module.color }]}>
            {language === 'ar' ? module.titleAr : module.title}
          </Text>
        </View>
      </AnimatedCard>

      {/* Chapters List */}
      {module.chapters.map((chapter, index) => (
        <AnimatedCard key={chapter.id} delay={100 * (index + 1)}>
          <TouchableOpacity 
            style={[styles.chapterCard, selectedChapter?.id === chapter.id && styles.chapterCardActive]}
            onPress={() => setSelectedChapter(selectedChapter?.id === chapter.id ? null : chapter)}
          >
            <View style={styles.chapterHeader}>
              <View style={styles.chapterNumber}>
                <Text style={styles.chapterNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.chapterTitle}>
                {language === 'ar' ? chapter.titleAr : chapter.title}
              </Text>
              <Text style={styles.chapterToggle}>{selectedChapter?.id === chapter.id ? '−' : '+'}</Text>
            </View>

            {selectedChapter?.id === chapter.id && (
              <View style={styles.chapterContent}>
                {/* Content */}
                <Text style={styles.contentText}>
                  {language === 'ar' ? chapter.contentAr : chapter.content}
                </Text>

                {/* Key Points */}
                <View style={styles.keyPointsSection}>
                  <Text style={styles.keyPointsTitle}>📌 Points clés</Text>
                  {(language === 'ar' ? chapter.keyPointsAr : chapter.keyPoints).map((point, i) => (
                    <View key={i} style={styles.keyPointItem}>
                      <Text style={styles.keyPointBullet}>•</Text>
                      <Text style={styles.keyPointText}>{point}</Text>
                    </View>
                  ))}
                </View>

                {/* Tips */}
                <View style={[styles.keyPointsSection, { backgroundColor: '#fef3c7' }]}>
                  <Text style={styles.keyPointsTitle}>💡 Conseils pratiques</Text>
                  {(language === 'ar' ? chapter.tipsAr : chapter.tips).map((tip, i) => (
                    <View key={i} style={styles.keyPointItem}>
                      <Text style={styles.keyPointBullet}>✦</Text>
                      <Text style={styles.keyPointText}>{tip}</Text>
                    </View>
                  ))}
                </View>

                {/* Practice Button */}
                <TouchableOpacity 
                  style={[styles.practiceBtn, { backgroundColor: module.color }]}
                  onPress={() => {
                    const categoryMap: Record<string, string> = {
                      'regles_circulation': 'reglement',
                      'signalisation': 'signalisation',
                      'priorite': 'priorite',
                      'securite': 'securite',
                      'alcool_drogues': 'alcool',
                      'secourisme': 'secourisme',
                      'ecologie': 'ecologie'
                    };
                    const catId = categoryMap[module.id] || module.id;
                    const catQuestions = getQuestionsByCategory(catId);
                    if (catQuestions.length > 0) {
                      navigation.navigate('QuizTab', {
                        screen: 'QuizPlay',
                        params: { questions: catQuestions.slice(0, 10), mode: 'category', categoryId: module.id }
                      });
                    }
                  }}
                >
                  <Text style={styles.practiceBtnText}>🎯 S'entraîner sur ce chapitre</Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </AnimatedCard>
      ))}

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ==================== QUIZ HOME SCREEN ====================
function QuizHomeScreen({ navigation, route }: any) {
  const [selectedMode, setSelectedMode] = useState<QuizMode>(route?.params?.mode || 'practice');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(route?.params?.categoryId || null);
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState<string>('all');
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  const startQuiz = () => {
    let questions: Question[] = [];
    
    if (selectedMode === 'exam') {
      questions = getExamQuestions();
    } else if (selectedMode === 'category' && selectedCategory) {
      const catQuestions = getQuestionsByCategory(selectedCategory);
      questions = getRandomQuestions(questionCount, selectedCategory);
    } else {
      let pool = [...QUESTIONS];
      if (difficulty !== 'all') {
        pool = pool.filter(q => q.difficulty === difficulty);
      }
      const shuffled = pool.sort(() => 0.5 - Math.random());
      questions = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    }

    if (questions.length === 0) {
      alert('Aucune question disponible pour cette sélection');
      return;
    }

    navigation.navigate('QuizPlay', { 
      questions, 
      mode: selectedMode, 
      categoryId: selectedCategory 
    });
  };

  const selectedCat = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Mode Selection */}
      <AnimatedCard delay={0}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🎯 Mode de quiz</Text>
        </View>
        <View style={styles.modeSelector}>
          {[
            { id: 'practice', icon: '🎯', label: 'Entraînement', desc: 'Libre' },
            { id: 'exam', icon: '📝', label: 'Examen', desc: '30 questions' },
            { id: 'category', icon: '🏷️', label: 'Par catégorie', desc: 'Choisir' },
          ].map(mode => (
            <TouchableOpacity
              key={mode.id}
              style={[styles.modeCard, selectedMode === mode.id && styles.modeCardActive]}
              onPress={() => setSelectedMode(mode.id as QuizMode)}
            >
              <Text style={styles.modeIcon}>{mode.icon}</Text>
              <Text style={[styles.modeLabel, selectedMode === mode.id && styles.modeLabelActive]}>
                {mode.label}
              </Text>
              <Text style={styles.modeDesc}>{mode.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </AnimatedCard>

      {/* Category Picker (if category mode) */}
      {selectedMode === 'category' && (
        <AnimatedCard delay={100}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🏷️ Choisir une catégorie</Text>
          </View>
          <TouchableOpacity 
            style={styles.categoryPicker}
            onPress={() => setShowCategoryPicker(true)}
          >
            <Text style={styles.categoryPickerText}>
              {selectedCat ? `${selectedCat.icon} ${selectedCat.name}` : 'Sélectionner une catégorie...'}
            </Text>
            <Text style={styles.categoryPickerArrow}>▼</Text>
          </TouchableOpacity>

          {/* Category Grid */}
          <View style={styles.categoryGrid}>
            {CATEGORIES.map(cat => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryGridItem,
                  selectedCategory === cat.id && { backgroundColor: cat.color + '20', borderColor: cat.color }
                ]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <Text style={styles.categoryGridIcon}>{cat.icon}</Text>
                <Text style={[styles.categoryGridText, selectedCategory === cat.id && { color: cat.color }]}>
                  {cat.name}
                </Text>
                <Text style={styles.categoryGridCount}>{getQuestionsByCategory(cat.id).length}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </AnimatedCard>
      )}

      {/* Question Count (if practice mode) */}
      {selectedMode === 'practice' && (
        <AnimatedCard delay={100}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>📊 Nombre de questions</Text>
          </View>
          <View style={styles.countSelector}>
            {[5, 10, 15, 20, 30].map(count => (
              <TouchableOpacity
                key={count}
                style={[styles.countBtn, questionCount === count && styles.countBtnActive]}
                onPress={() => setQuestionCount(count)}
              >
                <Text style={[styles.countBtnText, questionCount === count && styles.countBtnTextActive]}>
                  {count}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Difficulty Selector */}
          <View style={[styles.sectionHeader, { marginTop: 16 }]}>
            <Text style={styles.sectionTitle}>🎯 Difficulté</Text>
          </View>
          <View style={styles.countSelector}>
            {[
              { id: 'all', label: 'Toutes' },
              { id: 'facile', label: 'Facile' },
              { id: 'moyen', label: 'Moyen' },
              { id: 'difficile', label: 'Difficile' },
            ].map(diff => (
              <TouchableOpacity
                key={diff.id}
                style={[styles.diffBtn, difficulty === diff.id && styles.diffBtnActive]}
                onPress={() => setDifficulty(diff.id)}
              >
                <Text style={[styles.diffBtnText, difficulty === diff.id && styles.diffBtnTextActive]}>
                  {diff.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </AnimatedCard>
      )}

      {/* Start Button */}
      <AnimatedCard delay={200}>
        <TouchableOpacity style={styles.startQuizBtn} onPress={startQuiz}>
          <Text style={styles.startQuizBtnText}>
            {selectedMode === 'exam' ? '🚀 Commencer l\'examen' : '🚀 Commencer le quiz'}
          </Text>
        </TouchableOpacity>
      </AnimatedCard>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ==================== QUIZ PLAY SCREEN ====================
function QuizPlayScreen({ route, navigation }: any) {
  const { questions, mode, categoryId } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(mode === 'exam' ? 30 * 60 : null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const q = questions[currentQuestion];
  const progress = (currentQuestion + 1) / questions.length;

  // Keep scoreRef in sync with score
  useEffect(() => { scoreRef.current = score; }, [score]);

  // Timer for exam mode
  useEffect(() => {
    if (timeLeft === null) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null || prev <= 0) {
          clearInterval(timer);
          navigation.replace('QuizResult', { score: scoreRef.current, total: questions.length, answers, questions, mode });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);

    if (index === q.correctAnswer) {
      setScore(score + 1);
      setShowCorrect(true);
    } else {
      Vibration.vibrate(100);
      setShowCorrect(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsAnswered(false);
      setShowCorrect(false);
    } else {
      navigation.replace('QuizResult', { score, total: questions.length, answers, questions, mode });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.quizContainer}>
      {/* Header */}
      <View style={styles.quizHeader}>
        <View style={styles.quizProgress}>
          <Text style={styles.quizProgressText}>
            {currentQuestion + 1} / {questions.length}
          </Text>
          <ProgressBar progress={progress} color={COLORS.primary} height={6} />
        </View>
        {timeLeft !== null && (
          <View style={[styles.timerBadge, timeLeft < 60 && styles.timerBadgeWarning]}>
            <Text style={[styles.timerText, timeLeft < 60 && styles.timerTextWarning]}>
              ⏱️ {formatTime(timeLeft)}
            </Text>
          </View>
        )}
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreBadgeText}>⭐ {score}</Text>
        </View>
      </View>

      <ScrollView style={styles.quizContent} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <AnimatedCard key={currentQuestion} delay={0}>
          <View style={styles.questionCard}>
            {/* Category Badge */}
            <View style={styles.questionBadges}>
              <Badge text={CATEGORIES.find(c => c.id === q.category)?.name || q.category} 
                     color={CATEGORIES.find(c => c.id === q.category)?.color || COLORS.primary} />
              <Badge text={q.difficulty} color={
                q.difficulty === 'facile' ? COLORS.success : 
                q.difficulty === 'moyen' ? COLORS.warning : COLORS.danger
              } />
            </View>
            
            <Text style={styles.questionText}>{q.question}</Text>
          </View>
        </AnimatedCard>

        {/* Options */}
        <AnimatedCard delay={100}>
          <View style={styles.optionsContainer}>
            {q.options.map((option, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrect = i === q.correctAnswer;
              const showResult = isAnswered;
              
              let optionStyle = styles.optionButton;
              let optionTextStyle = styles.optionText;
              
              if (showResult) {
                if (isCorrect) {
                  optionStyle = [styles.optionButton, styles.optionCorrect];
                  optionTextStyle = [styles.optionText, { color: COLORS.white }];
                } else if (isSelected && !isCorrect) {
                  optionStyle = [styles.optionButton, styles.optionWrong];
                  optionTextStyle = [styles.optionText, { color: COLORS.white }];
                }
              }

              return (
                <TouchableOpacity
                  key={i}
                  style={optionStyle}
                  onPress={() => handleAnswer(i)}
                  disabled={isAnswered}
                >
                  <View style={styles.optionLetter}>
                    <Text style={[styles.optionLetterText, showResult && (isCorrect || isSelected) && { color: COLORS.white }]}>
                      {String.fromCharCode(65 + i)}
                    </Text>
                  </View>
                  <Text style={optionTextStyle}>{option}</Text>
                  {showResult && isCorrect && <Text style={styles.checkmark}>✓</Text>}
                  {showResult && isSelected && !isCorrect && <Text style={styles.xmark}>✗</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        </AnimatedCard>

        {/* Explanation */}
        {showExplanation && (
          <AnimatedCard delay={200}>
            <View style={[styles.explanationCard, showCorrect ? styles.explanationCorrect : styles.explanationWrong]}>
              <Text style={styles.explanationTitle}>
                {showCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse'}
              </Text>
              <Text style={styles.explanationText}>{q.explanation}</Text>
            </View>
          </AnimatedCard>
        )}

        {/* Next Button */}
        {isAnswered && (
          <AnimatedCard delay={250}>
            <TouchableOpacity style={styles.nextBtn} onPress={nextQuestion}>
              <Text style={styles.nextBtnText}>
                {currentQuestion < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats →'}
              </Text>
            </TouchableOpacity>
          </AnimatedCard>
        )}
      </ScrollView>
    </View>
  );
}

// ==================== QUIZ RESULT SCREEN ====================
function QuizResultScreen({ route, navigation }: any) {
  const { score, total, answers, questions, mode } = route.params;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 80;

  useEffect(() => {
    saveStats();
  }, []);

  const saveStats = async () => {
    try {
      const totalQuizzes = parseInt(await AsyncStorage.getItem('totalQuizzes') || '0') + 1;
      const totalScore = parseInt(await AsyncStorage.getItem('totalScore') || '0') + percentage;
      await AsyncStorage.setItem('totalQuizzes', String(totalQuizzes));
      await AsyncStorage.setItem('totalScore', String(totalScore));
      await AsyncStorage.setItem('averageScore', String(Math.round(totalScore / totalQuizzes)));
      
      // Save answered questions
      const answered = JSON.parse(await AsyncStorage.getItem('answeredQuestions') || '[]');
      const newAnswered = [...new Set([...answered, ...questions.map((q: Question) => q.id)])];
      await AsyncStorage.setItem('answeredQuestions', JSON.stringify(newAnswered));
    } catch (e) {}
  };

  const getMessage = () => {
    if (percentage >= 90) return { text: 'Excellent ! 🏆', color: COLORS.success };
    if (percentage >= 80) return { text: 'Très bien ! 🎉', color: COLORS.success };
    if (percentage >= 60) return { text: 'Bien ! 👏', color: COLORS.warning };
    if (percentage >= 40) return { text: 'Peut mieux faire 💪', color: COLORS.warning };
    return { text: 'À revoir... 📚', color: COLORS.danger };
  };

  const msg = getMessage();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Result Header */}
      <AnimatedCard delay={0}>
        <View style={[styles.resultHeader, { backgroundColor: msg.color + '10' }]}>
          <Text style={styles.resultEmoji}>{passed ? '🏆' : '📚'}</Text>
          <Text style={[styles.resultMessage, { color: msg.color }]}>{msg.text}</Text>
          <Text style={styles.resultScore}>{score}/{total}</Text>
          <Text style={[styles.resultPercentage, { color: msg.color }]}>{percentage}%</Text>
          
          {mode === 'exam' && (
            <View style={styles.examResult}>
              <Text style={[styles.examResultText, { color: passed ? COLORS.success : COLORS.danger }]}>
                {passed ? '✅ EXAMEN RÉUSSI' : '❌ EXAMEN ÉCHOUÉ'}
              </Text>
              <Text style={styles.examResultSubtext}>
                {passed ? '24/30 minimum requis' : '24/30 minimum requis'}
              </Text>
            </View>
          )}
        </View>
      </AnimatedCard>

      {/* Stats */}
      <AnimatedCard delay={100}>
        <View style={styles.resultStats}>
          <StatCard icon="✅" value={score} label="Bonnes réponses" color={COLORS.success} />
          <StatCard icon="❌" value={total - score} label="Mauvaises" color={COLORS.danger} />
          <StatCard icon="📊" value={`${percentage}%`} label="Score" color={COLORS.primary} />
        </View>
      </AnimatedCard>

      {/* Answers Review */}
      <AnimatedCard delay={200}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>📋 Détail des réponses</Text>
        </View>
        {questions.map((q: Question, index: number) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === q.correctAnswer;
          return (
            <View key={q.id} style={[styles.reviewItem, isCorrect ? styles.reviewCorrect : styles.reviewWrong]}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewNumber}>Q{index + 1}</Text>
                <Text style={styles.reviewIcon}>{isCorrect ? '✅' : '❌'}</Text>
              </View>
              <Text style={styles.reviewQuestion} numberOfLines={2}>{q.question}</Text>
              {!isCorrect && userAnswer !== null && (
                <Text style={styles.reviewWrongAnswer}>
                  Votre réponse: {q.options[userAnswer]}
                </Text>
              )}
              {!isCorrect && (
                <Text style={styles.reviewCorrectAnswer}>
                  Bonne réponse: {q.options[q.correctAnswer]}
                </Text>
              )}
            </View>
          );
        })}
      </AnimatedCard>

      {/* Action Buttons */}
      <AnimatedCard delay={300}>
        <View style={styles.resultActions}>
          <TouchableOpacity 
            style={styles.retryBtn}
            onPress={() => navigation.navigate('QuizHome')}
          >
            <Text style={styles.retryBtnText}>🔄 Recommencer</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.retryBtn, { backgroundColor: COLORS.secondary }]}
            onPress={() => navigation.navigate('HomeTab')}
          >
            <Text style={styles.retryBtnText}>🏠 Accueil</Text>
          </TouchableOpacity>
        </View>
      </AnimatedCard>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ==================== STATS SCREEN ====================
function StatsScreen() {
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    averageScore: 0,
    answeredQuestions: 0,
    totalQuestions: QUESTIONS.length,
    categoryStats: {} as Record<string, { correct: number; total: number }>
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const totalQuizzes = parseInt(await AsyncStorage.getItem('totalQuizzes') || '0');
      const averageScore = parseInt(await AsyncStorage.getItem('averageScore') || '0');
      const answered = JSON.parse(await AsyncStorage.getItem('answeredQuestions') || '[]');
      
      setStats({
        totalQuizzes,
        averageScore,
        answeredQuestions: answered.length,
        totalQuestions: QUESTIONS.length,
        categoryStats: {}
      });
    } catch (e) {}
  };

  const resetStats = async () => {
    await AsyncStorage.multiRemove(['totalQuizzes', 'averageScore', 'answeredQuestions', 'totalScore']);
    setStats({
      totalQuizzes: 0,
      averageScore: 0,
      answeredQuestions: 0,
      totalQuestions: QUESTIONS.length,
      categoryStats: {}
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Overview Stats */}
      <AnimatedCard delay={0}>
        <View style={styles.statsOverview}>
          <View style={styles.statsCircle}>
            <Text style={styles.statsCircleValue}>{stats.totalQuizzes}</Text>
            <Text style={styles.statsCircleLabel}>Quiz effectués</Text>
          </View>
          <View style={styles.statsCircle}>
            <Text style={[styles.statsCircleValue, { color: COLORS.success }]}>{stats.averageScore}%</Text>
            <Text style={styles.statsCircleLabel}>Score moyen</Text>
          </View>
        </View>
      </AnimatedCard>

      {/* Progress Overview */}
      <AnimatedCard delay={100}>
        <View style={styles.statsCard}>
          <Text style={styles.statsCardTitle}>📈 Progression</Text>
          <View style={styles.progressStat}>
            <Text style={styles.progressStatLabel}>Questions répondues</Text>
            <Text style={styles.progressStatValue}>
              {stats.answeredQuestions} / {stats.totalQuestions}
            </Text>
          </View>
          <ProgressBar 
            progress={stats.answeredQuestions / stats.totalQuestions} 
            color={COLORS.primary} 
            height={12}
          />
          <Text style={styles.progressStatPercent}>
            {Math.round((stats.answeredQuestions / stats.totalQuestions) * 100)}% complété
          </Text>
        </View>
      </AnimatedCard>

      {/* Category Breakdown */}
      <AnimatedCard delay={200}>
        <View style={styles.statsCard}>
          <Text style={styles.statsCardTitle}>🏷️ Par catégorie</Text>
          {CATEGORIES.map(cat => {
            const catQuestions = getQuestionsByCategory(cat.id);
            const catAnswered = Math.min(catQuestions.length, Math.floor(stats.answeredQuestions / CATEGORIES.length));
            return (
              <View key={cat.id} style={styles.categoryStatItem}>
                <View style={styles.categoryStatInfo}>
                  <Text style={styles.categoryStatIcon}>{cat.icon}</Text>
                  <Text style={styles.categoryStatName}>{cat.name}</Text>
                </View>
                <View style={styles.categoryStatBar}>
                  <ProgressBar 
                    progress={catQuestions.length > 0 ? catAnswered / catQuestions.length : 0} 
                    color={cat.color} 
                    height={6}
                  />
                  <Text style={styles.categoryStatCount}>{catAnswered}/{catQuestions.length}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </AnimatedCard>

      {/* Difficulty Stats */}
      <AnimatedCard delay={300}>
        <View style={styles.statsCard}>
          <Text style={styles.statsCardTitle}>🎯 Par difficulté</Text>
          {[
            { id: 'facile', label: 'Facile', color: COLORS.success, icon: '😊' },
            { id: 'moyen', label: 'Moyen', color: COLORS.warning, icon: '😐' },
            { id: 'difficile', label: 'Difficile', color: COLORS.danger, icon: '😰' },
          ].map(diff => {
            const diffQuestions = QUESTIONS.filter(q => q.difficulty === diff.id);
            return (
              <View key={diff.id} style={styles.diffStatItem}>
                <Text style={styles.diffStatIcon}>{diff.icon}</Text>
                <Text style={styles.diffStatName}>{diff.label}</Text>
                <Text style={[styles.diffStatCount, { color: diff.color }]}>{diffQuestions.length} questions</Text>
              </View>
            );
          })}
        </View>
      </AnimatedCard>

      {/* Reset Button */}
      <AnimatedCard delay={400}>
        <TouchableOpacity style={styles.resetBtn} onPress={resetStats}>
          <Text style={styles.resetBtnText}>🗑️ Réinitialiser les statistiques</Text>
        </TouchableOpacity>
      </AnimatedCard>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ==================== TAB NAVIGATOR ====================
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏠</Text>,
          tabBarLabel: 'Accueil',
        }}
      />
      <Tab.Screen 
        name="CourseTab" 
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📚</Text>,
          tabBarLabel: 'Cours',
        }}
      />
      <Tab.Screen 
        name="QuizTab" 
        component={QuizHomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>❓</Text>,
          tabBarLabel: 'Quiz',
        }}
      />
      <Tab.Screen 
        name="StatsTab" 
        component={StatsScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📊</Text>,
          tabBarLabel: 'Stats',
        }}
      />
    </Tab.Navigator>
  );
}

// ==================== MAIN APP ====================
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.white },
          headerTintColor: COLORS.text,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ModuleDetail" component={ModuleDetailScreen} options={{ title: 'Détail du module' }} />
        <Stack.Screen name="QuizPlay" component={QuizPlayScreen} options={{ title: 'Quiz', headerBackVisible: false }} />
        <Stack.Screen name="QuizResult" component={QuizResultScreen} options={{ title: 'Résultat', headerBackVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==================== STYLES ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  // Home Header
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  homeTitle: {
    fontSize: 28,
    ...FONTS.bold,
    color: COLORS.text,
  },
  homeSubtitle: {
    fontSize: 16,
    color: COLORS.primary,
    ...FONTS.semibold,
  },
  headerStats: {
    backgroundColor: COLORS.primary + '10',
    borderRadius: 16,
    padding: 16,
  },
  headerStatItem: {
    alignItems: 'center',
  },
  headerStatValue: {
    fontSize: 24,
    ...FONTS.bold,
    color: COLORS.primary,
  },
  headerStatLabel: {
    fontSize: 12,
    color: COLORS.textLight,
  },

  // Progress Card
  progressCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressCardTitle: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  progressCardPercent: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.success,
  },
  progressCardText: {
    fontSize: 13,
    color: COLORS.textLight,
    marginTop: 8,
  },

  // Quick Actions
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  quickActionBtn: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 6,
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    ...FONTS.semibold,
  },
  quickActionSubtext: {
    fontSize: 11,
    color: COLORS.textLight,
    marginTop: 2,
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  seeAllBtn: {
    fontSize: 14,
    color: COLORS.primary,
    ...FONTS.medium,
  },

  // Categories Scroll
  categoriesScroll: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    marginRight: 10,
    borderWidth: 1,
  },
  categoryPillIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  categoryPillText: {
    fontSize: 13,
    ...FONTS.medium,
    marginRight: 8,
  },
  categoryPillCount: {
    fontSize: 11,
    color: COLORS.textMuted,
  },

  // Question Preview
  questionPreview: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  questionPreviewHeader: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  questionPreviewText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },

  // Tip Card
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#fef3c7',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tipEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    ...FONTS.semibold,
    color: COLORS.text,
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    color: COLORS.textLight,
    lineHeight: 18,
  },

  // Language Toggle
  languageToggle: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 4,
  },
  langBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  langBtnActive: {
    backgroundColor: COLORS.primary,
  },
  langBtnText: {
    fontSize: 14,
    ...FONTS.medium,
    color: COLORS.textLight,
  },
  langBtnTextActive: {
    color: COLORS.white,
    ...FONTS.semibold,
  },

  // Course Stats
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    borderLeftWidth: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    ...FONTS.bold,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.textLight,
    marginTop: 4,
  },

  // Module Card
  moduleCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  moduleCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moduleIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  moduleIconText: {
    fontSize: 24,
  },
  moduleInfo: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  moduleSubtitle: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  moduleArrow: {
    fontSize: 20,
    color: COLORS.textMuted,
  },
  moduleChapters: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  moduleChapterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  chapterDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 10,
  },
  moduleChapterText: {
    fontSize: 13,
    color: COLORS.textLight,
    flex: 1,
  },

  // Module Detail
  moduleDetailHeader: {
    alignItems: 'center',
    padding: 24,
    margin: 16,
    borderRadius: 16,
  },
  moduleDetailIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  moduleDetailTitle: {
    fontSize: 22,
    ...FONTS.bold,
    textAlign: 'center',
  },

  // Chapter Card
  chapterCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  chapterCardActive: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  chapterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  chapterNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary + '10',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  chapterNumberText: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.primary,
  },
  chapterTitle: {
    flex: 1,
    fontSize: 15,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  chapterToggle: {
    fontSize: 24,
    color: COLORS.primary,
    ...FONTS.bold,
  },
  chapterContent: {
    padding: 16,
    paddingTop: 0,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.text,
    marginBottom: 16,
  },
  keyPointsSection: {
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  keyPointsTitle: {
    fontSize: 14,
    ...FONTS.semibold,
    color: COLORS.text,
    marginBottom: 8,
  },
  keyPointItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  keyPointBullet: {
    fontSize: 14,
    color: COLORS.primary,
    marginRight: 8,
  },
  keyPointText: {
    fontSize: 13,
    color: COLORS.text,
    flex: 1,
    lineHeight: 20,
  },
  practiceBtn: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  practiceBtnText: {
    fontSize: 15,
    ...FONTS.semibold,
    color: COLORS.white,
  },

  // Quiz Home
  modeSelector: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  modeCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  modeCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '05',
  },
  modeIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  modeLabel: {
    fontSize: 13,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  modeLabelActive: {
    color: COLORS.primary,
  },
  modeDesc: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: 4,
  },

  // Category Picker
  categoryPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryPickerText: {
    fontSize: 15,
    color: COLORS.text,
  },
  categoryPickerArrow: {
    fontSize: 12,
    color: COLORS.textMuted,
  },

  // Category Grid
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  categoryGridItem: {
    width: '31%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    margin: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryGridIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  categoryGridText: {
    fontSize: 11,
    ...FONTS.medium,
    color: COLORS.text,
    textAlign: 'center',
  },
  categoryGridCount: {
    fontSize: 10,
    color: COLORS.textMuted,
    marginTop: 4,
  },

  // Count Selector
  countSelector: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  countBtn: {
    width: 56,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  countBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  countBtnText: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  countBtnTextActive: {
    color: COLORS.white,
  },

  // Difficulty Selector
  diffBtn: {
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  diffBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  diffBtnText: {
    fontSize: 13,
    ...FONTS.medium,
    color: COLORS.text,
  },
  diffBtnTextActive: {
    color: COLORS.white,
  },

  // Start Quiz
  startQuizBtn: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  startQuizBtnText: {
    fontSize: 17,
    ...FONTS.bold,
    color: COLORS.white,
  },

  // Quiz Play
  quizContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
    backgroundColor: COLORS.white,
  },
  quizProgress: {
    flex: 1,
    marginRight: 12,
  },
  quizProgressText: {
    fontSize: 13,
    ...FONTS.semibold,
    color: COLORS.textLight,
    marginBottom: 6,
  },
  timerBadge: {
    backgroundColor: COLORS.primary + '10',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  timerBadgeWarning: {
    backgroundColor: COLORS.danger + '10',
  },
  timerText: {
    fontSize: 13,
    ...FONTS.bold,
    color: COLORS.primary,
  },
  timerTextWarning: {
    color: COLORS.danger,
  },
  scoreBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  scoreBadgeText: {
    fontSize: 13,
    ...FONTS.bold,
    color: COLORS.warning,
  },
  quizContent: {
    flex: 1,
    padding: 16,
  },

  // Question Card
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  questionBadges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  questionText: {
    fontSize: 17,
    ...FONTS.semibold,
    color: COLORS.text,
    lineHeight: 26,
  },

  // Options
  optionsContainer: {
    marginBottom: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  optionCorrect: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },
  optionWrong: {
    backgroundColor: COLORS.danger,
    borderColor: COLORS.danger,
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLetterText: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.text,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
  },
  checkmark: {
    fontSize: 20,
    color: COLORS.white,
    ...FONTS.bold,
  },
  xmark: {
    fontSize: 20,
    color: COLORS.white,
    ...FONTS.bold,
  },

  // Explanation
  explanationCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  explanationCorrect: {
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: COLORS.success + '30',
  },
  explanationWrong: {
    backgroundColor: '#fee2e2',
    borderWidth: 1,
    borderColor: COLORS.danger + '30',
  },
  explanationTitle: {
    fontSize: 15,
    ...FONTS.semibold,
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 22,
  },

  // Next Button
  nextBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  nextBtnText: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.white,
  },

  // Badge
  badge: {
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    ...FONTS.semibold,
  },

  // Progress Bar
  progressBarContainer: {
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },

  // Result Screen
  resultHeader: {
    alignItems: 'center',
    padding: 32,
    margin: 16,
    borderRadius: 20,
  },
  resultEmoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  resultMessage: {
    fontSize: 22,
    ...FONTS.bold,
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 48,
    ...FONTS.bold,
    color: COLORS.text,
  },
  resultPercentage: {
    fontSize: 32,
    ...FONTS.bold,
    marginTop: 8,
  },
  examResult: {
    marginTop: 16,
    alignItems: 'center',
  },
  examResultText: {
    fontSize: 16,
    ...FONTS.bold,
  },
  examResultSubtext: {
    fontSize: 13,
    color: COLORS.textLight,
    marginTop: 4,
  },

  // Result Stats
  resultStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  // Review
  reviewItem: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderLeftWidth: 4,
  },
  reviewCorrect: {
    borderLeftColor: COLORS.success,
  },
  reviewWrong: {
    borderLeftColor: COLORS.danger,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  reviewNumber: {
    fontSize: 12,
    ...FONTS.semibold,
    color: COLORS.textLight,
  },
  reviewIcon: {
    fontSize: 16,
  },
  reviewQuestion: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
  reviewWrongAnswer: {
    fontSize: 12,
    color: COLORS.danger,
    marginTop: 6,
  },
  reviewCorrectAnswer: {
    fontSize: 12,
    color: COLORS.success,
    marginTop: 4,
  },

  // Result Actions
  resultActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  retryBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  retryBtnText: {
    fontSize: 15,
    ...FONTS.semibold,
    color: COLORS.white,
  },

  // Stats Screen
  statsOverview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    margin: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statsCircle: {
    alignItems: 'center',
  },
  statsCircleValue: {
    fontSize: 36,
    ...FONTS.bold,
    color: COLORS.primary,
  },
  statsCircleLabel: {
    fontSize: 13,
    color: COLORS.textLight,
    marginTop: 4,
  },

  statsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statsCardTitle: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.text,
    marginBottom: 16,
  },
  progressStat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressStatLabel: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  progressStatValue: {
    fontSize: 14,
    ...FONTS.semibold,
    color: COLORS.text,
  },
  progressStatPercent: {
    fontSize: 13,
    color: COLORS.textLight,
    marginTop: 8,
    textAlign: 'center',
  },
  categoryStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryStatInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  categoryStatIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  categoryStatName: {
    fontSize: 13,
    color: COLORS.text,
    flex: 1,
  },
  categoryStatBar: {
    flex: 1,
    marginLeft: 12,
  },
  categoryStatCount: {
    fontSize: 11,
    color: COLORS.textLight,
    marginTop: 4,
  },
  diffStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  diffStatIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  diffStatName: {
    fontSize: 14,
    color: COLORS.text,
    flex: 1,
  },
  diffStatCount: {
    fontSize: 13,
    ...FONTS.semibold,
  },

  resetBtn: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.danger + '10',
    alignItems: 'center',
    marginBottom: 16,
  },
  resetBtnText: {
    fontSize: 14,
    color: COLORS.danger,
    ...FONTS.medium,
  },

  // Tab Bar
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 11,
    ...FONTS.medium,
  },
});
