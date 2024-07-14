module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING,
    }, {
      tableName: 'genres',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Genre.associate = function(models) {
      Genre.belongsToMany(models.Music, { through: models.GenreMusic, foreignKey: 'genre_id' });
    };
  
    return Genre;
  };
  