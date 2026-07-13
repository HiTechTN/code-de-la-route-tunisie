// =====================================================
// Contenu des cours du Code de la Route Tunisie
// Basé sur le programme officiel de l'ATTT
// (Agence Technique des Transports Terrestres)
// =====================================================

export type CourseModule = {
  id: string;
  title: string;
  titleAr: string;
  icon: string;
  image?: string;
  color: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  keyPoints: string[];
  keyPointsAr: string[];
  tips: string[];
  tipsAr: string[];
};

export const COURSE_MODULES: CourseModule[] = [
  // ==================== MODULE 1: SIGNALEMENT ET PANNEAUX ====================
  {
    id: 'signalisation',
    title: 'Signalisation et Panneaux',
    titleAr: 'العلامات الإرشادية واللافتات',
    icon: '🪧',
    image: 'course_images/compressed/signaux_verticaux/_icon.jpg',
    color: '#e74c3c',
    chapters: [
      {
        id: 'panneaux_danger',
        title: 'Panneaux de danger',
        titleAr: 'لافتات الخطر',
        content: `LES PANNEAUX DE DANGER (Triangles rouges):

⚠️ POINT D'EXCLAMATION = Danger général
⚠️ VIRAGE À DROITE = Virage dangereux à droite
⚠️ VIRAGE À GAUCHE = Virage dangereux à gauche
⚠️ DOUBLE VIRAGE = D'abord à droite, puis à gauche
⚠️ VIRAGE EN S = Succession de virages
⚠️ ROUTE GLISSANTE = Danger en cas de pluie
⚠️ CHUTE DE PIERRES = Risque de chute de pierres
⚠️ TRAVAUX = Travaux sur la route
⚠️ PASSAGE À NIVEAU = Croisement avec voie ferrée
⚠️ PASSAGE PIÉTON = Passage pour piétons
⚠️ ENFANTS = Zone d'école ou de jeux
⚠️ ANIMAUX SAUVAGES = Animaux sur la route
⚠️ PENTE EXCESSIVE = Descente dangereuse
⚠️ ROUTE ÉTROITE = La route se rétrécit

FORME: Triangle rouge pointe vers le haut
FONCTION: Signalent un danger à anticiper
PLACEMENT: 150m avant le danger (hors agglomération), 50m en agglomération`,
        contentAr: `لافتات الخطر (مثلثات حمراء):

⚠️ علامة تعجب = خطر عام
⚠️ منعطف يمين = منعطف خطير لليمين
⚠️ منعطف يسار = منعطف خطير لليسار
⚠️ منعطف مزدوج = أولاً يمين، ثم يسار
⚠️ منعطف على شكل S = توالٍ من المنعطفات
⚠️ طريق زلق = خطر في حالة المطر
⚠️ سقوط صخور = خطر سقوط الصخور
⚠️ أعمال = أعمال على الطريق
⚠️ عبور سكة حديدية = تقاطع مع خط سكة حديدية
⚠️ معبر راكض = معبر للمشاة
⚠️ أطفال = منطقة مدرسة أو ألعاب
⚠️ حيوانات بريّة = حيوانات على الطريق
⚠️ انحدار حاد = نزول خطير
⚠️ طريق ضيقة = تضيق الطريق

الشكل: مثلث أحمر رأسه للأعلى
الوظيفة: تشير إلى خطر يجب التنبؤ به
الوضع: على بعد 150 متراً من الخطر (خارج الحضرية)، 50 متراً في الحضرية`,
        keyPoints: [
          'Triangle rouge pointe vers le haut = Danger',
          'Placés 150m avant le danger (hors agglomération)',
          'En agglomération: 50m avant le danger',
          'Ralentissez et soyez vigilant'
        ],
        keyPointsAr: [
          'مثلث أحمر رأسه للأعلى = خطر',
          'تُوضع على بعد 150 متراً من الخطر (خارج الحضرية)',
          'في الحضرية: على بعد 50 متراً من الخطر',
          'قلل السرعة وكن حذراً'
        ],
        tips: [
          'Un triangle = "Attention, danger"',
          'Réduisez la vitesse en voyant un panneau de danger',
          'Soyez prêt à réagir rapidement'
        ],
        tipsAr: [
          'مثلث = "انتباه، خطر"',
          'قلل السرعة عند رؤية لافتة خطر',
          'كن مستعداً للتفاعل بسرعة'
        ]
      },
      {
        id: 'panneaux_interdiction',
        title: 'Panneaux d\'interdiction',
        titleAr: 'لافتات المنع',
        content: `LES PANNEAUX D'INTERDICTION (Ronds rouges):

🔴 SENS INTERDIT = Cercle rouge avec barre noire verticale
🔴 PAS DE CAMIONS = Cercle rouge avec silhouette de camion
🔴 PAS DE VÉLOS = Cercle rouge avec silhouette de vélo
🔴 PAS DE PIÉTONS = Cercle rouge avec silhouette de piéton
🔴 VITESSE MAXIMALE = Cercle rouge avec chiffre (ex: 50)
🔴 PAS DE DÉPASSEMENT = Cercle rouge avec deux voitures
🔴 PAS DE TOURNER À GAUCHE = Cercle rouge avec flèche barrée
🔴 PAS DE TOURNER À DROITE = Cercle rouge avec flèche barrée

FIN D'INTERDICTION:
• Cercle gris avec barres diagonales = Fin de zone d'interdiction
• Ex: Fin de vitesse limitée, fin de dépassement interdit

FORME: Rond rouge avec bordure rouge
FONCTION: Interdisent une action spécifique
OBLIGATION DE CONNAÎTRE: On ne doit PAS faire l'action indiquée`,
        contentAr: `لافتات المنع (دوائر حمراء):

🔴 اتجاه ممنوع = دائرة حمراء بخط أسود عمودي
🔴 ممنوع على الشاحنات = دائرة حمراء بشاحنة
🔴 ممنوع على الدراجات = دائرة حمراء بدراجة
🔴 ممنوع على المشاة = دائرة حمراء بشخص مشي
🔴 السرعة القصوى = دائرة حمراء برقم (مثال: 50)
🔴 ممنوع التجاوز = دائرة حمراء بسيارتين
🔴 ممنوع الانعطاف لليسار = دائرة حمراء بسهم مشطوب
🔴 ممنوع الانعطاف لليمين = دائرة حمراء بسهم مشطوب

نهاية المنع:
• دائرة رمادية بخطوط مائلة = نهاية منطقة المنع
• مثال: نهاية السرعة المحدودة، نهاية منع التجاوز

الشكل: دائرة حمراء بحمراء
الوظيفة: تمنع فعل محدد
إلزام المعرفة: يجب عدم القيام بالفعل الموضح`,
        keyPoints: [
          'Cercle rouge = Interdiction',
          'On ne doit PAS faire l\'action indiquée',
          'Cercle gris barré = Fin d\'interdiction',
          'Vérifiez toujours avant d\'agir'
        ],
        keyPointsAr: [
          'دائرة حمراء = منع',
          'يجب عدم القيام بالفعل الموضح',
          'دائرة رمادية مشطوبة = نهاية منع',
          'تحقق دائماً قبل التصرف'
        ],
        tips: [
          'Mémorisez: Cercle rouge = STOP à quelque chose',
          'Le panneau de fin a des barres grises',
          'Ne confondez pas interdiction et obligation'
        ],
        tipsAr: [
          'تذكر: دائرة حمراء = توقف عن شيء',
          'لافتة النهاية لها خطوط رمادية',
          'لا تخلط بين المنع والإلزام'
        ]
      },
      {
        id: 'panneaux_obligation',
        title: 'Panneaux d\'obligation',
        titleAr: 'لافتات الإلزام',
        content: `LES PANNEAUX D'OBLIGATION (Ronds bleus):

🔵 OBLIGATION DE TOURNER À DROITE
🔵 OBLIGATION DE TOURNER À GAUCHE
🔵 TOUT DROIT OBLIGATOIRE
🔵 VOIE OBLIGATOIRE (bus, vélos, taxi)
🔵 PORT OBLIGATOIRE (casque, ceinture)

LES PANNEAUX DE FIN D'OBLIGATION:
• Cercle bleu barré = Fin d'obligation

FORME: Rond bleu
FONCTION: Imposent une action obligatoire
DIFFÉRENCE: Le bleu oblige, le rouge interdit`,
        contentAr: `لافتات الإلزام (دوائر زرقاء):

🔵 إلزام بالدوران يميناً
🔵 إلزام بالدوران يساراً
🔵 إلزام بالمسار المباشر
🔵 مسار إلزامي (حافلات، دراجات، سيارات أجرة)
🔵 ارتداء إلزامي (خوذة، حزام أمان)

لافتات نهاية الإلزام:
• دائرة زرقاء مشطوبة = نهاية إلزام

الشكل: دائرة زرقاء
الوظيفة: تفرض فعل إلزامي
الفرق: الأزرق يُلزم، الأحمر يمنع`,
        keyPoints: [
          'Cercle bleu = Obligation',
          'On doit faire ce qui est indiqué',
          'Bleu oblige, Rouge interdit',
          'Barré = fin d\'obligation'
        ],
        keyPointsAr: [
          'دائرة زرقاء = إلزام',
          'يجب فعل ما هو موضح',
          'الأزرق يُلزم، الأحمر يمنع',
          'مشطوب = نهاية إلزام'
        ],
        tips: [
          'Bleu = Obligation (opposé du rouge)',
          'Pensez: "Bleu = je dois"',
          'Ne confondez pas avec les panneaux d\'information'
        ],
        tipsAr: [
          'أزرق = إلزام (عكس الأحمر)',
          'تذكر: "أزرق = يجب عليّ"',
          'لا تخلطها مع لافتات المعلومات'
        ]
      },
      {
        id: 'panneaux_information',
        title: 'Panneaux d\'information et de signalisation',
        titleAr: 'لافتات المعلومات والإشارة',
        content: `LES PANNEAUX D'INFORMATION (Rectangles):

🟢 PANNEAUX VERTS:
• Direction à suivre
• Sortie d'autoroute
• Direction touristique

🔵 PANNEAUX BLEUS:
• Itinéraire recommandé
• Parking
• Aire de repos

🟡 PANNEAUX JAUNES:
• Itinéraire obligatoire (dans certains cas)
• Déviation

⬜ PANNEAUX BLANCS:
• Indications locales
• Numéros de route

LES MARQUAGES AU SOL:
• Ligne blanche continue = Ne pas franchir
• Ligne blanche discontinue = Franchissement autorisé
• Ligne jaune continue = Sens inverse
• Bande blanche d'arrêt = Ligne d'arrêt`,
        contentAr: `لافتات المعلومات (مستطيلات):

🟢 لافتات خضراء:
• الاتجاه المتبوع
• مخرج الطريق السريع
• اتجاه سياحي

🔵 لافتات زرقاء:
• مسار موصى به
• موقف سيارات
• منطقة استراحة

🟡 لافتات صفراء:
• مسار إلزامي (في بعض الحالات)
• مسار بديل

⬜ لافتات بيضاء:
• معلومات محلية
• أرقام الطرق

علامات الأرض:
• خط أبيض مستمر = عدم العبور
• خط أبيض متقطع = العبور مسموح به
• خط أصفر مستمر = الاتجاه المعاكس
• خط أبيض للتوقف = خط التوقف`,
        keyPoints: [
          'Vert = direction/sortie',
          'Bleu = itinéraire/parking',
          'Jaune = itinéraire obligatoire/déviation',
          'Blanc = indications locales'
        ],
        keyPointsAr: [
          'أخضر = اتجاه/مخرج',
          'أزرق = مسار/موقف',
          'أصفر = مسار إلزامي/مسار بديل',
          'أبيض = معلومات محلية'
        ],
        tips: [
          'Les panneaux verts indiquent les sorties',
          'Les panneaux jaunes sont souvent des déviations',
          'Les marques au sol complètent les panneaux'
        ],
        tipsAr: [
          'اللافتات الخضراء تدل على المخارج',
          'اللافتات الصفراء غالباً مسارات بديلة',
          'علامات الأرض تكمل اللافتات'
        ]
      },
      {
        id: 'feux_signalisation',
        title: 'Feux de signalisation',
        titleAr: 'أضواء الإشارة',
        content: `LES TROIS FEUX PRINCIPAUX:

🔴 ROUGE = ARRÊT COMPLET
• Arrêtez-vous avant la ligne d'arrêt
• Attendre le vert pour repartir
• Ne pas avancer même si la voie est libre

🟡 ORANGE = PRÉPARER L'ARRÊT
• Réduisez votre vitesse
• Arrêtez-vous si possible en toute sécurité
• Ne pas accélérer pour "passer avant le rouge"

🟢 VERT = PEUT PASSER
• Vérifiez que les autres usagers s'arrêtent
• Vous pouvez circuler
• Pas de garantie de passage immédiat

FEUX CLIGNOTANTS:
• Orange clignotant = Danger, ralentissez
• Vert clignotant = Cédez le passage aux véhicules qui approchent
• Rouge clignotant = Arrêt obligatoire (comme un STOP)

FEUX AVEUGLES (trois feux du bas en haut):
• Rouge = Arrêt
• Orange = Préparer l'arrêt
• Vert = Passer`,
        contentAr: `الأضواء الثلاثة الرئيسية:

🔴 أحمر = توقف كامل
• توقف قبل خط التوقف
• انتظر الأخضر للمغادرة
• لا تتقدم حتى لو كان الطريق فارغاً

🟡 برتقالي = استعد للتوقف
• قلل سرعتك
• توقف إن أمكن بأمان
• لا تسرع لـ"تتجاوز قبل الأحمر"

🟢 أخضر = يمكنك المرور
• تحقق من أن المستخدمين الآخرين يتوقفون
• يمكنك السير
• لا ضمان للمرور الفوري

الأضواء الوامعة:
• برتقالي وامع = خطر، قلل السرعة
• أخضر وامع = أ继行 الأولوية للمركبات المقتربة
• أحمر وامع = توقف إلزامي (كالسي토بيه)

الأضواء العمياء (ثلاثة أضواء من الأسفل للأعلى):
• أحمر = توقف
• برتقالي = استعد للتوقف
• أخضر = المرور`,
        keyPoints: [
          'Rouge = Stop complet',
          'Orange = Prudence, préparez l\'arrêt',
          'Vert = Vous pouvez passer',
          'Clignotant = Danger ou cédez le passage'
        ],
        keyPointsAr: [
          'أحمر = توقف كامل',
          'برتقالي = حذر، استعد للتوقف',
          'أخضر = يمكنك المرور',
          'وامع = خطر أو أ继行 الأولوية'
        ],
        tips: [
          'Un feu Orange ne signifie JAMAIS "accélérer"',
          'Vert clignotant ≠ Vert fixe',
          'Vérifiez toujours avant de passer au vert'
        ],
        tipsAr: [
          'الضوء البرتقالي لا يعني أبداً "التسارع"',
          'أخضر وامع ≠ أخضر ثابت',
          'تحقق دائماً قبل المرور بالأخضر'
        ]
      }
    ]
  },

  // ==================== MODULE 2: LE CONDUCTEUR ET LE VÉHICULE ====================
  {
    id: 'conducteur_vehicule',
    title: 'Le Conducteur et le Véhicule',
    titleAr: 'السائق والمركبة',
    icon: '🚗',
    image: 'course_images/compressed/eclairage_arabes/_icon.jpg',
    color: '#3498db',
    chapters: [
      {
        id: 'documents_obligatoires',
        title: 'Documents obligatoires',
        titleAr: 'الوثائق الإلزامية',
        content: `LES DOCUMENTS OBLIGATOIRES:

📋 PERMIS DE CONDUIRE
• Valide pour la catégorie conduite
• À portée du conducteur en permanence
• Renouvellement selon l'âge et la catégorie

📋 CARTE GRISE (Certificat d\'immatriculation)
• Attestant l\'immatriculation du véhicule
• À bord du véhicule en permanence

📋 ASSURANCE AUTO (Responsabilité civile)
• Obligatoire pour tout véhicule
• Couvre les dommages causés aux tiers
• Carte verte ou attestation d\'assurance

📋 CONTRÔLE TECHNIQUE
• Pour les véhicules de tourisme > 4 ans
• Tous les 2 ans
• Attestation à bord du véhicule

EN CAS D'ACCIDENT:
• Constat amiable (formulaire européen)
• Numéro de police: 197
• Numéro SAMU: 190
• Numéro Pompiers: 198`,
        contentAr: `الوثائق الإلزامية:

📋 رخصة القيادة
• سارية للمصنف المقود
• يجب أن تكون بحوزة السائق دائماً
• التجديد حسب العمر والمصنف

📋 البطاقة الرمادية (شهادة التسجيل)
• تثبت تسجيل المركبة
• يجب أن تكون في المركبة دائماً

📋 تأمين السيارة (المسؤولية المدنية)
• إلزامي لكل مركبة
• يغطي الأضرار المسببة للآخرين
• البطاقة الخضراء أو شهادة التأمين

📋 الفحص التقني
• لسيارات السياحية > 4 سنوات
• كل سنتين
• شهادة في المركبة

في حالة الحادث:
• محضر مشترك (نموذج أوروبي)
• رقم الشرطة: 197
• رقم الإسعاف: 190
• رقم الإطفاء: 198`,
        keyPoints: [
          'Permis + Carte grise + Assurance + CT = Obligatoire',
          'Tous les documents doivent être à bord',
          'L\'assurance couvre les dommages aux tiers',
          'Le CT est obligatoire après 4 ans'
        ],
        keyPointsAr: [
          'رخصة + بطاقة رمادية + تأمين + فحص تقني = إلزامي',
          'جميع الوثوق يجب أن تكون في المركبة',
          'التأمين يغطي الأضرار للآخرين',
          'الفحص التقني إلزامي بعد 4 سنوات'
        ],
        tips: [
          'Gardez toujours vos documents dans le véhicule',
          'Vérifiez la date du CT régulièrement',
          'En cas d\'accident, remplissez le constat amiable'
        ],
        tipsAr: [
          'احفظ وثائقك دائماً في المركبة',
          'تحقق من تاريخ الفحص التقني بانتظام',
          'في حالة الحادث، املأ المحضر المشترك'
        ]
      },
      {
        id: 'equipement_securite',
        title: 'Équipements de sécurité',
        titleAr: 'معدات الأمان',
        content: `ÉQUIPEMENTS OBLIGATOIRES:

1️⃣ TRIANGLE DE SIGNALISATION
• Pour signaler un arrêt d'urgence
• Placer à 50m derrière le véhicule
• Obligatoire sur autoroute et routes nationales

2️⃣ GILET RÉFLÉCHISSANT (par occupant)
• Porter en cas d'arrêt sur la route
• Visible de jour comme de nuit
• Obligatoire pour le conducteur et les passagers

3️⃣ CEINTURES DE SÉCURITÉ
• Obligatoires pour TOUS les occupants
• Doivent être portées correctement (bassin + poitrine)
• Les enfants < 1,50m: siège adapté obligatoire

4️⃣ EXTINCTEUR (recommandé)
• Pour les véhicules professionnels: obligatoire
• Vérifiez la date de péremption

5️⃣ TROUSSE DE PREMIERS SECOURS (recommandée)

ÉCLAIRAGE:
• Feux de position allumés la nuit
• Phares en ville (obligatoire depuis 2022)
• Feux de brouillard par temps nébuleux`,
        contentAr: `معدات الأمان الإلزامية:

1️⃣ مثلث الإشارة
• للإشارة إلى توقف للطوارئ
• يُوضع على مسافة 50 متراً خلف المركبة
• إلزامي على الطرق السريعة والوطنية

2️⃣ سترة واقية (لكل راكب)
• تُلبس في حالة التوقف على الطريق
• مرئية نهاراً وليلاً
• إلزامية للسائق والركاب

3️⃣ أحزمة الأمان
• إلزامية لجميع الركاب
• يجب ارتداؤها بشكل صحيح (حوض + صدر)
• الأطفال < 1,50 م: مقعد مناسب إلزامي

4️⃣ طفاية حريق (موصى بها)
• للمركبات المهنية: إلزامية
• تحقق من تاريخ الصلاحية

5️⃣ صندوق إسعافات أولية (موصى به)

الإنارة:
• أضواء الموضع ليلاً
• أضواء البابور في المدينة (إلزامي منذ 2022)
• أضواء الضباب في الضباب`,
        keyPoints: [
          'Triangle à 50m + Gilet pour chaque occupant',
          'Ceintures pour TOUS, tout le temps',
          'Enfants < 1,50m: siège adapté obligatoire',
          'Feux obligatoires même en ville'
        ],
        keyPointsAr: [
          'مثلث على 50 متر + سترة لكل راكب',
          'أحزمة لجميع الأشخاص، في جميع الأوقات',
          'أطفال < 1,50 م: مقعد مناسب إلزامي',
          'أضواء إلزامية حتى في المدينة'
        ],
        tips: [
          'Vérifiez vos équipements avant chaque long trajet',
          'Le gilet doit être accessible rapidement',
          'Enseignez aux enfants les bonnes pratiques'
        ],
        tipsAr: [
          'تحقق من معداتك قبل كل رحلة طويلة',
          'السترة يجب أن تكون متاحة بسرعة',
          'علم الأطفال الممارسات الجيدة'
        ]
      },
      {
        id: 'vitesse_limites',
        title: 'Limites de vitesse',
        titleAr: 'حدود السرعة',
        content: `LIMITES DE VITESSE EN TUNISIE:

🏙️ ZONE URBAINE (agglomération):
• 50 km/h maximum
• 30 km/h dans les zones de bâtiment

🏘️ ZONE DE BÂTIMENT:
• 30 km/h maximum
• Zones résidentielles, écoles

🌳 ZONE RURALE (hors agglomération):
• 80 km/h maximum

🛣️ ROUTE NATIONALE:
• 110 km/h maximum

⏩ AUTOROUTE:
• 120 km/h maximum

AJUSTEMENTS:
• NUIT: -10 km/h par rapport au jour
• PLUIE/BROUILLARD: Réduisez la vitesse
• NEIGE: Réduisez significativement
• PNEUS USÉS: Réduisez la vitesse

VITESSE MINIMALE:
• Autoroute: 60 km/h (sauf circulation dense)
• Route nationale: 40 km/h

SANCTIONS:
• Excès < 20 km/h: Amende
• Excès 20-40 km/h: Amende + retrait de points
• Excès > 40 km/h: Suspension du permis`,
        contentAr: `حدود السرعة في تونس:

🏙️ منطقة حضرية (حضرية):
• 50 كم/ساعة كحد أقصى
• 30 كم/ساعة في منطقة المباني

🏘️ منطقة المباني:
• 30 كم/ساعة كحد أقصى
• المناطق السكنية، المدارس

🌳 منطقة ريفية (خارج الحضرية):
• 80 كم/ساعة كحد أقصى

🛣️ طريق وطني:
• 110 كم/ساعة كحد أقصى

⏩ طريق سريع:
• 120 كم/ساعة كحد أقصى

التعديلات:
• ليلاً: -10 كم/ساعة مقارنة بالنهار
• المطر/الضباب: قلل السرعة
• الثلج: قلل بشكل كبير
• إطارات مستهلكة: قلل السرعة

السرعة الدنيا:
• طريق سريع: 60 كم/ساعة (عدم التكدس)
• طريق وطني: 40 كم/ساعة

العقوبات:
• تجاوز < 20 كم/ساعة: غرامة
• تجاوز 20-40 كم/ساعة: غرامة + خصم نقاط
• تجاوز > 40 كم/ساعة: تعليق الرخصة`,
        keyPoints: [
          'Urbain = 50, Bâtiment = 30, Rural = 80',
          'Nationale = 110, Autoroute = 120',
          'Nuit: vitesse max - 10 km/h',
          'Pluie: réduire la vitesse obligatoirement'
        ],
        keyPointsAr: [
          'حضرية = 50، مباني = 30، ريفية = 80',
          'وطنية = 110، طريق سريع = 120',
          'ليلاً: السرعة القصوى - 10 كم/ساعة',
          'المطر: تقليل السرعة إلزامياً'
        ],
        tips: [
          'En cas de doute, roulez plus lentement',
          'La pluie réduit l\'adhérence de 50%',
          'Respectez les limitations même si les autres ne le font pas'
        ],
        tipsAr: [
          'في حالة الشك، قِد ببطء',
          'المطر يقلل التصاق الإطارات بنسبة 50%',
          'احترم الحدود حتى لو لم يفعل الآخرون'
        ]
      }
    ]
  },

  // ==================== MODULE 3: LA PRIORITÉ ====================
  {
    id: 'priorite',
    title: 'La Priorité',
    titleAr: 'الأولوية',
    icon: '⬆️',
    image: 'course_images/compressed/priorite/_icon.jpg',
    color: '#f39c12',
    chapters: [
      {
        id: 'regles_priorite',
        title: 'Règles de priorité',
        titleAr: 'قواعد الأولوية',
        content: `LES RÈGLES DE PRIORITÉ:

1️⃣ PANNEAU STOP = Arrêt obligatoire
   • Vous devez céder le passage à TOUS les véhicules
   • Même si personne ne vient
   • Arrêt complet avant la ligne blanche

2️⃣ PANNEAU CÉDEZ LE PASSAGE = Priorité aux autres
   • Ralentissez, soyez prêt à vous arrêter
   • Cédez si des véhicules approchent
   • Pas d'arrêt obligatoire si la voie est libre

3️⃣ AUCUN PANNEAU = Priorité à droite
   • Le véhicule venant de la droite a la priorité
   • À égalité, le véhicule le plus large cède
   • Règle fondamentale en Tunisie

4️⃣ GIRATOIRE = Priorité aux véhicules DANS le rond-point
   • Vous devez céder le passage aux véhicules déjà dans le giratoire
   • Entrez uniquement si la voie est libre
   • Sens anti-horaire

5️⃣ VÉHICULES PRIORITAIRES = Toujours céder
   • Ambulance (feux bleus + sirène)
   • Pompiers (feux rouges + sirène)
   • Police (feux bleus)
   • En cas d'urgence: arrêtez-vous à droite`,
        contentAr: `قواعد الأولوية:

1️⃣ لافتة ستوپ = توقف إلزامي
   • يجب إعطاء الأولوية لجميع المركبات
   • حتى لو لم تأتِ أي مركبة
   • توقف كامل قبل الخط الأبيض

2️⃣ لافتة أ继行 الأولوية = الأولوية للآخرين
   • قلل السرعة، كن مستعداً للتوقف
   • أ继行 إذا كانت مركبات تقترب
   • لا توقف إلزامي إذا كان الطريق فارغاً

3️⃣ لا لافتة = الأولوية لليمين
   • المركبة Coming من اليمين لها الأولوية
   • عند التساوي، المركبة الأكبر حجماً تُعطي الأولوية
   • قاعدة أساسية في تونس

4️⃣ دوار = الأولوية للمركبات داخل الدوار
   • يجب إعطاء الأولوية للمركبات الموجودة بالفعل في الدوار
   • ادخل فقط إذا كان المسار فارغاً
   • عكس عقارب الساعة

5️⃣ مركبات ذات أولوية = دائماً أُعطي الأولوية
   • الإسعاف (أضواء زرقاء + صفارة)
   • الإطفاء (أضواء حمراء + صفارة)
   • الشرطة (أضواء زرقاء)
   • في حالة الطوارئ: توقف على اليمين`,
        keyPoints: [
          'STOP = Arrêt obligatoire + céder le passage',
          'Cédez le passage = Réduire, céder si nécessaire',
          'Sans panneau = Priorité à droite',
          'Giratoire = Priorité à ceux déjà dedans',
          'Urgence = Toujours céder'
        ],
        keyPointsAr: [
          'ستوپ = توقف إلزامي + إعطاء الأولوية',
          'أ继行 الأولوية = تقليل، إعطاء إذا لزم',
          'بدون لافتة = الأولوية لليمين',
          'دوار = الأولوية لمن يكون بالداخل',
          'طوارئ = دائماً أُعطي الأولوية'
        ],
        tips: [
          'En cas de doute, cédez le passage',
          'Les piétons sur passage protégé ont TOUJOURS priorité',
          'Mieux vaut attendre que provoquer un accident'
        ],
        tipsAr: [
          'في حالة الشك، أ继行 الأولوية',
          'المشاة على المعبر المحمي لديهم الأولوية دائماً',
          'الأفضل الانتظار من إحداث حادث'
        ]
      }
    ]
  },

  // ==================== MODULE 4: LES MANœUVRES ====================
  {
    id: 'manoeuvres',
    title: 'Les Manœuvres',
    titleAr: 'المناورات',
    icon: '🔄',
    image: 'course_images/compressed/routes_traces/_icon.jpg',
    color: '#9b59b6',
    chapters: [
      {
        id: 'depassement',
        title: 'Le dépassement',
        titleAr: 'التجاوز',
        content: `LES RÈGLES DU DÉPASSEMENT:

⚠️ QUAND DÉPASSER:
• Uniquement sur la gauche
• Quand la voie est libre devant
• En respectant la distance de sécurité

❌ QUAND NE PAS DÉPASSER:
• En cas de panneau d'interdiction de dépassement
• Avant un virage (panneau de danger)
• Sur un passage piéton
• Devant un passage à niveau
• Par temps très pluvieux ou brouillard
• Par temps de nuit (sauf routes éclairées)

📏 COMMENT DÉPASSER:
1. Vérifiez les angles morts
2. Clignotez à gauche
3. Accélérez pour réduire le temps de dépassement
4. Dépassez en laissant 1,5m minimum
5. Revenez sur votre voie uniquement quand vous voyez le véhicule dépassé dans votre rétroviseur

⚠️ DÉPASSEMENT DE VÉHICULES PRIORITAIRES:
• Ne jamais dépasser un véhicule d'urgence en service
• Si un véhicule prioritaire arrive, interrompez votre dépassement`,
        contentAr: `قواعد التجاوز:

⚠️ متى تتجاوز:
• فقط على اليسار
• عندما يكون المسار أمامك فارغاً
• مع الحفاظ على مسافة الأمان

❌ متى لا تتجاوز:
• في حالة وجود لافتة منع التجاوز
• قبل منعطف (لافتة خطر)
• على معبر راكض
• قبل عبور سكة حديدية
• في المطر الغزير أو الضباب
• ليلاً (عدم الطرق المضاءة)

📏 كيف تتجاوز:
1. تحقق من الزوايا الميتة
2. أشعل الوسام لليسار
3. زِد السرعة لتقليل وقت التجاوز
4. تجاوز تاركاً 1,5 متر على الأقل
5. عد على مسارك فقط عندما ترى المركبة المتجاوزة في مرآتك

⚠️ تجاوز المركبات ذات الأولوية:
• لا تتجاوز أبداً مركبة طوارئ تعمل
• إذا كانت مركبة ذات أولوية قادمة، أوقف التجاوز`,
        keyPoints: [
          'Dépassement uniquement par la gauche',
          'Vérifiez les angles morts avant',
          'Laissez 1,5m minimum au véhicule dépassé',
          'Interdit avant virages et passages piétons'
        ],
        keyPointsAr: [
          'التجاوز فقط من اليسار',
          'تحقق من الزوايا الميتة مسبقاً',
          'اترك 1,5 متر كحد أدنى للمركبة المتجاوزة',
          'ممنوع قبل المنعطفات ومعبر المشاة'
        ],
        tips: [
          'Un dépassement sûr = accélérer et revenir rapidement',
          'Ne dépassez JAMAIS en zone d\'interdiction',
          'En cas de doute, restez derrière'
        ],
        tipsAr: [
          'التجاوز الآمن = تسريع والعودة بسرعة',
          'لا تتجاوز أبداً في منطقة المنع',
          'في حالة الشك، ابقَ خلفاً'
        ]
      },
      {
        id: 'stationnement',
        title: 'Stationnement et arrêt',
        titleAr: 'التوقف والوقوف',
        content: `ARRÊT vs STATIONNEMENT:

🛑 ARRÊT:
• Arrêt bref pour déposer/prendre un passager
• Conducteur reste dans le véhicule
• Pas de stationnement prolongé

🅿️ STATIONNEMENT:
• Arrêt prolongé
• Conducteur peut quitter le véhicule
• Doit être réglementaire

OÙ NE PAS STATIONNER:
❌ Sur un passage piéton
❌ Devant un feu rouge (à 5m)
❌ Devant une entrée de garage
❌ Sur une piste cyclable
❌ Devant un panneau STOP
❌ Dans une zone de stationnement payant sans payer
❌ Sur une voie de bus
❌ Devant un hydrantant (10m)

STATIONNEMENT RÉGLEMENTAIRE:
• Du côté droit de la route
• Dans le sens de la circulation
• À 5m minimum des intersections
• À 10m des feux et panneaux de signalisation
• En laissant la place pour les piétons

STATIONNEMENT EN COTE:
• Tournez les roues vers le trottoir (montée)
• Tournez les roues vers la chaussée (descente)`,
        contentAr: `الإيقاف مقابل الوقوف:

🛑 الإيقاف:
• إيقاف قصير لإنزال أو استقبال راكب
• السائق يبقى في المركبة
• لا وقوف طويل

🅿️ الوقوف:
• إيقاف طويل
• يمكن للسائق مغادرة المركبة
• يجب أن يكون قانونياً

أين لا توقف:
❌ على معبر راكض
❌ أمام إشارة حمراء (على بعد 5م)
❌ أمام مدخل جراج
❌ على مسار دراجة
❌ أمام لافتة ستوپ
❌ في منطقة وقوف مدفوعة بدون دفع
❌ على مسار حافلة
❌ أمام صنبور إطفاء (10م)

الوقوف القانوني:
• على يمين الطريق
• في اتجاه السير
• على بعد 5م كحد أدنى من التقاطعات
• على بعد 10م من الإشارات واللافتات
• تاركاً المكان للمشاة

الوقوف على المنحدر:
• ا扭转 العجلات نحو الرصيف (صعود)
• ا扭转 العجلات نحو الطريق (نزول)`,
        keyPoints: [
          'Arrêt = bref, conducteur reste',
          'Stationnement = prolongé, conducteur sort',
          'Interdit sur passages piétons et devant feux',
          'À droite, dans le sens de la circulation'
        ],
        keyPointsAr: [
          'الإيقاف = قصير، السائق يبقى',
          'الوقوف = طويل، السائق يخرج',
          'ممنوع على معابر المشاة وأمام الإشارات',
          'على اليمين، في اتجاه السير'
        ],
        tips: [
          'En cas de doute, ne stationnez pas',
          'Vérifiez les panneaux de stationnement payant',
          'Le stationnement gênant = amende immédiate'
        ],
        tipsAr: [
          'في حالة الشك، لا توقف',
          'تحقق من لافتات الوقوف المدفوع',
          'الوقوف المزعج = غرامة فورية'
        ]
      }
    ]
  },

  // ==================== MODULE 5: SÉCURITÉ ROUTIÈRE ====================
  {
    id: 'securite',
    title: 'Sécurité Routière',
    titleAr: 'الأمان على الطريق',
    icon: '🛡️',
    image: 'course_images/compressed/routes_traces/_icon.jpg',
    color: '#27ae60',
    chapters: [
      {
        id: 'distances_securite',
        title: 'Distances de sécurité',
        titleAr: 'مسافات الأمان',
        content: `LA DISTANCE DE SÉCURITÉ:

📐 FORMULE: Vitesse ÷ 10 = Distance en mètres
   Exemple: 90 km/h ÷ 10 = 9 mètres minimum

📏 DISTANCE D'ARRÊT:
   Distance d'arrêt = Distance de réaction + Distance de freinage
   • Réaction: ~1 seconde (14m à 50km/h)
   • Freinage: variable selon vitesse, route, pneus

⚠️ CONDITIONS DÉFAVORABLES: × 2
   • Pluie: doubler la distance
   • Brouillard: doubler la distance
   • Nuit: augmenter la distance
   • Pneus usés: augmenter la distance
   • Véhicule lourd: augmenter la distance

💡 ASTUCE: Le panneau "2 traits" = 2 secondes de distance
   • Comptez: "mille-un, mille-deux"
   • Si vous dépassez le panneau avant de finir, vous êtes trop près

📏 DISTANCE MINIMALE:
   • Autoroute: 50m entre véhicules
   • Route nationale: 30m
   • En ville: suffisamment pour s'arrêter`,
        contentAr: `مسافة الأمان:

📐 الصيغة: السرعة ÷ 10 = المسافة بالمتر
   مثال: 90 كم/ساعة ÷ 10 = 9 أمتار كحد أدنى

📏 مسافة التوقف:
   مسافة التوقف = مسافة رد الفعل + مسافة الكبح
   • رد الفعل: ~1 ثانية (14 متر عند 50 كم/ساعة)
   • الكبح: متغير حسب السرعة之路 والإطارات

⚠️ ظروف غير مواتية: × 2
   • المطر: ضاعف المسافة
   • الضباب: ضاعف المسافة
   • الليل: زِد المسافة
   • إطارات مستهلكة: زِد المسافة
   • مركبة ثقيلة: زِد المسافة

💡 نصيحة: لافتة "خطين" = مسافة ثانيتين
   • عد: "ألف واحد، ألف اثنين"
   • إذا تجاوزت اللافتة قبل الانتهاء، أنت قريب جداً

📏 المسافة الدنيا:
   • طريق سريع: 50م بين المركبات
   • طريق وطني: 30م
   • في المدينة: بما يكفي للتوقف`,
        keyPoints: [
          'Distance = Vitesse ÷ 10 (en mètres)',
          'Doubler en conditions défavorables',
          '2 secondes minimum de distance',
          'Mieux vaut trop loin que trop près'
        ],
        keyPointsAr: [
          'المسافة = السرعة ÷ 10 (بالمتر)',
          'ضعف في الظروف غير المواتية',
          'ثانيتان كحد أدنى للمسافة',
          'الأفضل أن تكون بعيداً عن قرب'
        ],
        tips: [
          'Comptez 2 secondes entre vous et le véhicule devant',
          'En pluie, comptez 4 secondes',
          'Regardez LOIN devant pour anticiper'
        ],
        tipsAr: [
          'عد ثانيتين بينك وبين المركبة أمامك',
          'في المطر، عد 4 ثوانٍ',
          'انظر بعيداً للأمام للتوقع'
        ]
      },
      {
        id: 'conditions_conduite',
        title: 'Conditions de conduite',
        titleAr: 'ظروف القيادة',
        content: `CONDUITE PAR TEMPS DE PLUIE:

🌧️ RÉDUISSEZ LA VITESSE
• L'adhérence est réduite de 50%
• Distance de freinage augmentée

🌧️ AUGMENTEZ LES DISTANCES
• Doublez la distance de sécurité
• Laissez plus d'espace pour les piétons

🌧️ ALLUMEZ VOS FEUX
• Feux de croisement obligatoires
• Meilleure visibilité pour les autres

🌧ÉVITEZ LES MANœUVRES BRUSQUES
• Freinage progressif
• Virages à faible vitesse
• Pas de dépassement inutile

CONDUITE PAR TEMPS DE BROUILLARD:

🌫️ FEUX DE BROUILLARD
• Allumez les feux avant et arrière de brouillard
• Feux de croisement en ville

🌫ÉVITEZ LE DÉPASSEMENT
• Visibilité réduite
• Risque de collision frontale

🌫ÉCOUTEZ VOTRE ENTourage
• Ralentissez si vous ne voyez pas devant vous
• Utilisez votre clignotant plus tôt

CONDUITE DE NUIT:

🌙 PHARES DE ROUTE
• Activez lesphares de route hors agglomération
• Passez en feux de croisement si un véhicule approche

🌙 NE FIXEZ PAS LES FEUX
• Regardez le bord de la route
• Évitez les yeux des autres conducteurs

🌙 SOYEZ VIGILANT
• Plus de fatigué
• Plus de dangers (animaux, piétons)`,
        contentAr: `القيادة في المطر:

🌧️ قلل السرعة
• التصاق الإطارات منخفض بنسبة 50%
• مسافة الكبح مزدادة

🌧️ زِد المسافات
• ضاعف مسافة الأمان
• اترك مساحة أكبر للمشاة

🌧️ شغّل أضواءك
• أضواء التقاطع إلزامية
• رؤية أفضل للآخرين

🌧️ تجنب المناورات الحادة
• كبح تدريجي
• منعطفات بسرعة منخفضة
• لا تجاوز غير ضروري

القيادة في الضباب:

🌫️ أضواء الضباب
• شغّل أضواء الضباب الأمامية والخلفية
• أضواء التقاطع في المدينة

🌫️ تجنب التجاوز
• رؤية منخفضة
• خطر التصادم الأمامي

🌫️ اسمع محيطك
• قلل إذا كنت لا ترى أمامك
• استخدم الوسام مبكراً

القيادة ليلاً:

🌙 أضواء الطريق
• فعّل أضواء الطريق خارج الحضرية
• انتقل لأضواء التقاطع إذا كانت مركبة تقترب

🌙 لا تنظر للأضواء
• انظر ل边缘 الطريق
• تجنب أعين السائقين الآخرين

🌙 كن حذراً
• أكثر تعباً
• مخاطر أكثر (حيوانات، مشاة)`,
        keyPoints: [
          'Pluie: réduire vitesse, doubler distances, feux obligatoires',
          'Brouillard: feux de brouillard, pas de dépassement',
          'Nuit: phares de route, vigilance accrue',
          'Neige: vitesse très réduite, distances maximales'
        ],
        keyPointsAr: [
          'المطر: تقليل السرعة، ضعف المسافات، أضواء إلزامية',
          'الضباب: أضواء الضباب، لا تجاوز',
          'الليل: أضواء الطريق، حذر متزايد',
          'الثلج: سرعة منخفضة جداً، مسافات قصوى'
        ],
        tips: [
          'En cas de doute, roulez PLUS lentement',
          'Les feux de brouillard s\'éteignent quand le brouillard disparaît',
          'La nuit, conduisez comme si vous étiez fatigué'
        ],
        tipsAr: [
          'في حالة الشك، قِد ببطء أكبر',
          'أضواء الضباب تنطفئ عند اختفاء الضباب',
          'ليلاً، قِد كما لو كنت متعباً'
        ]
      }
    ]
  },

  // ==================== MODULE 6: ALCOOL ET STUPÉFIANTS ====================
  {
    id: 'alcool_drogues',
    title: 'Alcool et Stupéfiants',
    titleAr: 'الخمر والمخدرات',
    icon: '🍷',
    image: 'course_images/compressed/crimes/_icon.jpg',
    color: '#e67e22',
    chapters: [
      {
        id: 'alcool_conduite',
        title: 'Alcool et conduite',
        titleAr: 'الكحول والقيادة',
        content: `L'ALCOOL ET LA CONDUITE:

⚖️ SEUIL LÉGAL EN TUNISIE: 0,5 g/l de sang

📊 EFFETS DE L'ALCOOL SUR LA CONDUITE:
• 0,2 g/l: Réduction des réflexes, confiance excessive
• 0,5 g/l: Seuil légal - perte de vigilance
• 0,8 g/l: Réaction très altérée, vision trouble
• > 1,0 g/l: Danger extrême, troubles de l'équilibre

⏱️ TEMPS DE SOBRIÉTÉ:
• Un verre = 1 à 2 heures pour l'éliminer
• Un repas ralentit l'absorption (mais ne l'élimine pas)
• Le café ne réduit PAS l'alcoolémie
• Le sommeil ne réduit PAS l'alcoolémie rapidement

⚖️ SANCTIONS:
• Amende lourde
• Suspension du permis de conduire
• Confiscation du véhicule (en cas de récidive)
• Prison en cas d'accident avec blessés
• Peine aggravée si taux > 0,8 g/l

💡 ASTUCE:
• Le seul moyen de faire descendre l'alcoolémie = le TEMPS
• Un verre d'eau ne fait rien
• Appelez un taxi ou un ami sobre

⚠️ CONDUITE SOUS STUPÉFIANTS:
• Interdite et punie de prison
• Détectée par test salivaire
• Peines aggravées en cas d'accident`,
        contentAr: `الكحول والقيادة:

⚖️ الحد القانوني في تونس: 0,5 غ/لتر من الدم

📊 تأثيرات الكحول على القيادة:
• 0,2 غ/لتر: تقليل الروافع، ثقة مفرطة
• 0,5 غ/لتر: الحد القانوني - فقدان اليقظة
• 0,8 غ/لتر: تفاعل معدّل بشكل كبير، رؤية مشوشة
• > 1,0 غ/لتر: خطر شديد، اضطرابات التوازن

⏱️ وقت التعافي:
• كوب واحد = 1 إلى 2 ساعة للإزالة
• الوجبة تبطئ الامتصاص (لكنها لا تزيله)
• القهوة لا تقلل من تركيز الكحول
• النوم لا يقلل من تركيز الكحول بسرعة

⚖️ العقوبات:
• غرامة كبيرة
• تعليق رخصة القيادة
• مصادرة المركبة (في حالة العودة)
• سجن في حالة حادث مع إصابات
• عقوبة مشددة إذا كان التركيز > 0,8 غ/لتر

💡 نصيحة:
• الطريقة الوحيدة لتقليل تركيز الكحول = الوقت
• كوب الماء لا يفعل شيئاً
• اتصل بتاكسي أو صديق راشد

⚠️ القيادة تحت تأثير المخدرات:
• ممنوعة ويعاقب عليها بالسجن
• تكتشف بفحص اللعاب
• عقوبات مشددة في حالة الحادث`,
        keyPoints: [
          'Seuil: 0,5 g/l - Tolérance ZÉRO pour les jeunes conducteurs',
          'Un café ne rend PAS apte à conduire',
          'Le seul remède: le TEMPS',
          'Conduite sous stupéfiants = prison'
        ],
        keyPointsAr: [
          'الحد: 0,5 غ/لتر - لا تسامح للسائقين الجدد',
          'القهوة لا تجعلك مؤهلاً للقيادة',
          'العلاج الوحيد: الوقت',
          'القيادة تحت تأثير المخدرات = سجن'
        ],
        tips: [
          'Si vous buvez, ne conduisez PAS',
          'Prévoyez un conducteur désigné',
          'L\'alcool reste longtemps dans le sang'
        ],
        tipsAr: [
          'إذا شربت، لا تقود',
          'خطط لسائق معيّن',
          'الكحول يبقى طويلاً في الدم'
        ]
      }
    ]
  },

  // ==================== MODULE 7: SECOURISME ====================
  {
    id: 'secourisme',
    title: 'Secourisme',
    titleAr: 'الإسعافات الأولية',
    icon: '🏥',
    image: 'course_images/compressed/secourisme/_icon.jpg',
    color: '#1abc9c',
    chapters: [
      {
        id: 'premiers_secours',
        title: 'Premiers secours sur la route',
        titleAr: 'الإسعافات الأولية على الطريق',
        content: `LES 4 ÉTAPES EN CAS D'ACCIDENT:

1️⃣ SÉCURISER
   • Allumez les warning (feux de détresse)
   • Mettez le gilet réfléchissant
   • Placez le triangle à 50m derrière le véhicule
   • Éloignez-vous de la circulation

2️⃣ ALERTER (NUMÉROS D'URGENCE)
   • 190 - SAMU (Service d'Aide Médicale Urgente)
   • 198 - Pompiers
   • 197 - Police
   • Donnez: localisation exacte, nombre de blessés, type d'accident

3️⃣ PROTÉGER LES BLESSÉS
   • Ne déplacez PAS les blessés (sauf danger immédiat)
   • Couvrez-les pour éviter l'hypothermie
   • Parlez-leur pour les rassurer
   • Éloignez les curieux de la zone

4️⃣ PREMIERS SECOURS
   • Vérifiez la conscience et la respiration
   • Position Latérale de Sécurité (PLS) si inconscient mais respire
   • RCP si arrêt cardiaque:
     - 30 compressions thoraciques
     - 2 insufflations
     - Alterner jusqu'à l'arrivée des secours

⚠️ EN CAS D'INCENDIE:
   • Éloignez-vous du véhicule
   • N'ouvrez pas le capot
   • Appelez les pompiers (198)`,
        contentAr: `الخطوات الأربع في حالة حادث:

1️⃣ التأمين
   • شغّل أضواء الخطر
   • البس السترة الواقية
   • ضع المثلث على مسافة 50 متراً خلف المركبة
   • ابتعد عن حركة السير

2️⃣ الإنذار (أرقام الطوارئ)
   • 190 - الإسعاف (خدمة الإسعاف الطبي العاجل)
   • 198 - الإطفاء
   • 197 - الشرطة
   • أعطِ: الموقع بالتفصيل، عدد المصابين، نوع الحادث

3️⃣ حماية المصابين
   • لا تنقل المصابين (عدم وجود خطر فوري)
   • غطّهم لتجنب انخفاض الحرارة
   • تحدث إليهم لطمأنتهم
   • أبعد الفضوليين عن المنطقة

4️⃣ الإسعافات الأولية
   • تحقق من الوعي والتنفس
   • وضعية الاستلقاء الجانبية الآمنة (PLS) إذا فاقد للوعي ويتنفس
   • إنعاش القلب والرئتين إذا توقف القلب:
     - 30 ضغطة على الصدر
     - 2 نفخ
     - يتناوب حتى وصول الإسعاف

⚠️ في حالة الحريق:
   • ابتعد عن المركبة
   • لا تفتح غطاء المحرك
   • اتصل بالإطفاء (198)`,
        keyPoints: [
          'Sécuriser → Alerter → Protéger → Secourir',
          'Ne JAMAIS déplacer un blessé',
          'PLS pour un inconscient qui respire',
          'Numéros: 190 (SAMU), 197 (Police), 198 (Pompiers)'
        ],
        keyPointsAr: [
          'تأمين → إنذار → حماية → إسعاف',
          'لا تنقل المصاب أبداً',
          'وضعية الاستلقاء الجانبية لفاقد الوعي الذي يتنفس',
          'الأرقام: 190 (الإسعاف)، 197 (الشرطة)، 198 (الإطفاء)'
        ],
        tips: [
          'Mémorisez les numéros: 190, 197, 198',
          'En cas de doute, ne bougez pas le blessé',
          'Apprenez les gestes qui sauvent'
        ],
        tipsAr: [
          'تذكر الأرقام: 190، 197، 198',
          'في حالة الشك، لا تنقل المصاب',
          'تعلم الإجراءات المنقذة للحياة'
        ]
      }
    ]
  },

  // ==================== MODULE 8: ÉCO-CONDUITE ====================
  {
    id: 'ecologie',
    title: 'Éco-conduite',
    titleAr: 'القيادة البيئية',
    icon: '🌿',
    image: 'course_images/compressed/routes_traces/_icon.jpg',
    color: '#2ecc71',
    chapters: [
      {
        id: 'eco_conduite',
        title: 'Conduite respectueuse de l\'environnement',
        titleAr: 'قيادة تحترم البيئة',
        content: `L'ÉCO-CONDUITE:

🌿 PRINCIPES DE BASE:
• Anticiper: regarder loin devant pour éviter les freinages brusques
• Conduire souplement: éviter les à-coups d'accélérateur
• Rouler à vitesse constante (utilisez le régulateur de vitesse)
• Utiliser le frein moteur en descente
• Couper le moteur à l'arrêt > 30 secondes

⛽ ÉCONOMIES DE CARBURANT:
• Éviter les démarrages brusques
• Pas de ralenti inutile (point mort si arrêt > 30s)
• Climatisation modérée (22-24°C)
• Pneus bien gonflés (vérification mensuelle)
• Entretien régulier du véhicule
• Enlever les charges inutiles (toit rack vide)

🌍 IMPACT ENVIRONNEMENTAL:
• Moins de consommation = moins de pollution
• Réduction du bruit urbain
• Préservation des ressources naturelles
• Réduction des émissions de CO2

📊 GAINS POTENTIELS:
• Conduite souple: -15% de consommation
• Pneus bien gonflés: -5% de consommation
• Vitesse réduite (90 au lieu de 130): -30% de consommation
• Entretien régulier: -10% de consommation

💡 ASTUCES:
• Le covoiturage est la meilleure éco-conduite
• Utilisez les transports en commun quand possible
• Planifiez vos trajets pour éviter les detours`,
        contentAr: `القيادة البيئية:

🌿 المبادئ الأساسية:
• التوقع: النظر بعيداً للأمام لتجنب الكبح الحاد
• القيادة بسلاسة: تجنب الحركات المفاجئة للمسرع
• السير بسرعة ثابتة (استخدم مثبت السرعة)
• استخدام الكبح المحرّك في النزول
• إيقاف المحرك عند التوقف > 30 ثانية

⛽ توفير الوقود:
• تجنب الانطلاق الحاد
• عدم البطء غير الضروري (النقطة المحايدة إذا التوقف > 30 ثانية)
• مكيف معتدل (22-24 درجة)
• إطارات م inflada bien (تحقق شهري)
• صيانة منتظمة للمركبة
• إزالة الأحمال غير الضرورية (حامل السقف فارغ)

🌍 التأثير البيئي:
• استهلاك أقل = تلوث أقل
• تقليل الضوضاء الحضرية
• الحفاظ على الموارد الطبيعية
• تقليل انبعاثات ثاني أكسيد الكربون

📊 المكتسبات المحتملة:
• قيادة سلسة: -15% استهلاك
• إطارات م inflada bien: -5% استهلاك
• سرعة منخفضة (90 بدلاً من 130): -30% استهلاك
• صيانة منتظمة: -10% استهلاك

💡 نصائح:
• مشاركة الركوب هي أفضل قيادة بيئية
• استخدم وسائل النقل العام عندما يكون ممكناً
•خطط لرحلاتك لتجنب الطرق البديلة`,
        keyPoints: [
          'Anticipation = sécurité + économies',
          'Vitesse constante = moins de consommation',
          'Entretien régulier = véhicule plus propre et plus durable',
          'Le covoiturage réduit l\'impact de 50%'
        ],
        keyPointsAr: [
          'التوقع = أمان + توفير',
          'سرعة ثابتة = استهلاك أقل',
          'صيانة منتظمة = مركبة أنظف وأكثر عمراً',
          'مشاركة الركوب تقلل التأثير بنسبة 50%'
        ],
        tips: [
          'Roulez à 90 km/h au lieu de 130: -30% de carburant',
          'Un entretien régulier prolonge la vie du véhicule',
          'Le covoiturage est la meilleure éco-conduite'
        ],
        tipsAr: [
          'قِد بـ 90 كم/ساعة بدلاً من 130: -30% من الوقود',
          'الصيانة المنتظمة تطول عمر المركبة',
          'مشاركة الركوب هي أفضل قيادة بيئية'
        ]
      }
    ]
  },

  // ==================== MODULE 9: ENTRETIEN DU VÉHICULE ====================
  {
    id: 'entretien',
    title: 'Entretien du Véhicule',
    titleAr: 'صيانة المركبة',
    icon: '🔧',
    image: 'course_images/compressed/eclairage_arabes/_icon.jpg',
    color: '#8e44ad',
    chapters: [
      {
        id: 'controle_technique',
        title: 'Contrôle technique',
        titleAr: 'الفحص التقني',
        content: `LE CONTRÔLE TECHNIQUE:

📋 QUAND?
• Véhicules de tourisme: après 4 ans, puis tous les 2 ans
• Véhicules utilitaires: annuellement
• Taxis et VTC: annuellement

📋 QUOI VÉRIFIER?
• État des freins (efficacité, usure des plaquettes)
• État des pneus (profondeur de sculpture ≥ 1,6mm)
• Éclairage complet et fonctionnel
• État du chassis et de la carrosserie
• État des émissions polluantes (pot d'échappement)
• État des rétroviseurs et glaces
• Fonctionnement des feux de signalisation
• Présence du triangle et gilet réfléchissant

⚠️ EN CAS DE REFUS:
• Le véhicule ne peut plus circuler
• Obligation de remorquer le véhicule
• Nouveau contrôle après réparation

💰 COÛT:
• Environ 40-60 DT selon le centre de contrôle
• Non remboursable en cas d'échec`,
        contentAr: `الفحص التقني:

📋 متى؟
• سيارات السياحية: بعد 4 سنوات، ثم كل سنتين
• المركبات التجارية: سنوياً
• سيارات الأجرة: سنوياً

📋 ماذا يتم الفحص؟
• حالة الفرامل (الكفاءة، تآكل البلاطات)
• حالة الإطارات (عمق النقش ≥ 1,6 مم)
• إنارة كاملة وتعمل
• حالة الهيكل والهيكل الخارجي
• حالة الانبعاثات الملوثة (عادم المركبة)
• حالة المرايا والزجاج
• تشغيل إشارات الإشارة
• وجود المثلث والسترة الواقية

⚠️ في حالة الرفض:
• المركبة لا يمكنها السير
• إلزام سحب المركبة
• فحص جديد بعد الإصلاح

💰 التكلفة:
• حوالي 40-60 دينار تونسي حسب مركز الفحص
• غير قابل للاسترداد في حالة الفشل`,
        keyPoints: [
          'Tourisme: contrôle après 4 ans, puis tous les 2 ans',
          'Vérifiez: freins, pneus, éclairage, émissions',
          'Profondeur sculpture pneu ≥ 1,6mm',
          'Refus = obligation de remorquer'
        ],
        keyPointsAr: [
          'سياحية: فحص بعد 4 سنوات، ثم كل سنتين',
          'تحقق من: الفرامل، الإطارات، الإنارة، الانبعاثات',
          'عمق نقش الإطارة ≥ 1,6 مم',
          'الرفض = إلزام سحب المركبة'
        ],
        tips: [
          'Planifiez votre contrôle technique à l\'avance',
          'Vérifiez les points principaux avant le contrôle',
          'Un CT à jour = véhicule plus sûr'
        ],
        tipsAr: [
          'خطط للفحص التقني مسبقاً',
          'تحقق من النقاط الرئيسية قبل الفحص',
          'فحص تقني محدث = مركبة أكثر أماناً'
        ]
      }
    ]
  },

  // ==================== MODULE 10: LES INFRACTIONS ====================
  {
    id: 'infractions',
    title: 'Les Infractions',
    titleAr: 'المخالفات',
    icon: '⚖️',
    image: 'course_images/compressed/crimes/_icon.jpg',
    color: '#c0392b',
    chapters: [
      {
        id: 'types_infractions',
        title: 'Types d\'infractions',
        titleAr: 'أنواع المخالفات',
        content: `CLASSIFICATION DES INFRACTIONS:

🔴 INFRACTIONS GRAVES (Immédiates):
• Excès de vitesse > 40 km/h
• Conduite en état d'ivresse (alcool > 0,5 g/l)
• Conduite sous stupéfiants
• Fuite après accident
• Contre-sens
• Refus de priorité ayant causé un accident
• Grands excès de vitesse

🟡 INFRACTIONS MOYENNES:
• Excès de vitesse 20-40 km/h
• Non-port de ceinture de sécurité
• Utilisation du téléphone au volant
• Non-respect des distances de sécurité
• Stationnement gênant
• Dépassement interdit

🟢 INFRACTIONS LÉGÈRES:
• Excès de vitesse < 20 km/h
• Defaut d'éclairage
• Vignette CT expirée
• Non-port de casque (2-roues)

⚠️ SYSTÈME DE POINTS:
• Permis = 12 points
• Chaque infraction fait perdre des points
• À 0 points = suspension du permis
• Permis probatoire pour les nouveaux conducteurs`,
        contentAr: `تصنيف المخالفات:

🔴 مخالفات جسيمة (فورية):
• تجاوز السرعة > 40 كم/ساعة
• القيادة تحت تأثير الكحول (> 0,5 غ/لتر)
• القيادة تحت تأثير المخدرات
• الفرار بعد الحادث
• القيادة في الاتجاه المعاكس
• عدم إعطاء الأولوية ناتج عن حادث
• تجاوز السرعة كبير جداً

🟡 مخالفات متوسطة:
• تجاوز السرعة 20-40 كم/ساعة
• عدم ارتداء حزام الأمان
• استخدام الهاتف أثناء القيادة
• عدم الحفاظ على مسافات الأمان
• وقوف مزعج
• تجاوز ممنوع

🟢 مخالفات خفيفة:
• تجاوز السرعة < 20 كم/ساعة
• نقص في الإنارة
• ملصق الفحص التقني منتهي الصلاحية
• عدم ارتداء الخوذة (الدراجات النارية)

⚠️ نظام النقاط:
• الرخصة = 12 نقطة
• كل مخالفة تخصم نقاطاً
• عند 0 نقطة = تعليق الرخصة
• رخصة اختبارية للسائقين الجدد`,
        keyPoints: [
          'Graves: alcool, stupéfiants, grands excès = immédiat',
          'Moyennes: téléphone, ceinture, distances',
          'Légères: vitesse légère, éclairage',
          'Système de points: 12 points, 0 = suspension'
        ],
        keyPointsAr: [
          'جسيمة: كحول، مخدرات، تجاوز كبير = فوري',
          'متوسطة: هاتف، حزام أمان، مسافات',
          'خفيفة: سرعة بسيطة، إنارة',
          'نظام النقاط: 12 نقطة، 0 = تعليق'
        ],
        tips: [
          'Mieux vaut prévenir que guérir',
          'Conduisez prudemment pour éviter les amendes',
          'Les infractions graves entraînent des peines de prison'
        ],
        tipsAr: [
          'الأفضل الوقاية من العلاج',
          'قِد بحذر لتجنب الغرامات',
          'المخالفات الجسيمة تؤدي إلى عقوبات السجن'
        ]
      }
    ]
  },

  // ==================== MODULE 11: TRANSPORT DE MATIÈRES DANGEREUSES ====================
  {
    id: 'matieres_dangereuses',
    title: 'Transport de Matières Dangereuses',
    titleAr: 'نقل المواد الخطرة',
    icon: '☢️',
    image: 'course_images/compressed/matieres_dangereuses/_icon.jpg',
    color: '#ff6b35',
    chapters: [
      {
        id: 'classification_md',
        title: 'Classification des matières dangereuses',
        titleAr: 'تصنيف المواد الخطرة',
        content: `CLASSIFICATION DES MATIÈRES DANGEREUSES (OMS):

🔴 CLASSE 1: EXPLOSIFS
• Matières pouvant exploser
• Ex: Munitions, feux d'artifice, dynamite
• Interdit sur autoroute

🟠 CLASSE 2: GAZ
• Gaz comprimés, liquéfiés, dissous
• Ex: Propane, oxygène, hydrogène
• Bouteilles bien fixées et ventilées

🟡 CLASSE 3: LIQUIDES INFLAMMABLES
• Point éclair < 61°C
• Ex: Essence, alcool, kérosène
• Interdiction de fumer à proximité

🟤 CLASSE 4: SOLIDES INFLAMMABLES
• 4a: Inflammables
• 4b: Inflammables au contact de l'eau
• 4c: Auto-oxydants

🔵 CLASSE 5: OXYDANTS ET ORGANIQUES PEROXYDÉS
• Soutiennent la combustion
• Ex: Peroxydes, permanganates

🟢 CLASSE 6: SUBSTANCES TOXIQUES ET INFECTIEUSES
• 6a: Toxiques
• 6b: Infectieuses
• Ex: Pesticides, virus

🟣 CLASSE 7: MATIÈRES RADIOACTIVES
• Émettent des rayonnements ionisants
• Ex: Uranium, cobalt 60
• Signalisation spéciale obligatoire

⚫ CLASSE 8: CORROSIFS
• Attaquent les métaux et la peau
• Ex: Acides, soude caustique

⬜ CLASSE 9: DANGERS DIVERS
• Matières présentant un danger
• Ex: Amiante, batteries lithium

📋 FICHE D'IDENTIFICATION:
• Obligatoire pour chaque chargement
• Numéro ONU (4 chiffres)
• Nature du danger`,
        contentAr: `تصنيف المواد الخطرة (المنظمة العالمية للصحة):

🔴 الفئة 1: المتفجرات
• مواد يمكن أن تنفجر
• مثال: الذخيرة، الألعاب النارية، الديناميت
• ممنوع على الطرق السريعة

🟠 الفئة 2: الغازات
• غازات مضغوطة، مسيولة، محلولة
• مثال: البروبان، الأكسجين، الهيدروجين
• أسطوانات مثبتة جيداً ومؤمّنة

🟡 الفئة 3: السوائل القابلة للاشتعال
• نقطة وميض < 61 درجة مئوية
• مثال: البنزين، الكحول، الكيروسين
• منع التدخين بالقرب

🟤 الفئة 4: الصلبات القابلة للاشتعال
• 4أ: قابلة للاشتعال
• 4ب: قابلة للاشتعال عند ملامسة الماء
• 4ج: مؤكسدة ذاتية

🔵 الفئة 5: المؤكسدة والعضوية البيروكسيدية
• تدعم الاحتراق
• مثال: البيروكسيدات، البرمنغانتات

🟢 الفئة 6: المواد السامة والمعدية
• 6أ: سامة
• 6ب: معدية
• مثال: المبيدات الحشرية، الفيروسات

🟣 الفئة 7: المواد المشعة
• تصدر إشعاعات مؤيَّنة
• مثال: اليورانيوم، الكوبالت 60
• إشارة خاصة إلزامية

⚫ الفئة 8: المcorrosives
• تهاجم المعادن والجلد
• مثال: الأحماض، الصودا الكاوية

⬜ الفئة 9: مخاطر متنوعة
• مواد تشكل خطراً
• مثال: الأسبستوس، بطاريات الليثيوم

📋 بطاقة التعريف:
• إلزامية لكل شحنة
• رقم الأونو (4 أرقام)
• طبيعة الخطر`,
        keyPoints: [
          '9 classes de matières dangereuses selon l\'OMS',
          'Chaque classe a ses règles de transport',
          'Fiche d\'identification obligatoire',
          'Signalisation spécifique sur le véhicule'
        ],
        keyPointsAr: [
          '9 فئات من المواد الخطرة حسب المنظمة العالمية للصحة',
          'كل فئة لها قواعد نقل خاصة بها',
          'بطاقة تعريف إلزامية',
          'إشارة محددة على المركبة'
        ],
        tips: [
          'Mémorisez les classes par couleur: Rouge=Explosif, Orange=Gaz, Jaune=Liquide inflammable',
          'Le numéro ONU identifie la matière',
          'En cas de doute, ne pas approcher'
        ],
        tipsAr: [
          'تذكر الفئات بالألوان: أحمر=متفجر، برتقالي=غاز، أصفر=سائل قابل للاشتعال',
          'رقم الأونو يحدد المادة',
          'في حالة الشك، لا تقترب'
        ]
      },
      {
        id: 'regles_transport_md',
        title: 'Règles de transport',
        titleAr: 'قواعد النقل',
        content: `RÈGLES GÉNÉRALES DU TRANSPORT:

🚛 CHARGEMENT:
• Les matières dangereuses doivent être correctement identifiées
• Utiliser des emballages agréés et conformes
• Fixer solidement les marchandises
• Ne pas mélanger des matières incompatibles
• Ventilation correcte du véhicule

📋 DOCUMENTATION OBLIGATOIRE:
• Fiche d'identification des risques
• Autorisation de transport (si > 3,5 tonnes)
• Permis de conduire spécialisé (catégorie C, D ou E)
• Attestation de formation du conducteur

⏰ CONDITIONS DE CONDUITE:
• Respecter les itinéraires autorisés
• Interdiction de circuler la nuit (selon substances)
• Pause obligatoire toutes les 4,5 heures
• Ne pas fumer dans le véhicule
• Interdiction de dormir dans le véhicule chargé

📏 DISTANCES DE SÉCURITÉ:
• Doubler les distances normales
• Augmenter la vitesse de réaction
• Prise en compte de l'arrêt prolongé

⚠️ INTERDICTIONS:
• Dépasser les véhicules transportant des explosifs
• Stationner à proximité des habitations
• Utiliser les feux de stationnement en marche
• Laisser le véhicule non surveillé`,
        contentAr: `القواعد العامة للنقل:

🚛 التحميل:
• يجب تحديد المواد الخطرة بشكل صحيح
• استخدام تغليف معتمد ومتوافق
• تثبيت البضائع بصلابة
• عدم خلط مواد غير متوافقة
• تهوية صحيحة للمركبة

📋 الوثائق الإلزامية:
• بطاقة تعريف المخاطر
• تصريح النقل (إذا > 3,5 طن)
• رخصة قيادة متخصصة (الفئة C, D أو E)
• شهادة تدريب السائق

⏰ ظروف القيادة:
• احترام المسارات المرخصة
• منع السير ليلاً (حسب المواد)
• استراحة إلزامية كل 4,5 ساعات
• عدم التدخين في المركبة
• منع النوم في المركبة المحملة

📏 مسافات الأمان:
• تضاعف المسافات العادية
• زيادة سرعة رد الفعل
• مراعاة التوقف الطويل

⚠️ الحظر:
• تجاوز المركبات الناقلة للمتفجرات
• الوقوف بالقرب من المساكن
• استخدام أضواء الوقوف أثناء السير
• ترك المركبة دون مراقبة`,
        keyPoints: [
          'Emballages agréés et documentation obligatoire',
          'Permis spécialisé obligatoire (C, D, E)',
          'Pas de conduite la nuit pour certaines matières',
          'Itinéraires autorisés uniquement'
        ],
        keyPointsAr: [
          'تغليف معتمد ووثائق إلزامية',
          'رخصة متخصصة إلزامية (C, D, E)',
          'لا قيادة ليلاً لبعض المواد',
          'المسارات المرخصة فقط'
        ],
        tips: [
          'Connaître le contenu du chargement avant de prendre le volant',
          'Vérifier les documents AVANT le départ',
          'Respecter scrupuleusement les itinéraires'
        ],
        tipsAr: [
          'اعرف محتوى الشحنة قبل الجلوس خلف المقود',
          'تحقق من الوثائق قبل المغادرة',
          'احترم المسارات بدقة'
        ]
      },
      {
        id: 'signalisation_md',
        title: 'Signalisation des véhicules',
        titleAr: 'إشارة المركبات',
        content: `SIGNALISATION DES VÉHICULES TRANSPORTANT DES MD:

🔶 PANNEAUX ORANGE DE SIGNALISATION:
• Rectangle orange avec chiffre noir
• Placé AVANT et ARRIÈRE du véhicule
• Indique la classe de danger

🔺 TABLEAUX ORANGE AVANT ET ARRIÈRE:
• Tableau orange = Danger principal
• Numéro = Numéro d'identification du danger
• Deux tableaux si chargement multiple

🔴 LUMIÈRES ORANGE DE SIGNALISATION:
• Feux orange clignotants (extrémités)
• Activer le jour comme la nuit
• En cas d'arrêt prolongé

🏷️ ÉTIQUETTES D'IDENTIFICATION:
• Code à 4 chiffres (ONU)
• Pictogramme de danger
• N° d'identification du danger

📋 PANNEAU SPÉCIFIQUE:
• Fond orange
• Numéro du danger en noir
• Dimensions réglementaires

⚠️ EN CAS D'ACCIDENT:
• Signaler immédiatement aux secours
• Préciser la nature des matières
• Éviter toute source d'inflammation
• Ne pas toucher au chargement
• Évacuer si nécessaire`,
        contentAr: `إشارة المركبات الناقلة للمواد الخطرة:

🔶 لافتات الإشارة:
• مستطيل برتقالي برقم أسود
• يُوضع أمام وخلف المركبة
• يدل على فئة الخطر

🔺 ألواح أمامية وخلفية:
• لوح برتقالي = الخطر الرئيسي
• رقم = رقم تعريف الخطر
• لوحان إذا كانت الشحنة متنوعة

🔴 أضواء الإشارة:
• أضواء برتقالية وامعة (الأطراف)
• تفعيل نهاراً وليلاً
• في حالة التوقف الطويل

🏷️ ملصقات التعريف:
• رمز من 4 أرقام (أونو)
• رسم تعبيري للخطر
• رقم تعريف الخطر

📋 لافتة خاصة:
• خلفية برتقالية
• رقم الخطر بالأسود
• أبعاد نظامية

⚠️ في حالة الحادث:
• الإبلاغ فوراً للإسعاف
• تحديد طبيعة المواد
• تجنب أي مصدر اشتعال
• عدم لمس الشحنة
• الإخلاء إذا لزم الأمر`,
        keyPoints: [
          'Tableaux orange AVANT et ARRIÈRE obligatoires',
          'Numéro ONU à 4 chiffres sur les tableaux',
          'Feux orange clignotants en cas d\'arrêt prolongé',
          'Ne jamais toucher au chargement en cas d\'accident'
        ],
        keyPointsAr: [
          'ألواح برتقالية أمامية وخلفية إلزامية',
          'رقم أونو من 4 أرقام على الألواح',
          'أضواء برتقالية وامعة في حالة التوقف الطويل',
          'لا تلمس الشحنة أبداً في حالة الحادث'
        ],
        tips: [
          'Les panneaux orange signifient: Attention, charge dangereuse!',
          'Vérifiez que tous les panneaux sont bien visibles',
          'En cas de doute, éloignez-vous immédiatement'
        ],
        tipsAr: [
          'الألواح البرتقالية تعني: انتباه، شحنة خطرة!',
          'تحقق من أن جميع الألواح مرئية جيداً',
          'في حالة الشك، ابتعد فوراً'
        ]
      }
    ]
  }
];

// ==================== HELPER FUNCTIONS ====================

export const getModuleById = (id: string): CourseModule | undefined => {
  return COURSE_MODULES.find(m => m.id === id);
};

export const getTotalChapters = (): number => {
  return COURSE_MODULES.reduce((acc, m) => acc + m.chapters.length, 0);
};

export const getTotalContentLength = (): number => {
  return COURSE_MODULES.reduce((acc, m) => 
    acc + m.chapters.reduce((acc2, c) => acc2 + c.content.length + c.contentAr.length, 0), 0);
};

export const searchCourses = (query: string): Chapter[] => {
  const results: Chapter[] = [];
  const lowerQuery = query.toLowerCase();
  
  COURSE_MODULES.forEach(module => {
    module.chapters.forEach(chapter => {
      if (
        chapter.title.toLowerCase().includes(lowerQuery) ||
        chapter.content.toLowerCase().includes(lowerQuery) ||
        chapter.titleAr.includes(query) ||
        chapter.contentAr.includes(query)
      ) {
        results.push(chapter);
      }
    });
  });
  
  return results;
};
