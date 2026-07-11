// Contenu des cours du Code de la Route Tunisie
// Basé sur le programme officiel de l'ATTT

export type CourseModule = {
  id: string;
  title: string;
  titleAr: string;
  icon: string;
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
  {
    id: 'regles_circulation',
    title: 'Règles de Circulation',
    titleAr: 'قواعد حركة المرور',
    icon: '🚦',
    color: '#e74c3c',
    chapters: [
      {
        id: 'sens_circulation',
        title: 'Sens de circulation',
        titleAr: 'اتجاه السير',
        content: `En Tunisie, on conduit à DROITE.

• Les véhicules circulent sur la partie droite de la chaussée
• Les voies sont séparées par des lignes blanches (continues ou discontinues)
• En agglomération, la circulation se fait généralement à droite

Exceptions:
• Les ronds-points (sens anti-horaire)
• Certaines zones piétonnes
• Zones de livraison autorisées`,
        contentAr: `في تونس، يُقود على اليمين.

• تسير المركبات على الجزء الأيمن من الطريق
• تُفصل المسارات بخطوط بيضاء (مستمرة أو متقطعة)
• في المناطق الحضرية، تتم الحركة عادة على اليمين

الاستثناءات:
• الدوارات (عكس عقارب الساعة)
• بعض المناطق خصصة للمشاة
• مناطق التوصيل المسموح بها`,
        keyPoints: [
          'Conduire à droite en permanence',
          'Respecter le sens des giratoires (anti-horaire)',
          'Ne jamais contre-sensir'
        ],
        keyPointsAr: [
          'القيادة على اليمين دائماً',
          'احترام اتجاه الدوارات (عكس عقارب الساعة)',
          'عدم القيادة في الاتجاه المعاكس أبداً'
        ],
        tips: [
          'Pensez: "Je conduis à droite comme en France"',
          'En cas de doute, suivez le flux des véhicules',
          'Surveillez les panneaux de sens interdit'
        ],
        tipsAr: [
          'تذكر: "أقود على اليمين كما في فرنسا"',
          'في حالة الشك، اتبع تدفق المركبات',
          'راقب لافتات المنع'
        ]
      },
      {
        id: 'feux_circulation',
        title: 'Les feux de signalisation',
        titleAr: 'أضواء الإشارة',
        content: `LES TROIS FEUX:

🔴 ROUGE = ARRÊT COMPLET
• Arrêtez-vous avant la ligne d'arrêt
• Attendre le vert pour repartir

🟡 ORANGE = PRÉPARER L'ARRÊT
• Réduisez votre vitesse
• Arrêtez-vous si possible en toute sécurité

🟢 VERT = PEUT PASSER
• Vérifiez que les autres usagers s'arrêtent
• Vous pouvez circuler

FEUX CLIGNOTANTS:
• Orange clignotant = Danger, ralentissez
• Vert clignotant = Cédez le passage`,
        contentAr: `الأضواء الثلاثة:

🔴 أحمر = توقف كامل
• توقف قبل خط التوقف
• انتظر الأخضر للمغادرة

🟡 برتقالي = استعد للتوقف
• قلل سرعتك
• توقف إن أمكن بأمان

🟢 أخضر = يمكنك المرور
• تحقق من أن المستخدمين الآخرين يتوقفون
• يمكنك السير

الأضواء الوامعة:
• برتقالي وامع = خطر، قلل السرعة
• أخضر وامع = أ继行 الأولوية`,
        keyPoints: [
          'Rouge = Stop, Orange = Prudence, Vert = Passer',
          'Rouge clignotant = Passer avec précaution',
          'Vert clignotant = Céder le passage'
        ],
        keyPointsAr: [
          'أحمر = توقف، برتقالي = حذر، أخضر = المرور',
          'أحمر وامع = المرور بحذر',
          'أخضر وامع = أ继行 الأولوية'
        ],
        tips: [
          'Un feu Orange ne signifie JAMAIS "accélérer"',
          'Le rouge clignotant ≠ vert clignotant',
          'Vérifiez toujours avant de passer au vert'
        ],
        tipsAr: [
          'الضوء البرتقالي لا يعني أبداً "التسارع"',
          'الأحمر الوامع ≠ الأخضر الوامع',
          'تحقق دائماً قبل المرور بالأخضر'
        ]
      },
      {
        id: 'vitesse_reglements',
        title: 'Limites de vitesse',
        titleAr: 'حدود السرعة',
        content: `LIMITES DE VITESSE EN TUNISIE:

🏙️ Zone urbaine: 50 km/h
🏘️ Zone de bâtiment: 30 km/h
🌳 Zone rurale: 80 km/h
🛣️ Route nationale: 110 km/h
⏩ Autoroute: 120 km/h

VITESSE DE NUIT: -10 km/h par rapport au jour
PLUIE/BROUILLARD: Réduisez la vitesse

Sanctions pour excès de vitesse:
• Amendes selon le dépassement
• Suspension du permis en cas d'excès grave`,
        contentAr: `حدود السرعة في تونس:

🏙️ منطقة حضرية: 50 كم/ساعة
🏘️ منطقة مباني: 30 كم/ساعة
🌳 منطقة ريفية: 80 كم/ساعة
🛣️ طريق وطني: 110 كم/ساعة
⏩ طريق سريع: 120 كم/ساعة

السرعة ليلاً: -10 كم/ساعة مقارنة بالنهار
المطر/الضباب: قلل السرعة

عقوبات تجاوز السرعة:
• غرامات حسب التجاوز
• تعليق الرخصة في حالة التجاوز الخطير`,
        keyPoints: [
          'Urbain = 50, Bâtiment = 30, Rural = 80, Autoroute = 120',
          'Nuit: vitesse max - 10 km/h',
          'Pluie: réduire la vitesse'
        ],
        keyPointsAr: [
          'حضرية = 50، مباني = 30، ريفية = 80، طريق سريع = 120',
          'ليلاً: السرعة القصوى - 10 كم/ساعة',
          'المطر: تقليل السرعة'
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
  {
    id: 'signalisation',
    title: 'Signalisation',
    titleAr: 'العلامات الإرشادية',
    icon: '🪧',
    color: '#3498db',
    chapters: [
      {
        id: 'panneaux_danger',
        title: 'Panneaux de danger',
        titleAr: 'لافتات الخطر',
        content: `LES PANNEAUX DE DANGER (Triangles rouges):

⚠️ Point d'exclamation = Danger général
⚠️ Virage à droite
⚠️ Virage à gauche
⚠️ Double virage (d'abord à droite)
⚠️ Virage en S
⚠️ Route glissante
⚠️ Chute de pierres
⚠️ Travaux
⚠️ Passage à niveau
⚠️ Passage piéton
⚠️ Enfant (école)
⚠️ Animaux sauvages

FORME: Triangle rouge pointe vers le haut
FONCTION: Signalent un danger à anticiper`,
        contentAr: `لافتات الخطر (مثلثات حمراء):

⚠️ علامة تعجب = خطر عام
⚠️ منعطف يمين
⚠️ منعطف يسار
⚠️ منعطف مزدوج (أولاً يمين)
⚠️ منعطف على شكل S
⚠️ طريق زلق
⚠️ سقوط صخور
⚠️ أعمال
⚠️ عبور سكة حديدية
⚠️ معبر راكض
⚠️ أطفال (مدرسة)
⚠️ حيوانات بريّة

الشكل: مثلث أحمر رأسه للأعلى
الوظيفة: تشير إلى خطر يجب توقعه`,
        keyPoints: [
          'Triangle rouge = Danger',
          'Pointe vers le haut',
          'À anticiper et ralentir'
        ],
        keyPointsAr: [
          'مثلث أحمر = خطر',
          'الرأس للأعلى',
          'يجب التوقع والتخفيض'
        ],
        tips: [
          'Un triangle = "Attention, danger"',
          'Réduisez la vitesse en voyant un panneau de danger',
          'Soyez prêt à réagir'
        ],
        tipsAr: [
          'مثلث = "انتباه، خطر"',
          'قلل السرعة عند رؤية لافتة خطر',
          'كن مستعداً للتفاعل'
        ]
      },
      {
        id: 'panneaux_interdiction',
        title: 'Panneaux d\'interdiction',
        titleAr: 'لافتات المنع',
        content: `LES PANNEAUX D'INTERDICTION (Ronds rouges):

🔴 Sens interdit = Cercle rouge avec barre noire
🔴 Pas de camions = Cercle rouge avec camion
🔴 Pas de vélos = Cercle rouge avec vélo
🔴 Pas de piétons = Cercle rouge avec piéton
🔴 Vitesse max = Cercle rouge avec chiffre
🔴 Pas de dépassement = Cercle rouge avec deux voitures

FIN D'INTERDICTION:
• Cercle gris avec barres diagonales = Fin de zone

FORME: Rond rouge avec bordure rouge
FONCTION: Interdisent une action spécifique`,
        contentAr: 'لافتات المنع (دوائر حمراء):',
        keyPoints: [
          'Cercle rouge = Interdiction',
          'Cercle gris barré = Fin d\'interdiction',
          'Interdiction = on ne doit PAS faire l\'action'
        ],
        keyPointsAr: [
          'دائرة حمراء = منع',
          'دائرة رمادية مشطوبة = نهاية منع',
          'منع = يجب عدم القيام بالفعل'
        ],
        tips: [
          'Mémorisez: Cercle rouge = STOP à quelque chose',
          'Le panneau de fin a des barres grises',
          'Vérifiez toujours l\'interdiction avant d\'agir'
        ],
        tipsAr: [
          'تذكر: دائرة حمراء = توقف عن شيء',
          'لافتة النهاية لها خطوط رمادية',
          'تحقق دائماً من المنع قبل التصرف'
        ]
      },
      {
        id: 'panneaux_obligation',
        title: 'Panneaux d\'obligation',
        titleAr: 'لافتات الإلزام',
        content: `LES PANNEAUX D'OBLIGATION (Ronds bleus):

🔵 Obligation de tourner à droite
🔵 Obligation de tourner à gauche
🔵 Tout droit obligatoire
🔵 Voie obligatoire (bus, vélos)

LES PANNEAUX DE FIN D'OBLIGATION:
• Cercle bleu barré = Fin d'obligation

FORME: Rond bleu
FONCTION: Imposent une action obligatoire`,
        contentAr: `لافتات الإلزام (دوائر زرقاء):

🔵 إلزام بالدوران يميناً
🔵 إلزام بالدوران يساراً
🔵 إلزام بالمسار المباشر
🔵 مسار إلزامي (حافلات، دراجات)

لافتات نهاية الإلزام:
• دائرة زرقاء مشطوبة = نهاية إلزام

الشكل: دائرة زرقاء
الوظيفة: تفرض فعل إلزامي`,
        keyPoints: [
          'Cercle bleu = Obligation',
          'On doit faire ce qui est indiqué',
          'Barré = fin d\'obligation'
        ],
        keyPointsAr: [
          'دائرة زرقاء = إلزام',
          'يجب فعل ما هو موضح',
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
      }
    ]
  },
  {
    id: 'priorite',
    title: 'La Priorité',
    titleAr: 'الأولوية',
    icon: '⬆️',
    color: '#f39c12',
    chapters: [
      {
        id: 'regles_priorite',
        title: 'Règles de priorité',
        titleAr: 'قواعد الأولوية',
        content: `LES RÈGLES DE PRIORITÉ:

1️⃣ PANNEAU STOP = Arrêt obligatoire
   • Vous devez céder le passage à tous les véhicules
   • Même si personne ne vient

2️⃣ PANNEAU CÉDEZ LE PASSAGE = Priorité aux autres
   • Ralentissez, soyez prêt à vous arrêter
   • Cédez si des véhicules approchent

3️⃣ AUCUN PANNEAU = Priorité à droite
   • Le véhicule venant de la droite a la priorité
   • À égalité, le plus large cède

4️⃣ GIRATOIRE = Priorité aux véhicules DANS le rond-point

5️⃣ VÉHICULES PRIORITAIRES = Toujours céder
   • Ambulance, pompiers, police
   • Feux bleus et rouges clignotants + sirène`,
        contentAr: `قواعد الأولوية:

1️⃣ لافتة ستوپ = توقف إلزامي
   • يجب إعطاء الأولوية لجميع المركبات
   • حتى لو لم تأتِ أي مركبة

2️⃣ لافتة أ继行 الأولوية = الأولوية للآخرين
   • قلل السرعة، كن مستعداً للتوقف
   • أ继行 إذا كانت مركبات تقترب

3️⃣ لا لافتة = الأولوية لليمين
   • المركبة Coming من اليمين لها الأولوية
   • عند التساوي، الأكبر يُعطي الأولوية

4️⃣ دوار = الأولوية للمركبات داخل الدوار

5️⃣ مركبات ذات أولوية = دائماً أُعطي الأولوية
   • الإسعاف، الإطفاء، الشرطة
   • أضواء زرقاء حمراء وامعة + صفّارة`,
        keyPoints: [
          'STOP = Arrêt obligatoire + céder le passage',
          'Sans panneau = Priorité à droite',
          'Giratoire = Priorité à ceux déjà dedans',
          'Urgence = Toujours céder'
        ],
        keyPointsAr: [
          'ستوپ = توقف إلزامي + إعطاء الأولوية',
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
  {
    id: 'securite',
    title: 'Sécurité Routière',
    titleAr: 'الأمان على الطريق',
    icon: '🛡️',
    color: '#27ae60',
    chapters: [
      {
        id: 'equipement_obligatoire',
        title: 'Équipements obligatoires',
        titleAr: 'المعدات الإلزامية',
        content: `ÉQUIPEMENTS OBLIGATOIRES DANS LE VÉHICULE:

1️⃣ Triangle de signalisation
   • Pour signaler un arrêt d'urgence
   • Placer à 50m derrière le véhicule

2️⃣ Gilet réfléchissant (par occupant)
   • Porter en cas d'arrêt sur la route
   • Visible de jour comme de nuit

3️⃣ extincteur (recommandé)
   • Pour les véhicules professionnels: obligatoire

4️⃣ Trousse de premiers secours (recommandée)

CEINTURES DE SÉCURITÉ:
• Obligatoires pour TOUS les occupants
• Doivent être portées correctement (bassin + poitrine)
• Les enfants < 1,50m: siège adapté`,
        contentAr: `المعدات الإلزامية في المركبة:

1️⃣ مثلث الإشارة
   • للإشارة إلى توقف للطوارئ
   • يُوضع على مسافة 50 متراً خلف المركبة

2️⃣ سترة واقية (لكل راكب)
   • تُلبس في حالة التوقف على الطريق
   • مرئية نهاراً وليلاً

3️⃣ طفاية حريق (موصى بها)
   • للمركبات المهنية: إلزامية

4️⃣ صندوق إسعافات أولية (موصى به)

أحزمة الأمان:
• إلزامية لجميع الركاب
• يجب ارتداؤها بشكل صحيح (حوض + صدر)
• الأطفال < 1,50 م: مقعد مناسب`,
        keyPoints: [
          'Triangle à 50m + Gilet pour chaque occupant',
          'Ceintures pour TOUS, tout le temps',
          'Enfants < 1,50m: siège adapté'
        ],
        keyPointsAr: [
          'مثلث على 50 متر + سترة لكل راكب',
          'أحزمة لجميع الأشخاص، في جميع الأوقات',
          'أطفال < 1,50 م: مقعد مناسب'
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
        id: 'distances_securite',
        title: 'Distances de sécurité',
        titleAr: 'مسافات الأمان',
        content: `LA DISTANCE DE SÉCURITÉ:

📐 FORMULE: Vitesse ÷ 10 = Distance en mètres
   Exemple: 90 km/h ÷ 10 = 9 mètres minimum

⚠️ Conditions défavorables: × 2
   • Pluie: doubler la distance
   • Brouillard: doubler la distance
   • Nuit: augmenter la distance
   • Pneus usés: augmenter la distance

📏 DISTANCE D'ARRÊT = Distance de réaction + Distance de freinage
   • Réaction: ~1 seconde (14m à 50km/h)
   • Freinage: variable selon vitesse et route

💡 ASTUCE: Le panneau "2 traits" = 2 secondes de distance`,
        contentAr: `مسافة الأمان:

📐 الصيغة: السرعة ÷ 10 = المسافة بالمتر
   مثال: 90 كم/ساعة ÷ 10 = 9 أمتار كحد أدنى

⚠️ ظروف غير مواتية: × 2
   • المطر: ضاعف المسافة
   • الضباب: ضاعف المسافة
   • الليل: زِد المسافة
   • إطارات مستهلكة: زِد المسافة

📏 مسافة التوقف = مسافة رد الفعل + مسافة الكبح
   • رد الفعل: ~1 ثانية (14 متر عند 50 كم/ساعة)
   • الكبح: متغير حسب السرعة والطريق

💡 نصيحة: لافتة "خطين" = مسافة ثانيتين`,
        keyPoints: [
          'Distance = Vitesse ÷ 10 (en mètres)',
          'Doubler en conditions défavorables',
          'Mieux vaut trop loin que trop près'
        ],
        keyPointsAr: [
          'المسافة = السرعة ÷ 10 (بالمتر)',
          'ضعف في الظروف غير المواتية',
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
      }
    ]
  },
  {
    id: 'alcool_drogues',
    title: 'Alcool & Drogues',
    titleAr: 'الخمر والمخدرات',
    icon: '🍷',
    color: '#e67e22',
    chapters: [
      {
        id: 'alcool',
        title: 'Alcool et conduite',
        titleAr: 'الكحول والقيادة',
        content: `L'ALCOOL ET LA CONDUITE:

⚖️ SEUIL LÉGAL EN TUNISIE: 0,5 g/l de sang

📊 EFFETS DE L'ALCOOL:
• 0,2 g/l: Déjà une réduction des réflexes
• 0,5 g/l: Seuil légal - perte de vigilance
• 0,8 g/l: Réaction très altérée
• > 1,0 g/l: Danger extrême

⏱️ TEMPS DE SOBRIÉTÉ:
• Un verre = 1 à 2 heures pour l'éliminer
• Un repas ralentit l'absorption
• Le café ne réduit PAS l'alcoolémie

⚖️ SANCTIONS:
• Amende lourde
• Suspension du permis
• Prison en cas de récidive ou d'accident`,
        contentAr: `الكحول والقيادة:

⚖️ الحد القانوني في تونس: 0,5 غ/لتر من الدم

📊 تأثيرات الكحول:
• 0,2 غ/لتر: تقليل الروافع بالفعل
• 0,5 غ/لتر: الحد القانوني - فقدان اليقظة
• 0,8 غ/لتر: تفاعل معدّل بشكل كبير
• > 1,0 غ/لتر: خطر شديد

⏱️ وقت التعافي:
• كوب واحد = 1 إلى 2 ساعة للإ eliminación
• الوجبة تبطئ الامتصاص
• القهوة لا تقلل من تركيز الكحول

⚖️ العقوبات:
• غرامة كبيرة
• تعليق الرخصة
• سجن في حالة العودة أو الحادث`,
        keyPoints: [
          'Seuil: 0,5 g/l - Tolérance ZÉRO pour les jeunes conducteurs',
          'Un café ne rend PAS apte à conduire',
          'Le seul remède: le TEMPS'
        ],
        keyPointsAr: [
          'الحد: 0,5 غ/لتر - لا تسامح للسائقين الجدد',
          'القهوة لا تجعلك مؤهلاً للقيادة',
          'العلاج الوحيد: الوقت'
        ],
        tips: [
          'Si vous buvez, ne conduisez PAS',
          'Prévoyez un designated driver',
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
  {
    id: 'secourisme',
    title: 'Secourisme',
    titleAr: 'الإسعافات الأولية',
    icon: '🏥',
    color: '#1abc9c',
    chapters: [
      {
        id: 'premiers_secours',
        title: 'Premiers secours sur la route',
        titleAr: 'الإسعافات الأولية على الطريق',
        content: `LES 4 ÉTAPES EN CAS D'ACCIDENT:

1️⃣ SÉCURISER
   • Allumez les warning
   • Placez le triangle à 50m
   • Mettez le gilet réfléchissant

2️⃣ ALERTER (190 SAMU / 198 Pompiers / 197 Police)
   • Donnez la localisation exacte
   • Nombre de blessés
   • Type d'accident

3️⃣ PROTÉGER LES BLESSÉS
   • Ne déplacez PAS les blessés
   • Couvrez-les pour éviter l'hypothermie
   • Parlez-leur pour les rassurer

4️⃣ PREMIERS SECOURS
   • Vérifiez la conscience et la respiration
   • Position Latérale de Sécurité (PLS) si inconscient
   • RCP si arrêt cardiaque (30 compressions / 2 insufflations)`,
        contentAr: `الخطوات الأربع في حالة حادث:

1️⃣ التأمين
   • شغّل أضواء الخطر
   • ضع المثلث على مسافة 50 متراً
   • البس السترة الواقية

2️⃣ الإنذار (190 الإسعاف / 198 الإطفاء / 197 الشرطة)
   • أعطِ الموقع بالتفصيل
   • عدد المصابين
   • نوع الحادث

3️⃣ حماية المصابين
   • لا تنقل المصابين
   • غطّهم لتجنب انخفاض الحرارة
   • تحدث إليهم لطمأنتهم

4️⃣ الإسعافات الأولية
   • تحقق من الوعي والتنفس
   • وضعية الاستلقاء الجانبية الآمنة (PLS) إذا فاقد للوعي
   • إنعاش القلب والرئتين إذا توقف القلب (30 ضغطة / 2 نفخ)`,
        keyPoints: [
          'Sécuriser → Alerter → Protéger → Secourir',
          'Ne JAMAIS déplacer un blessé',
          'PLS pour un inconscient qui respire'
        ],
        keyPointsAr: [
          'تأمين → إنذار → حماية → إسعاف',
          'لا تنقل المصاب أبداً',
          'وضعية الاستلقاء الجانبية لفاقد الوعي الذي يتنفس'
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
  {
    id: 'ecologie',
    title: 'Éco-conduite',
    titleAr: 'القيادة البيئية',
    icon: '🌿',
    color: '#2ecc71',
    chapters: [
      {
        id: 'eco_conduite',
        title: 'Conduite respectueuse de l\'environnement',
        titleAr: 'قيادة تحترم البيئة',
        content: `L'ÉCO-CONDUITE:

🌿 PRINCIPES:
• Anticiper: regarder loin devant
• Conduire souplement: éviter les à-coups
• Rouler à vitesse constante
• Utiliser le frein moteur en descente
• Couper le moteur à l'arrêt > 30 secondes

⛽ ÉCONOMIES DE CARBURANT:
• Éviter les démarrages brusques
• Pas de ralenti inutile (point mort)
• Climatisation modérée
• Pneus bien gonflés
• Entretien régulier

🌍 IMPACT:
• Moins de consommation = moins de pollution
• Réduction du bruit
• Préservation des ressources`,
        contentAr: `القيادة البيئية:

🌿 المبادئ:
• التوقع: النظر بعيداً للأمام
• القيادة بسلاسة: تجنب الحركات المفاجئة
• السير بسرعة ثابتة
• استخدام الكبح المحرّك في النزول
• إيقاف المحرك عند التوقف > 30 ثانية

⛽ توفير الوقود:
• تجنب الانطلاق الحاد
• عدم البطء غير الضروري (النقطة المحايدة)
• مكيف معتدل
• إطارات م inflada bien
• صيانة منتظمة

🌍 التأثير:
• استهلاك أقل = تلوث أقل
• تقليل الضوضاء
• الحفاظ على الموارد`,
        keyPoints: [
          'Anticipation = sécurité + économie',
          'Vitesse constante = moins de consommation',
          'Entretien régulier = véhicule plus propre'
        ],
        keyPointsAr: [
          'التوقع = أمان + توفير',
          'سرعة ثابتة = استهلاك أقل',
          'صيانة منتظمة = مركبة أنظف'
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
  }
];

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
