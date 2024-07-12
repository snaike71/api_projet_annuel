const GenreService = require('../services/genreService');

class GenreController {
  static async getAllGenres(req, res) {
    try {
      const genres = await GenreService.getAllGenres();
      res.status(200).json(genres);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getGenreById(req, res) {
    try {
      const genre = await GenreService.getGenreById(req.params.id);
      if (!genre) {
        return res.status(404).json({ error: 'Genre not found' });
      }
      res.status(200).json(genre);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMusicByGenreId(req, res) {
    try {
      const music = await GenreService.getMusicByGenreId(req.params.id);
      res.status(200).json(music);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = GenreController;
