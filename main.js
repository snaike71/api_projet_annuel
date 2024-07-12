require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const albumRoutes = require('./routes/albumRoutes');
const artistRoutes = require('./routes/artistRoutes');
const genreRoutes = require('./routes/genreRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const authRoutes = require('./routes/authRoutes'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);
app.use('/albums', albumRoutes);
app.use('/artists', artistRoutes);
app.use('/genres', genreRoutes);
app.use('/playlists', playlistRoutes);
app.use('/subscriptions', subscriptionRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js and Sequelize project!');
});

// Synchroniser la base de données et démarrer le serveur
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
