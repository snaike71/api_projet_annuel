const { Genre, Music } = require('../models');

class GenreService {
  static async getAllGenres() {
    return Genre.findAll({
      order: [['created_at', 'DESC']]
    });
  }

  static async getGenreById(id) {
    return Genre.findByPk(id);
  }

  static async getMusicByGenreId(id) {
    const genre = await Genre.findByPk(id, {
      include: {
        model: Music,
        through: { attributes: [] }
      }
    });
    if (!genre) {
      throw new Error('Genre not found');
    }
    return genre.Music;
  }
}

module.exports = GenreService;
