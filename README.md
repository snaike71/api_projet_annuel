

API Projet Annuel
Description
API Projet Annuel is a backend project designed to provide essential functionalities for your application. This project uses Node.js, Express, Sequelize, and MySQL for database management, along with JWT for authentication.

Table of Contents
Installation
Usage
Environment Variables
Scripts
Dependencies
DevDependencies
Docker
Installation
To get started with this project, clone the repository and install the necessary dependencies.

```sh
git clone https://github.com/your-repo/api_projet_annuel.git
cd api_projet_annuel
npm install
```

Usage
You can start the server in production mode or in development mode. In development mode, the server will automatically restart on file changes.

```sh

Start the server
npm start

Start the server in development mode
npm run dev
```

Environment Variables
To run this project, you will need to add the following environment variables to your .env file. You can use the provided .env.template as a starting point.

```sh
NODE_ENV=production
PORT=3000

Database configuration
DB_USERNAME=root
DB_PASSWORD=root_password
DB_DATABASE=test
DB_HOST=db
DB_PORT=3306
DB_DIALECT=mysql

JWT Secret
SECRET_API_KEY=your_secret_key

Control wait-for-it script usage
WAIT_FOR_DB=true
```

Scripts
start: Runs the server using node server.js.
dev: Runs the server in development mode using nodemon.
Dependencies
async-retry: ^1.3.3
bcrypt: ^5.1.1
dotenv: ^16.4.5
express: ^4.19.2
express-validator: ^7.1.0
jsonwebtoken: ^9.0.2
mysql2: ^3.10.2
sequelize: ^6.37.3
sequelize-cli: ^6.6.2
swagger-jsdoc: ^6.2.8
swagger-ui-express: ^5.0.1
DevDependencies
nodemon: ^3.1.4
Docker
To run the application with Docker, you will need to create a docker-compose.yml file. Here is an example configuration:

```yaml
version: '3.8'

services:
db:
image: mysql
environment:
MYSQL_ROOT_PASSWORD: root_password
MYSQL_DATABASE: test
ports:
- "3306:3306"
volumes:
- db_data:/var/lib/mysql

app:
build: .
ports:
- "3000:3000"
depends_on:
- db
environment:
NODE_ENV: production
PORT: 3000
DB_USERNAME: root
DB_PASSWORD: root_password
DB_DATABASE: test
DB_HOST: db
DB_PORT: 3306
DB_DIALECT: mysql
SECRET_API_KEY: your_secret_key
WAIT_FOR_DB: true

volumes:
db_data:
```

To start the application with Docker, run:

```sh
docker-compose up --build
```

This will build the Docker images and start the services defined in the docker-compose.yml file.
