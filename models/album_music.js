module.exports = (sequelize, DataTypes) => {
  const AlbumMusic = sequelize.define('AlbumMusic', {
    album_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      references: {
        model: 'albums',
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
    tableName: 'album_music',
    timestamps: false
  });

  return AlbumMusic;
};
