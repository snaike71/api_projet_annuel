const AlbumService = require('../services/albumService');

class AlbumController {
  static async getAllAlbums(req, res) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const { count, rows } = await AlbumService.getAllAlbums(page);
      res.status(200).json({
        total: count,
        page,
        albums: rows
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAlbumById(req, res) {
    try {
      const album = await AlbumService.getAlbumById(req.params.id);
      if (!album) {
        return res.status(404).json({ error: 'Album not found' });
      }
      res.status(200).json(album);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMusicByAlbumId(req, res) {
    try {
      const music = await AlbumService.getMusicByAlbumId(req.params.id);
      console.log(music)
      res.status(200).json(music);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AlbumController;
