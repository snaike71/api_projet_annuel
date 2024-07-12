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
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    tableName: 'music_playlist',
    timestamps: false
  });

  return MusicPlaylist;
};
