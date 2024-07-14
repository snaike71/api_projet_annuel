const { Album, Music, AlbumMusic } = require('../models');

class AlbumService {
  static async getAllAlbums(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const { count, rows } = await Album.findAndCountAll({
      limit,
      offset,
      order: [['created_at', 'DESC']]
    });
    return { count, rows };
  }

  static async getAlbumById(id) {
    const album = Album.findByPk(id);
    if (!album) {
      throw new Error('Album not found');
    }
    return album;
  }

  static async getMusicByAlbumId(id) {
    const album = await Album.findByPk(id, {
      include: {
        model: Music,
        through: { attributes: [] }
      }
    });
    if (!album) {
      throw new Error('Album not found');
    }
    return album.Music;
  }
}

module.exports = AlbumService;
