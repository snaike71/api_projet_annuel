module.exports = (sequelize, DataTypes) => {
    const GenreMusic = sequelize.define('GenreMusic', {
      genre_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'genres',
          key: 'id'
        }
      },
      music_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'music',
          key: 'id'
        }
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'genre_music',
      timestamps: false
    });
  
    return GenreMusic;
  };
  