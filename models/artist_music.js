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
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'artist_music',
      timestamps: false
    });
  
    return ArtistMusic;
  };
  