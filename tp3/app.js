// tp3/app.js - Application Node.js pour TP3 DevSecOps
const express = require('express');
const winston = require('winston');

const app = express();
const port = process.env.PORT || 3000;

// Configuration des logs avec Winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

app.use(express.json());

// Route basique
app.get('/', (req, res) => {
  logger.info('Accès à la page d\'accueil');
  res.json({ message: 'Hello DevSecOps TP3!', timestamp: new Date().toISOString() });
});

// Route avec feature toggle (pour partie 3)
app.get('/feature', (req, res) => {
  const useFeatureA = process.env.FEATURE_TOGGLE === 'A';
  
  if (useFeatureA) {
    logger.info('Feature A utilisée');
    res.json({ version: 'A', message: 'Version A de la fonctionnalité' });
  } else {
    logger.info('Feature B utilisée');
    res.json({ version: 'B', message: 'Version B de la fonctionnalité' });
  }
});

// Route qui peut générer des erreurs (pour tester les alertes)
app.get('/error', (req, res) => {
  logger.error('Erreur simulée');
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

// Route pour health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  logger.info(`Serveur TP3 démarré sur le port ${port}`);
});

module.exports = app;
Test feature toggle B
