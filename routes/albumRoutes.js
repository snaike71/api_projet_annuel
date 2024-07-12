const express = require('express');
const AlbumController = require('../controllers/albumController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');

const router = express.Router();

router.get('/', authJwt, checkValidationErrors, AlbumController.getAllAlbums);
router.get('/:id', authJwt, checkValidationErrors,AlbumController.getAlbumById);
router.get('/:id/music', authJwt, checkValidationErrors,AlbumController.getMusicByAlbumId);

module.exports = router;





