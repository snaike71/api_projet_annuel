const express = require('express');
const GenreController = require('../controllers/genreController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');

const router = express.Router();

router.get('/',authJwt, checkValidationErrors, GenreController.getAllGenres);
router.get('/:id',authJwt, checkValidationErrors, GenreController.getGenreById);
router.get('/:id/music',authJwt, checkValidationErrors, GenreController.getMusicByGenreId);

module.exports = router;
