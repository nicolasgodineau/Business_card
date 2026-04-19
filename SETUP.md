# 🚀 Guide de Configuration - Business Card

Ce guide explique comment configurer le projet sur votre ordinateur si vous n'avez plus le dossier.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé sur votre ordinateur :

- **Node.js** (version 14+) : [Télécharger ici](https://nodejs.org/)
- **npm** (inclus avec Node.js)
- **Git** : [Télécharger ici](https://git-scm.com/)

Vérifiez l'installation en ouvrant votre terminal et en tapant :

```bash
node --version
npm --version
git --version
```

## 📥 Cloner le Projet

### Option 1 : Via Git (Recommandé)

1. Ouvrez votre terminal
2. Naviguez vers le dossier où vous voulez placer le projet :

```bash
cd ~/Documents
# ou n'importe quel autre dossier
```

3. Clonez le repository :

```bash
git clone https://github.com/nicolasgodineau/Business_card.git
cd Business_card
```

### Option 2 : Via ZIP

1. Allez sur [GitHub - Business_card](https://github.com/nicolasgodineau/Business_card)
2. Cliquez sur le bouton **Code** → **Download ZIP**
3. Décompressez le fichier
4. Ouvrez le terminal dans le dossier extrait

## 🔧 Installation des Dépendances

Une fois dans le dossier du projet, installez toutes les dépendances :

```bash
npm install
```

Cette commande télécharge et installe tous les packages nécessaires (React, Material-UI, i18next, etc.).

## 🏃 Lancer le Projet en Mode Développement

Pour voir le projet en direct sur votre navigateur :

```bash
npm start
```

- Le navigateur s'ouvrira automatiquement à `http://localhost:3000`
- Les modifications sont reflétées en temps réel (hot reload)
- Appuyez sur `Ctrl+C` (ou `Cmd+C` sur Mac) pour arrêter le serveur

## 🏗️ Compiler pour la Production

Quand vous êtes prêt à déployer :

```bash
npm run build
```

Cela crée un dossier `build/` optimisé et minifié, prêt pour la production.

## 📦 Créer un fichier ZIP (Build + Compression)

Pour compiler ET créer un fichier ZIP automatiquement :

```bash
npm run build-and-zip
```

Cela crée un fichier `build.zip` contenant le dossier `build/` compressé.

## 📁 Structure du Projet

```
Business_card/
├── public/              # Fichiers statiques
│   ├── index.html      # HTML principal
│   └── favicon/        # Icônes
├── src/                # Code source
│   ├── components/     # Composants React
│   ├── img/           # Images et icônes
│   ├── lang/          # Fichiers de traduction (en.json, fr.json)
│   ├── App.jsx        # Composant principal
│   ├── theme.js       # Configuration Material-UI
│   └── translation.js # Gestion des traductions
├── package.json       # Dépendances et scripts
└── README.md          # Documentation générale
```

## 🔍 Dépannage

### `npm install` ne fonctionne pas

- Vérifiez votre connexion Internet
- Essayez de supprimer `node_modules/` et `package-lock.json`, puis relancez `npm install`

### Port 3000 déjà utilisé

- Modifiez le port avec : `PORT=3001 npm start`

### Module manquant après installation

- Relancez `npm install`
- Supprimez le cache : `npm cache clean --force`

## 📝 Variables d'Environnement

Actuellement, le projet n'utilise pas de fichier `.env`. Les URLs des liens (CV, portfolio, etc.) sont hardcodées dans [App.jsx](src/App.jsx).

## 🌐 Déployer le Projet
