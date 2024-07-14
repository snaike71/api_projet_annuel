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
  }, {
    tableName: 'album_music',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return AlbumMusic;
};
