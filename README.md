# API Projet Annuel - Documentation

## Prérequis:
Cette documentation explique comment configurer et lancer l'API projet annuel en local ou avec Docker.

Prérequis:
- Node.js v18.x ou plus
- Docker
- Docker Compose

## Configuration:
Fichier `.env`

Créez un fichier `.env` à la racine du projet en utilisant le template fourni ci-dessous :

```
# .env.template
NODE_ENV=development
PORT=3000

# Database configuration
DB_USERNAME=root
DB_PASSWORD=root_password
DB_DATABASE=test
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql

# JWT Secret
SECRET_API_KEY=your_secret_key

# Control wait-for-it script usage
WAIT_FOR_DB=true

```

Renommez le fichier `.env.template` en `.env` et remplacez les valeurs par vos informations de configuration.

## Lancer l'API en local:
1. **Installer les dépendances**

Assurez-vous que vous avez Node.js installé. Ensuite, exécutez la commande suivante pour installer les dépendances du projet :

```
npm install
```

2. **Configurer la base de données**

Assurez-vous d'avoir une base de données MySQL en cours d'exécution et configurée selon les valeurs de votre fichier `.env`.

3. **Démarrer le serveur**

Pour démarrer le serveur en local, exécutez la commande suivante :

```
npm run start
```

## Lancer l'API avec Docker:

### Utiliser Docker Compose
1. **Configurer le fichier `docker-compose.yml`**

Voici un exemple de fichier `docker-compose.yml` :

```
version: '3.8'

services:
  db:
    image: mysql:8
    ports:
      - "3307:3306"
    environment:
      MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
      MYSQL_DATABASE: ${DB_DATABASE}
      MYSQL_USER: ${DB_USERNAME}
      MYSQL_PASSWORD: ${DB_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql
      - ./mysql/init.sql:/docker-entrypoint-initdb.d/init.sql

  app:
    image: snaike7/api_projet_annuel
    ports:
      - "${PORT}:${PORT}"
    env_file:
      - .env
    volumes:
      - ./scripts:/app/scripts
    depends_on:
      - db
    entrypoint: ["/app/scripts/wait-for-it.sh", "db:3306", "--"]

volumes:
  db_data:
```

2. **Démarrer les services avec Docker Compose**

```
docker-compose up
```

Cela démarrera les services définis dans le fichier `docker-compose.yml`, y compris l'API et la base de données MySQL.

## Documentation Swagger

La documentation Swagger est disponible à l'URL suivante une fois le serveur démarré :

```
http://localhost:3000/api-docs
```