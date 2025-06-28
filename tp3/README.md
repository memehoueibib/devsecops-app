# TP3 - DevSecOps : Observabilité, Pratique des 3 Voies & Anticipation

## 🎯 Objectifs

Ce TP vise à :
- Surveiller un pipeline CI/CD et extraire des résultats exploitables
- Appliquer les 3 voies DevOps dans un cas réel
- Identifier des leviers d'amélioration via des structures expérimentales
- Comprendre les tendances futures du DevSecOps

## 📁 Structure du projet
tp3/
├── app.js                    # Application Node.js principale
├── package.json              # Dépendances Node.js
├── Dockerfile               # Image Docker de l'application
├── docker-compose.yml       # Stack de monitoring complète
├── app.test.js             # Tests unitaires
├── .github/workflows/       # Pipeline CI/CD
├── monitoring/             # Configuration monitoring
├── logs/                   # Dossier des logs
└── README.md               # Ce fichier

## 🚀 Installation et lancement

### 1. Installation des dépendances
```bash
cd tp3
npm install
2. Tests locaux
bashnpm test
3. Lancement avec monitoring
bashdocker-compose up -d
4. Accès aux services

Application : http://localhost:3000
Grafana : http://localhost:3001 (admin/admin)
Prometheus : http://localhost:9090
Loki : http://localhost:3100

🔗 Endpoints de l'application

GET / - Page d'accueil
GET /feature - Test du feature toggle (A/B)
GET /error - Génère une erreur 500 pour tester les alertes
GET /health - Health check

🔄 Pipeline CI/CD
Le pipeline GitHub Actions inclut :

Tests unitaires avec couverture de code
Analyse SAST avec Semgrep
Scan des dépendances avec OWASP Dependency Check
Scan de container avec Trivy
Déploiement conditionnel

📊 Monitoring et observabilité
Logs

Winston pour la génération de logs structurés
Promtail pour la collecte
Loki pour le stockage
Grafana pour la visualisation

Feature Toggle
Variable d'environnement FEATURE_TOGGLE :

A : Active la version A de la fonctionnalité
B ou autre : Active la version B

✅ Progression du TP

 Pipeline CI/CD sécurisé
 Application avec logs
 Feature toggle implémenté
 Monitoring configuré
 Fichier POSTMORTEM.md
 Analyse des outils IA
 Rapport de réflexion future

## 🎯 Statuts DevSecOps

![CI/CD Pipeline](https://github.com/memehoueibib/devsecops-app/actions/workflows/ci-cd.yml/badge.svg)
![Security](https://img.shields.io/badge/Security-Scanned-green)
![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen)

