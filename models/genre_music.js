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
    }, {
      tableName: 'genre_music',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    return GenreMusic;
  };
  