module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'roles',
      timestamps: false
    });
  
    Role.associate = function(models) {
      Role.hasMany(models.User, { foreignKey: 'role_id' });
    };
  
    return Role;
  };
  