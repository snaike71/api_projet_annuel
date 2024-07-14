module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      tableName: 'artists',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Artist.associate = function(models) {
      Artist.belongsToMany(models.Music, { through: models.ArtistMusic, foreignKey: 'artist_id' });
      Artist.hasMany(models.Album, { foreignKey: 'artist_id' });
    };
  
    return Artist;
  };
  