module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: DataTypes.BIGINT,
    play_count: DataTypes.BIGINT,
    release_date: DataTypes.DATE,
  }, {
    tableName: 'music',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  Music.associate = function(models) {
    Music.hasMany(models.MusicPlaylist, { foreignKey: 'music_id' });
    Music.hasMany(models.MusicUser, { foreignKey: 'music_id' });
    Music.belongsToMany(models.Genre, { through: models.GenreMusic, foreignKey: 'music_id' });
    Music.belongsToMany(models.Artist, { through: models.ArtistMusic, foreignKey: 'music_id' });
    Music.belongsToMany(models.Album, { through: models.AlbumMusic, foreignKey: 'music_id' });
  };

  return Music;
};
