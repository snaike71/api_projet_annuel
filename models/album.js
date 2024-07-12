module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      references: {
        model: 'artists',
        key: 'id'
      }
    },
    release_date: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    tableName: 'albums',
    timestamps: false
  });

  Album.associate = function(models) {
    Album.belongsTo(models.Artist, { foreignKey: 'artist_id' });
    Album.belongsToMany(models.Music, { through: models.AlbumMusic, foreignKey: 'album_id' });
  };

  return Album;
};
