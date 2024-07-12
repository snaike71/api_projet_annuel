module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      role_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      email_verified_at: DataTypes.DATE,
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      remember_token: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'users',
      timestamps: false
    });
  
    User.associate = function(models) {
      User.belongsTo(models.Role, { foreignKey: 'role_id' });
      User.hasMany(models.Playlist, { foreignKey: 'user_id' });
      User.hasMany(models.MusicUser, { foreignKey: 'user_id' });
      User.hasMany(models.SubscriptionUser, { foreignKey: 'user_id' });
    };
  
    return User;
  };
  