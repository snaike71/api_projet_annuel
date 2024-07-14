module.exports = (sequelize, DataTypes) => {
    const ArtistMusic = sequelize.define('ArtistMusic', {
      artist_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'artists',
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
      tableName: 'artist_music',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    return ArtistMusic;
  };
  