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
    }, {
      tableName: 'roles',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Role.associate = function(models) {
      Role.hasMany(models.User, { foreignKey: 'role_id' });
    };
  
    return Role;
  };
  