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
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'artists',
      timestamps: false
    });
  
    Artist.associate = function(models) {
      Artist.belongsToMany(models.Music, { through: models.ArtistMusic, foreignKey: 'artist_id' });
      Artist.hasMany(models.Album, { foreignKey: 'artist_id' });
    };
  
    return Artist;
  };
  