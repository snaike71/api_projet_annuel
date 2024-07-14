const { Artist, Music } = require('../models');

class ArtistService {
  static async getAllArtists(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const { count, rows } = await Artist.findAndCountAll({
      limit,
      offset,
      order: [['created_at', 'DESC']]
    });
    return { count, rows };
  }

  static async getAllArtistsNoPagination() {
    return Artist.findAll({ order: [['created_at', 'DESC']] });
  }

  static async getArtistById(id) {
    const artist = Artist.findByPk(id);
    if (!artist) {
      throw new Error('Artist not found');
    }
    return artist;
  }

  static async getMusicByArtistId(id) {
    const artist = await Artist.findByPk(id, {
      include: {
        model: Music,
        through: { attributes: [] }
      }
    });
    if (!artist) {
      throw new Error('Artist not found');
    }
    return artist.Music;
  }
}

module.exports = ArtistService;
