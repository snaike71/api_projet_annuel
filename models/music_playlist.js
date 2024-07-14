module.exports = (sequelize, DataTypes) => {
  const MusicPlaylist = sequelize.define('MusicPlaylist', {
    music_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'music',
        key: 'id'
      }
    },
    playlist_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'playlists',
        key: 'id'
      }
    },
  }, {
    tableName: 'music_playlist',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return MusicPlaylist;
};
