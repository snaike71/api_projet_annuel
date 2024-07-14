const express = require('express');
const UserController = require('../controllers/userController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');
const router = express.Router();

router.post('/',authJwt, checkValidationErrors,  UserController.createUser);
router.get('/:id',authJwt, checkValidationErrors,  UserController.getUserById);
router.put('/:id',authJwt, checkValidationErrors,  UserController.updateUser);
router.get('/:id/playlists',authJwt, checkValidationErrors,  UserController.getUserPlaylists);
router.get('/:id/liked-music',authJwt, checkValidationErrors,  UserController.getUserLikedMusic);
router.post('/liked-music',authJwt, checkValidationErrors,  UserController.addUserLikedMusic);
router.delete('/liked-music/:music_id',authJwt, checkValidationErrors,  UserController.removeUserLikedMusic);

module.exports = router;
