const express = require('express');
const ArtistController = require('../controllers/artistController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');

const router = express.Router();

router.get('/', authJwt, checkValidationErrors,ArtistController.getAllArtists);
router.get('/all', authJwt, checkValidationErrors,ArtistController.getAllArtistsNoPagination);
router.get('/:id', authJwt, checkValidationErrors,ArtistController.getArtistById);
router.get('/:id/music', authJwt, checkValidationErrors,ArtistController.getMusicByArtistId);

module.exports = router;
