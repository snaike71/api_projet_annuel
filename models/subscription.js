module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.ENUM('free', 'standard', 'premium', 'lifetime'),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
    }, {
      tableName: 'subscriptions',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Subscription.associate = function(models) {
      Subscription.hasMany(models.SubscriptionUser, { foreignKey: 'subscription_id' });
    };
  
    return Subscription;
  };
  