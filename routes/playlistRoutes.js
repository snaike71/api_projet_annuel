// routes/playlistRoutes.js
const express = require('express');
const PlaylistController = require('../controllers/playlistController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');

const router = express.Router();

router.get('/',authJwt, checkValidationErrors, PlaylistController.getAllPlaylists);
router.get('/:id',authJwt, checkValidationErrors, PlaylistController.getPlaylistById);
router.post('/',authJwt, checkValidationErrors, PlaylistController.createPlaylist);
router.put('/:id',authJwt, checkValidationErrors, PlaylistController.updatePlaylist);
router.delete('/:id',authJwt, checkValidationErrors, PlaylistController.deletePlaylist);
router.post('/:id/music',authJwt, checkValidationErrors, PlaylistController.addMusicToPlaylist);
router.delete('/:id/music/:music_id',authJwt, checkValidationErrors, PlaylistController.removeMusicFromPlaylist);

module.exports = router;
