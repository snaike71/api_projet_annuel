module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('Playlist', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    }, {
      tableName: 'playlists',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Playlist.associate = function(models) {
      Playlist.belongsTo(models.User, { foreignKey: 'user_id' });
      Playlist.hasMany(models.MusicPlaylist, { foreignKey: 'playlist_id' });
    };
  
    return Playlist;
  };
  