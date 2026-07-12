<p align="center">
  <img src="https://img.shields.io/badge/Code_de_la_Route-Tunisie-success?style=for-the-badge" alt="Code de la Route Tunisie"/>
  <br/>
  <img src="https://img.shields.io/badge/React_Native-Expo-blue?style=for-the-badge&logo=react" alt="React Native Expo"/>
  <img src="https://img.shields.io/badge/Web-React_Native_Web-61dafb?style=for-the-badge&logo=react" alt="Web App"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

<h1 align="center">🚗 Code de la Route Tunisie</h1>
<h3 align="center">🇫🇷 Application mobile complète pour l'examen du permis de conduire</h3>
<h3 align="center">🇹🇳 تطبيق موبايل كامل لامتحان رخصة السياقة</h3>

---

<p align="center">
  <a href="#fonctionnalités">Fonctionnalités</a> •
  <a href="#installation">Installation</a> •
  <a href="#web-app">Web App</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#contributeurs">Contribuer</a>
</p>

---

## 📊 Chiffres Clés | أرقام رئيسية

| Élément | Quantité | العنصر | الكمية |
|---------|----------|---------|--------|
| ❓ Questions | 130+ | أسئلة | 130+ |
| 📚 Catégories | 12 | فئات | 12 |
| 📖 Modules de cours | 6 | وحدات تعليمية | 6 |
| 🌍 Langues | 2 (FR/AR) | لغات | 2 (فر/عر) |
| ⭐ Note de passage | 24/30 (80%) | درجة النجاح | 24/30 (80%) |

---

## 🎯 Modes de Quiz | أنماط الاختبار

### 🏠 Entraînement Libre | تدريب حر
- Choisissez 5 à 30 questions | اختر من 5 إلى 30 سؤالاً
- Difficulté variable | صعوبة متغيرة
- Progression sauvegardée | حفظ التقدم

### 📂 Par Catégorie | حسب الفئة
- 12 catégories spécialisées | 12 فئة متخصصة
- Révision ciblée | مراجعة موجهة
- Feedback immédiat | رد فوري

### 🎓 Mode Examen | وضع الامتحان
- 30 questions aléatoires | 30 سؤالاً عشوائياً
- Chronomètre 30 min | مؤقت 30 دقيقة
- Simulation réelle | محاكاة حقيقية

---

## 📚 Modules de Cours | وحدات تعليمية

| # | Module | الوحدة |
|---|--------|--------|
| 1 | 🚦 Règles de Circulation | قواعد المرور |
| 2 | 🚸 Signalisation | الإشارات |
| 3 | ⚖️ La Priorité | الأولوية |
| 4 | 🛡️ Sécurité Routière | السلامة الطرقية |
| 5 | 🍺 Alcool & Drogues | الكحول والمخدرات |
| 6 | 🏥 Secourisme | الإسعافات الأولية |

---

## 🌍 Langues Disponibles | اللغات المتاحة

| Langue | langue | Status |
|--------|--------|--------|
| 🇫🇷 Français | الفرنسية | ✅ |
| 🇹🇳 Arabe (Tunisien) | العربية (تونسية) | ✅ |

---

## 🛠️ Installation | التثبيت

### 📱 Mobile App

#### Prérequis | المتطلبات
- Node.js 18+
- npm ou yarn
- Expo CLI

#### Développement | التطوير
```bash
# Cloner le repository | استنساخ المستودع
git clone https://github.com/HiTechTN/code-de-la-route-tunisie.git
cd code-de-la-route-tunisie

# Installer les dépendances | تثبيت التبعيات
npm install

# Lancer l'application | تشغيل التطبيق
npx expo start
```

#### Build APK
```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

---

## 🌐 Web App | التطبيق الويب

### 🚀 Accès Rapide | وصول سريع

<p align="center">
  <a href="https://HiTechTN.github.io/code-de-la-route-tunisie">
    <img src="https://img.shields.io/badge/🌐_Web_App-Live-success?style=for-the-badge" alt="Web App Live"/>
  </a>
</p>

**GitHub Pages :** [https://HiTechTN.github.io/code-de-la-route-tunisie](https://HiTechTN.github.io/code-de-la-route-tunisie)

### 🛠️ Installation Web

```bash
# Installer les dépendances web (une seule fois) | تثبيت تبعيات الويب (مرة واحدة)
npm install react-dom react-native-web @expo/metro-runtime

# Lancer le serveur de développement | تشغيل خادم التطوير
npm run start:web
```

> ⚠️ **Note :** L'installation des dépendances web est unique. Elle n'est pas nécessaire à chaque clone.

### 📦 Build Web
```bash
npm run build:web
```

### 🚀 Déploiement Automatique
Le déploiement vers GitHub Pages est automatique via GitHub Actions à chaque push sur `main`.

---

## 🏗️ Technologies | التقنيات

| Technologie | Technologie | Usage |
|-------------|-------------|-------|
| React Native | React Native | Framework mobile |
| Expo | إيكسبو | Plateforme de développement |
| React Native Web | React Native Web | Support web |
| Metro Bundler | Metro Bundler | Bundler JavaScript |
| GitHub Actions | GitHub Actions | CI/CD automatique |
| GitHub Pages | GitHub Pages | Hébergement web |

---

## 📁 Structure du Projet | هيكل المشروع

```
├── App.tsx                    # Application principale
├── data/
│   ├── questions.ts           # 130+ questions
│   ├── courses.ts             # 6 modules de cours
│   ├── translations.ts        # Traductions FR/AR
│   └── image_mapping.json     # Mapping images quiz
├── assets/
│   ├── icon.png               # Icône de l'app
│   ├── adaptive-icon.png      # Icône Android
│   ├── splash.png             # Écran de démarrage
│   ├── favicon.png            # Favicon web
│   └── extracted_images/      # Images du quiz
├── .github/workflows/
│   └── deploy-web.yml         # Déploiement GitHub Pages
├── app.json                   # Configuration Expo
├── eas.json                   # Configuration EAS Build
├── package.json               # Dépendances
└── README.md                  # Documentation
```

---

## 📈 Statistiques | إحصائيات

![GitHub stars](https://img.shields.io/github/stars/HiTechTN/code-de-la-route-tunisie?style=social)
![GitHub forks](https://img.shields.io/github/forks/HiTechTN/code-de-la-route-tunisie?style=social)
![GitHub issues](https://img.shields.io/github/issues/HiTechTN/code-de-la-route-tunisie)
![GitHub last commit](https://img.shields.io/github/last-commit/HiTechTN/code-de-la-route-tunisie)

---

## 🤝 Contribuer | المساهمة

Les contributions sont bienvenues ! | المساهمات مرحب بها!

- 🐛 Signaler des bugs | الإبلاغ عن الأخطاء
- 💡 Proposer des fonctionnalités | اقتراح ميزات
- 📝 Améliorer la documentation | تحسين الوثائق
- 🌐 Traduire | الترجمة

---

## 📄 Licence | الرخصة

MIT License - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📞 Support | الدعم

Pour toute question | لأي سؤال:
- 📧 Ouvrir une issue GitHub | فتح issue على GitHub
- 💬 Discussion GitHub | مناقشة GitHub

---

<p align="center">
  <img src="https://img.shields.io/badge/Made_with_❤️-Tunisia-red?style=for-the-badge" alt="Made with Love Tunisia"/>
  <br/>
  <strong>🇹🇳 Préparez-vous pour votre permis de conduire avec confiance !</strong>
  <br/>
  <strong>🇹🇳 استعد لامتحان رخصة السياقة بثقة !</strong>
</p>
