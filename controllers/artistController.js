const ArtistService = require('../services/artistService');

class ArtistController {
  static async getAllArtists(req, res) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const { count, rows } = await ArtistService.getAllArtists(page);
      res.status(200).json({
        total: count,
        page,
        artists: rows
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllArtistsNoPagination(req, res) {
    try {
      const artists = await ArtistService.getAllArtistsNoPagination();
      res.status(200).json(artists);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getArtistById(req, res) {
    try {
      const artist = await ArtistService.getArtistById(req.params.id);
      if (!artist) {
        return res.status(404).json({ error: 'Artist not found' });
      }
      res.status(200).json(artist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMusicByArtistId(req, res) {
    try {
      const music = await ArtistService.getMusicByArtistId(req.params.id);
      res.status(200).json(music);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ArtistController;
