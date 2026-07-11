# 🚗 Code de la Route Tunisie

Application mobile complète pour préparer l'examen du code de la route en Tunisie.

## 📱 Fonctionnalités

### 🏠 Page d'Accueil
- Tableau de bord avec progression
- Accès rapides aux fonctionnalités principales
- Astuces du jour

### 📚 Module Cours (6 modules complets)
1. **Règles de Circulation** - Code de la route, vitesses, panneaux
2. **Signalisation** - Panneaux danger, interdiction, obligation
3. **La Priorité** - Règles de priorité, carrefours, giratoires
4. **Sécurité Routière** - Équipements, distances de sécurité
5. **Alcool & Drogues** - Seuils légaux, sanctions, conduite sous influence
6. **Secourisme** - Premiers secours, numéros d'urgence

### ❓ Quiz d'Entraînement
- **Mode Libre** : 5-30 questions, difficulté variable
- **Par Catégorie** : 12 catégories disponibles
- **Mode Examen** : 30 questions, chronomètre 30 minutes

### 📊 Statistiques
- Suivi des progrès
- Scores moyens
- Progression par catégorie

## 🌍 Langues
- 🇫🇷 Français
- 🇹🇳 Arabe (Tunisien)

## 🛠️ Installation

### Prérequis
- Node.js 18+
- npm ou yarn
- Expo CLI

### Développement

```bash
# Cloner le repository
git clone https://github.com/VOTRE_USERNAME/code-de-la-route-tunisie.git
cd code-de-la-route-tunisie

# Installer les dépendances
npm install

# Lancer l'application
npx expo start
```

### Build APK (Android)

```bash
# Installer EAS CLI
npm install -g eas-cli

# Se connecter à Expo
eas login

# Configurer le build
eas build:configure

# Builder l'APK
eas build --platform android --profile preview
```

### Build via GitHub Actions
Le build est automatique via GitHub Actions. Consultez la section CI/CD.

## 📁 Structure du Projet

```
mobile_app/
├── App.tsx                    # Application principale (2196 lignes)
├── data/
│   ├── questions.ts           # 130+ questions avec traductions
│   └── courses.ts             # 6 modules de cours
├── assets/
│   ├── icon.png               # Icône de l'app
│   ├── adaptive-icon.png      # Icône Android
│   ├── splash.png             # Écran de démarrage
│   └── favicon.png            # Favicon web
├── app.json                   # Configuration Expo
├── eas.json                   # Configuration EAS Build
├── tsconfig.json              # Configuration TypeScript
├── babel.config.js            # Configuration Babel
├── package.json               # Dépendances
└── .gitignore                 # Fichiers ignorés
```

## 📊 Contenu

| Élément | Quantité |
|---------|----------|
| Questions | 130+ |
| Catégories | 12 |
| Modules de cours | 6 |
| Chapitres | 30+ |
| Langues | 2 (FR/AR) |

## 🎯 Modes de Quiz

### Entraînement Libre
- Choisissez le nombre de questions (5, 10, 15, 20, 30)
- Sélectionnez la difficulté (Toutes, Facile, Moyen, Difficile)
- Entraînez-vous à votre rythme

### Par Catégorie
- 12 catégories disponibles
- Questions ciblées par sujet
- Idéal pour réviser un point précis

### Mode Examen
- 30 questions aléatoires
- Chronomètre de 30 minutes
- Score minimum requis : 24/30 (80%)
- Simulation de l'examen réel

## 🏷️ Catégories

1. 🚦 Signalisation
2. ⚖️ Priorité
3. 🏎️ Vitesse
4. 🅿️ Stationnement
5. 🛡️ Sécurité
6. 🍺 Alcool
7. 🏥 Secourisme
8. 🔧 Mécanique
9. 🌿 Écologie
10. 📋 Règlement
11. 🪧 Panneaux
12. 🔧 Techniques

## 🛠️ Technologies

- **Framework** : React Native (Expo)
- **Navigation** : React Navigation
- **Stockage** : AsyncStorage
- **Build** : EAS Build
- **CI/CD** : GitHub Actions

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribuer

Les contributions sont bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer la documentation
- Traduire dans d'autres langues

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**🇹🇳 Préparez-vous pour votre permis de conduire avec confiance !**
