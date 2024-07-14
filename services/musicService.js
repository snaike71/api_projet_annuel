const { Music, Genre, Artist, Album } = require('../models');
const {Op} = require("sequelize")
 class MusicService {
  static async searchMusic(criteria) {
    const where = {};
    console.log(criteria);
    
    if (criteria.title) {
      where.title = { [Op.like]: `%${criteria.title}%` };
    }

    const include = [
      {
        model: Genre,
        attributes: ['name'],
        through: { attributes: [] }
      },
      {
        model: Artist,
        attributes: ['name'],
        through: { attributes: [] }
      },
      {
        model: Album,
        attributes: ['title'],
        through: { attributes: [] }
      }
    ];

    if (criteria.genre) {
      include[0].where = { name: { [Op.like]: `%${criteria.genre}%` } };
    }

    if (criteria.artist) {
      include[1].where = { name: { [Op.like]: `%${criteria.artist}%` } };
    }

    if (criteria.album) {
      include[2].where = { title: { [Op.like]: `%${criteria.album}%` } };
    }

    const results = await Music.findAll({
      where,
      include
    });

    return results;
  }
  static async getMusicById(id) {
    const music = Music.findByPk(id);
    if (!music) {
      throw new Error('Music not found');
    }
    return music;
  }

}

module.exports = MusicService;
