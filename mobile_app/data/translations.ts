// =====================================================
// ترجمات التطبيق بالدارجة التونسية
// Traductions en arabe tunisien (dialectal)
// =====================================================

export type Language = 'fr' | 'ar';

export const TRANSLATIONS = {
  // ==================== NAVIGATION ====================
  nav: {
    home: { fr: 'Accueil', ar: 'الرئيسية' },
    courses: { fr: 'Cours', ar: 'الدروس' },
    quiz: { fr: 'Quiz', ar: 'الاختبار' },
    favorites: { fr: 'Favoris', ar: 'المفضلة' },
    stats: { fr: 'Stats', ar: 'الإحصائيات' },
    moduleDetail: { fr: 'Détail du module', ar: 'تفاصيل الوحدة' },
    hazardousStudy: { fr: 'Matières Dangereuses', ar: 'المواد الخطرة' },
    result: { fr: 'Résultat', ar: 'النتيجة' },
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
    coursesSubtext: { fr: '11 modules', ar: '11 وحدة' },
    categories: { fr: 'Catégories', ar: 'الفئات' },
    seeAll: { fr: 'Voir tout →', ar: 'عرض الكل →' },
    popularQuestions: { fr: 'Questions populaires', ar: 'الأسئلة الشائعة' },
    dailyTip: { fr: 'Astuce du jour', ar: 'نصيحة اليوم' },
    tipText: { fr: 'La formule magique pour la distance de sécurité: votre vitesse en km/h divisée par 10 = distance en mètres. Par exemple à 90 km/h, gardez 9 mètres minimum !', ar: 'الصيغة السحرية لمسافة الأمان: سرعتك بالكيلومتر في الساعة مقسومة على 10 = المسافة بالأمتار. مثال: عند 90 كم/ساعة، اترك 9 أمتار على الأقل!' },
    studyStreak: { fr: 'Série d\'étude', ar: 'سلسلة الدراسة' },
    day: { fr: 'jour', ar: 'يوم' },
    days: { fr: 'jours', ar: 'أيام' },
    bestStreak: { fr: 'Meilleure série', ar: 'أفضل سلسلة' },
    hazardousTitle: { fr: 'Matières Dangereuses', ar: 'المواد الخطرة' },
    hazardousSubtext: { fr: 'HM', ar: 'مواد خطرة' },
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
    noFavoritesInQuiz: { fr: 'Aucune question en favoris. Marquez des questions pendant le quiz !', ar: 'لا توجد أسئلة مفضلة. حدد أسئلة أثناء الاختبار!' },
    favoritesLoadError: { fr: 'Erreur lors du chargement des favoris', ar: 'خطأ في تحميل المفضلة' },
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
    favCount: { fr: 'Favoris', ar: 'المفضلة' },
    reviewLabel: { fr: 'Réviser', ar: 'مراجعة' },
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

  // ==================== HAZARDOUS MATERIALS ====================
  hazardous: {
    noQuestions: { fr: 'Aucune question disponible', ar: 'لا توجد أسئلة متاحة' },
    subtitle: { fr: 'questions • chapitres', ar: 'أسئلة • فصول' },
    progress: { fr: 'Votre progression', ar: 'تقدمك' },
    correct: { fr: 'Correctes', ar: 'صحيحة' },
    train: { fr: 'S\'entraîner', ar: 'تدريب' },
    quizSubtext: { fr: 'Quiz de 10 questions', ar: 'اختبار من 10 أسئلة' },
    quickReview: { fr: 'Révision rapide', ar: 'مراجعة سريعة' },
    courseContent: { fr: 'Contenu du cours', ar: 'محتوى الدرس' },
    classTable: { fr: 'Tableau des 9 classes', ar: 'جدول الفئات التسع' },
    class: { fr: 'Classe', ar: 'فئة' },
    class1: { fr: 'Explosifs', ar: 'المتفجرات' },
    class2: { fr: 'Gaz', ar: 'الغازات' },
    class3: { fr: 'Liquides inflammables', ar: 'السوائل القابلة للاشتعال' },
    class4: { fr: 'Solides inflammables', ar: 'الصلبات القابلة للاشتعال' },
    class5: { fr: 'Oxydants', ar: 'المؤكسدة' },
    class6: { fr: 'Substances toxiques', ar: 'المواد السامة' },
    class7: { fr: 'Radioactives', ar: 'المواد المشعة' },
    class8: { fr: 'Corrosifs', ar: 'الم-corrosive' },
    class9: { fr: 'Dangers divers', ar: 'مخاطر متنوعة' },
    studyHistory: { fr: 'Historique d\'étude', ar: 'سجل الدراسة' },
    chaptersRead: { fr: 'Chapitres lus', ar: 'فصول مقروءة' },
    questionsAnswered: { fr: 'Questions répondues', ar: 'أسئلة مجابة' },
    successRate: { fr: 'Taux de réussite', ar: 'نسبة النجاح' },
    chapterProgression: { fr: 'Progression par chapitre', ar: 'التقدم حسب الفصل' },
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

  // ==================== FLASHCARDS ====================
  flashcards: {
    title: { fr: 'Flashcards', ar: 'البطاقات التعليمية' },
    mastered: { fr: 'maîtrisées', ar: 'مُتقنة' },
    tapToFlip: { fr: 'Appuyez pour retourner', ar: 'اضغط للقلب' },
    previous: { fr: '← Précédent', ar: '← السابق' },
    next: { fr: 'Suivant →', ar: 'التالي →' },
    markMastered: { fr: '☐ Marquer', ar: '☐ تحديد كمُتقن' },
    masteredBadge: { fr: '✅ Maîtrisé', ar: '✅ مُتقن' },
    classLabel: { fr: 'Classe', ar: 'فئة' },
    description: { fr: 'Description:', ar: 'الوصف:' },
    examples: { fr: 'Exemples:', ar: 'أمثلة:' },
  },

  // ==================== ACHIEVEMENTS ====================
  achievements: {
    firstQuizName: { fr: 'Premier Quiz', ar: 'أول اختبار' },
    firstQuizDesc: { fr: 'Complétez votre premier quiz', ar: 'أكمل اختبارك الأول' },
    firstQuizReq: { fr: '1 quiz complété', ar: '1 اختبار مكتمل' },
    quizApprenticeName: { fr: 'Apprenti Quiz', ar: 'متدرب اختبار' },
    quizApprenticeDesc: { fr: 'Complétez 5 quiz', ar: 'أكمل 5 اختبارات' },
    quizApprenticeReq: { fr: '5 quiz complétés', ar: '5 اختبارات مكتملة' },
    quizMasterName: { fr: 'Maître Quiz', ar: 'خبير الاختبار' },
    quizMasterDesc: { fr: 'Complétez 10 quiz', ar: 'أكمل 10 اختبارات' },
    quizMasterReq: { fr: '10 quiz complétés', ar: '10 اختبارات مكتملة' },
    perfectScoreName: { fr: 'Score Parfait', ar: 'نتيجة مثالية' },
    perfectScoreDesc: { fr: 'Obtenez 100% à un quiz', ar: 'احصل على 100% في اختبار' },
    perfectScoreReq: { fr: '100% à un quiz', ar: '100% في اختبار' },
    weekWarriorName: { fr: 'Guerrier de la Semaine', ar: 'محارب الأسبوع' },
    weekWarriorDesc: { fr: 'Maintenez une série de 7 jours', ar: 'حافظ على سلسلة من 7 أيام' },
    weekWarriorReq: { fr: 'Série de 7 jours', ar: 'سلسلة 7 أيام' },
    hmExplorerName: { fr: 'Explorateur HM', ar: 'مستكشف المواد الخطرة' },
    hmExplorerDesc: { fr: 'Complétez tous les chapitres des matières dangereuses', ar: 'أكمل جميع فصول المواد الخطرة' },
    hmExplorerReq: { fr: 'Tous les chapitres HM lus', ar: 'جميع فصول المواد الخطرة مقروءة' },
    hmFlashcardsName: { fr: 'Maître Flashcards', ar: 'خبير البطاقات' },
    hmFlashcardsDesc: { fr: 'Maîtrisez toutes les flashcards HM', ar: 'أتقن جميع بطاقات المواد الخطرة' },
    hmFlashcardsReq: { fr: '9 flashcards maîtrisées', ar: '9 بطاقات مُتقنة' },
    bookwormName: { fr: 'Bibliophile', ar: 'عاشق الكتب' },
    bookwormDesc: { fr: 'Ajoutez 5 questions en favoris', ar: 'أضف 5 أسئلة للمفضلة' },
    bookwormReq: { fr: '5 favoris ajoutés', ar: '5 مفضلات مضافة' },
    collectorName: { fr: 'Collectionneur', ar: 'جامع' },
    collectorDesc: { fr: 'Ajoutez 10 questions en favoris', ar: 'أضف 10 أسئلة للمفضلة' },
    collectorReq: { fr: '10 favoris ajoutés', ar: '10 مفضلات مضافة' },
  },

  // ==================== LANGUAGE ====================
  language: {
    french: { fr: '🇫🇷 Français', ar: '🇫🇷 فرنسي' },
    arabic: { fr: '🇹🇳 عربي', ar: '🇹🇳 تونسي' },
  },

  // ==================== NOTIFICATIONS ====================
  notifications: {
    channelName: { fr: 'Rappels d\'entraînement', ar: 'تذكيرات التدريب' },
    channelDesc: { fr: 'Rappels quotidiens pour vous entraîner', ar: 'تذكيرات يومية للتدريب' },
    weeklyExamTitle: { fr: '📝 Simulez l\'examen !', ar: '📝 جرّب الامتحان!' },
    weeklyExamBody: { fr: 'C\'est le moment de faire un test complet de 30 questions comme le vrai examen !', ar: 'حان الوقت لإجراء اختبار كامل من 30 سؤالاً مثل الامتحان الحقيقي!' },
    testTitle: { fr: '🔔 Test de notification', ar: '🔔 اختبار الإشعارات' },
    testBody: { fr: 'Les notifications fonctionnent correctement ! Vous recevrez des rappels quotidiens.', ar: 'الإشعارات تعمل بشكل صحيح! ستتلقى تذكيرات يومية.' },
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
    matieres_dangereuses: { fr: 'Matières Dangereuses', ar: 'المواد الخطرة' },
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
