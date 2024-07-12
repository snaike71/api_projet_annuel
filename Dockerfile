# Utiliser une image Node officielle comme image de base
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer nodemon globalement pour le développement
RUN npm install -g nodemon

# Copier le reste de l'application
COPY . .

# Exposer le port que l'application utilisera
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]

