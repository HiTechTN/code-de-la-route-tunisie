// =====================================================
// ترجمات التطبيق بالدارجة التونسية
// Traductions en arabe tunisien (dialectal)
// =====================================================

export type Language = 'fr' | 'ar';

export const TRANSLATIONS = {
  // ==================== NAVIGATION ====================
  nav: {
    home: { fr: 'Accueil', ar: 'الرئيسية' },
    courses: { fr: 'Cours', ar: ' الدروس' },
    quiz: { fr: 'Quiz', ar: 'الاختبار' },
    favorites: { fr: 'Favoris', ar: 'المفضلة' },
    stats: { fr: 'Stats', ar: 'الإحصائيات' },
  },

  // ==================== HOME SCREEN ====================
  home: {
    greetingMorning: { fr: 'Bonjour ☀️', ar: 'صباح الخير ☀️' },
    greetingAfternoon: { fr: 'Bon après-midi 🌤️', ar: 'مساء الخير 🌤️' },
    greetingEvening: { fr: 'Bonsoir 🌙', ar: 'مساء الخير 🌙' },
    title: { fr: 'Code de la Route', ar: 'قانون الطرقات' },
    subtitle: { fr: '🇹🇳 Tunisie', ar: '🇹🇳 تونس' },
    questions: { fr: 'Questions', ar: 'أسئلة' },
    progress: { fr: 'Votre progression', ar: 'تقدمك' },
    questionsAnswered: { fr: 'questions répondues', ar: 'أسئلة مجابة' },
    exam: { fr: 'Examen', ar: 'الامتحان' },
    examSubtext: { fr: '30 questions', ar: '30 سؤال' },
    training: { fr: 'Entraînement', ar: 'التدريب' },
    trainingSubtext: { fr: '10 questions', ar: '10 أسئلة' },
    courses: { fr: 'Cours', ar: 'الدروس' },
    coursesSubtext: { fr: '6 modules', ar: '6 وحدات' },
    categories: { fr: 'Catégories', ar: 'الفئات' },
    seeAll: { fr: 'Voir tout →', ar: 'عرض الكل →' },
    popularQuestions: { fr: 'Questions populaires', ar: 'الأسئلة الشائعة' },
    dailyTip: { fr: 'Astuce du jour', ar: 'نصيحة اليوم' },
    tipText: { fr: 'La formule magique pour la distance de sécurité: votre vitesse en km/h divisée par 10 = distance en mètres. Par exemple à 90 km/h, gardez 9 mètres minimum !', ar: 'الصيغة السحرية لمسافة الأمان: سرعتك بالكيلومتر في الساعة مقسومة على 10 = المسافة بالأمتار. مثال: عند 90 كم/ساعة، اترك 9 أمتار على الأقل!' },
  },

  // ==================== COURSES SCREEN ====================
  courses: {
    title: { fr: 'Cours', ar: 'الدروس' },
    modules: { fr: 'Modules', ar: 'الوحدات' },
    chapters: { fr: 'Chapitres', ar: 'الفصول' },
    questions: { fr: 'Questions', ar: 'الأسئلة' },
    chaptersCount: { fr: 'chapitre', ar: 'فصل' },
    chaptersCountPlural: { fr: 'chapitres', ar: 'فصول' },
    practice: { fr: 'S\'entraîner sur ce chapitre', ar: 'تدرب على هذا الفصل' },
    keyPoints: { fr: 'Points clés', ar: 'النقاط الرئيسية' },
    practicalTips: { fr: 'Conseils pratiques', ar: 'نصائح عملية' },
    moduleNotFound: { fr: 'Module non trouvé', ar: 'الوحدة غير موجودة' },
  },

  // ==================== QUIZ SCREEN ====================
  quiz: {
    quizMode: { fr: 'Mode de quiz', ar: 'وضع الاختبار' },
    training: { fr: 'Entraînement', ar: 'التدريب' },
    trainingDesc: { fr: 'Libre', ar: 'حر' },
    exam: { fr: 'Examen', ar: 'الامتحان' },
    examDesc: { fr: '30 questions', ar: '30 سؤال' },
    byCategory: { fr: 'Par catégorie', ar: 'حسب الفئة' },
    byCategoryDesc: { fr: 'Choisir', ar: 'اختيار' },
    favorites: { fr: 'Favoris', ar: 'المفضلة' },
    favoritesDesc: { fr: 'Réviser', ar: 'مراجعة' },
    chooseCategory: { fr: 'Choisir une catégorie', ar: 'اختر فئة' },
    selectCategory: { fr: 'Sélectionner une catégorie...', ar: 'اختر فئة...' },
    numberOfQuestions: { fr: 'Nombre de questions', ar: 'عدد الأسئلة' },
    difficulty: { fr: 'Difficulté', ar: 'الصعوبة' },
    all: { fr: 'Toutes', ar: 'الكل' },
    easy: { fr: 'Facile', ar: 'سهل' },
    medium: { fr: 'Moyen', ar: 'متوسط' },
    hard: { fr: 'Difficile', ar: 'صعب' },
    startQuiz: { fr: '🚀 Commencer le quiz', ar: '🚀 بدء الاختبار' },
    startExam: { fr: '🚀 Commencer l\'examen', ar: '🚀 بدء الامتحان' },
    noQuestions: { fr: 'Aucune question disponible pour cette sélection', ar: 'لا توجد أسئلة متاحة لهذا الاختيار' },
  },

  // ==================== QUIZ PLAY ====================
  quizPlay: {
    nextQuestion: { fr: 'Question suivante →', ar: 'السؤال التالي →' },
    viewResults: { fr: 'Voir les résultats →', ar: 'عرض النتائج →' },
    correctAnswer: { fr: '✅ Bonne réponse !', ar: '✅ إجابة صحيحة!' },
    wrongAnswer: { fr: '❌ Mauvaise réponse', ar: '❌ إجابة خاطئة' },
    timeWarning: { fr: 'Temps restant', ar: 'الوقت المتبقي' },
  },

  // ==================== QUIZ RESULT ====================
  quizResult: {
    excellent: { fr: 'Excellent ! 🏆', ar: 'ممتاز! 🏆' },
    veryGood: { fr: 'Très bien ! 🎉', ar: 'جيد جداً! 🎉' },
    good: { fr: 'Bien ! 👏', ar: 'جيد! 👏' },
    canDoBetter: { fr: 'Peut mieux faire 💪', ar: 'يمكن تحسينه 💪' },
    review: { fr: 'À revoir... 📚', ar: 'يحتاج مراجعة... 📚' },
    examPassed: { fr: '✅ EXAMEN RÉUSSI', ar: '✅ نجاح في الامتحان' },
    examFailed: { fr: '❌ EXAMEN ÉCHOUÉ', ar: '❌ رسوب في الامتحان' },
    minScore: { fr: '24/30 minimum requis', ar: '24/30 كحد أدنى مطلوب' },
    correctAnswers: { fr: 'Bonnes réponses', ar: 'إجابات صحيحة' },
    wrongAnswers: { fr: 'Mauvaises', ar: 'خاطئة' },
    score: { fr: 'Score', ar: 'النتيجة' },
    answersDetail: { fr: 'Détail des réponses', ar: 'تفاصيل الإجابات' },
    yourAnswer: { fr: 'Votre réponse', ar: 'إجابتك' },
    correctResponse: { fr: 'Bonne réponse', ar: 'الإجابة الصحيحة' },
    retry: { fr: '🔄 Recommencer', ar: '🔄 إعادة' },
    home: { fr: '🏠 Accueil', ar: '🏠 الرئيسية' },
  },

  // ==================== FAVORITES ====================
  favorites: {
    title: { fr: 'Mes Favoris', ar: 'مفضلاتي' },
    questionsMarked: { fr: 'questions marquées', ar: 'أسئلة مفضلة' },
    questionMarked: { fr: 'question marquée', ar: 'سؤال مفضل' },
    reviewQuiz: { fr: 'Quiz des Favoris', ar: 'اختبار المفضلة' },
    reviewQuizSubtext: { fr: 'Réviser les questions marquées', ar: 'مراجعة الأسئلة المفضلة' },
    favoriteQuestions: { fr: 'Questions favorites', ar: 'الأسئلة المفضلة' },
    noFavorites: { fr: 'Aucune question en favoris', ar: 'لا توجد أسئلة مفضلة' },
    noFavoritesSubtext: { fr: 'Marquez les questions difficiles pendant le quiz pour les réviser ici', ar: 'حدد الأسئلة الصعبة أثناء الاختبار لمراجعتها هنا' },
    review: { fr: '📝 Réviser', ar: '📝 مراجعة' },
    markDifficult: { fr: '⭐ Marquer difficile', ar: '⭐ تحديد كصعب' },
    removeFavorite: { fr: '✕ Retirer', ar: '✕ إزالة' },
  },

  // ==================== STATS ====================
  stats: {
    quizzesTaken: { fr: 'Quiz effectués', ar: 'اختبارات منجزة' },
    averageScore: { fr: 'Score moyen', ar: 'متوسط النتائج' },
    progression: { fr: 'Progression', ar: 'التقدم' },
    questionsAnswered: { fr: 'Questions répondues', ar: 'أسئلة مجابة' },
    completed: { fr: 'complété', ar: 'مكتمل' },
    byCategory: { fr: 'Par catégorie', ar: 'حسب الفئة' },
    byDifficulty: { fr: 'Par difficulté', ar: 'حسب الصعوبة' },
    reset: { fr: '🗑️ Réinitialiser les statistiques', ar: '🗑️ إعادة تعيين الإحصائيات' },
  },

  // ==================== COMMON ====================
  common: {
    loading: { fr: 'Chargement...', ar: 'جاري التحميل...' },
    error: { fr: 'Erreur', ar: 'خطأ' },
    ok: { fr: 'OK', ar: 'موافق' },
    cancel: { fr: 'Annuler', ar: 'إلغاء' },
    confirm: { fr: 'Confirmer', ar: 'تأكيد' },
    back: { fr: 'Retour', ar: 'رجوع' },
    next: { fr: 'Suivant', ar: 'التالي' },
    previous: { fr: 'Précédent', ar: 'السابق' },
    save: { fr: 'Sauvegarder', ar: 'حفظ' },
    delete: { fr: 'Supprimer', ar: 'حذف' },
    search: { fr: 'Rechercher', ar: 'بحث' },
    noResults: { fr: 'Aucun résultat', ar: 'لا توجد نتائج' },
    minutes: { fr: 'min', ar: 'دقيقة' },
    seconds: { fr: 'sec', ar: 'ثانية' },
    questions: { fr: 'questions', ar: 'أسئلة' },
    question: { fr: 'question', ar: 'سؤال' },
  },

  // ==================== LANGUAGE ====================
  language: {
    french: { fr: '🇫🇷 Français', ar: '🇫🇷 فرنسي' },
    arabic: { fr: '🇹🇳 عربي', ar: '🇹🇳 تونسي' },
  },

  // ==================== CATEGORY NAMES ====================
  categories: {
    signalisation: { fr: 'Signalisation', ar: 'الإشارات' },
    priorite: { fr: 'Priorité', ar: 'الأولوية' },
    vitesse: { fr: 'Vitesse', ar: 'السرعة' },
    stationnement: { fr: 'Stationnement', ar: 'التوقف' },
    securite: { fr: 'Sécurité', ar: 'الأمان' },
    alcool: { fr: 'Alcool', ar: 'الكحول' },
    secourisme: { fr: 'Secourisme', ar: 'الإسعافات' },
    mecanique: { fr: 'Mécanique', ar: 'الميكانيك' },
    ecologie: { fr: 'Écologie', ar: 'البيئة' },
    reglement: { fr: 'Règlement', ar: 'اللوائح' },
    panneaux: { fr: 'Panneaux', ar: 'اللافتات' },
    techniques: { fr: 'Techniques', ar: 'التقنيات' },
  },
};

// Helper function to get translation
export const t = (key: string, lang: Language = 'fr'): string => {
  const keys = key.split('.');
  let value: any = TRANSLATIONS;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  if (value && typeof value === 'object' && lang in value) {
    return value[lang];
  }
  
  return key;
};

// Helper function to get category name translation
export const getCategoryName = (categoryId: string, lang: Language = 'fr'): string => {
  const category = TRANSLATIONS.categories[categoryId as keyof typeof TRANSLATIONS.categories];
  if (category) {
    return category[lang];
  }
  return categoryId;
};
