# Utiliser une image Node.js officielle
FROM node:18-alpine

# Créer un utilisateur non-root pour la sécurité
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de production seulement
RUN npm ci --only=production && npm cache clean --force

# Copier le code source
COPY . .

# Créer le dossier logs et changer le propriétaire
RUN mkdir -p logs && chown -R nodeuser:nodejs /app
USER nodeuser

# Exposer le port
EXPOSE 3000

# Définir les variables d'environnement
ENV NODE_ENV=production

# Commande de démarrage
CMD ["npm", "start"]
