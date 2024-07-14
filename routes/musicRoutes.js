const express = require('express');
const MusicController = require('../controllers/musicController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');
const router = express.Router();

router.get('/search',authJwt, checkValidationErrors, MusicController.searchMusic);
router.get('/:id',authJwt, checkValidationErrors, MusicController.getMusicById);


module.exports = router;
