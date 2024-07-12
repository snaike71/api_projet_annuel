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
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'subscriptions',
      timestamps: false
    });
  
    Subscription.associate = function(models) {
      Subscription.hasMany(models.SubscriptionUser, { foreignKey: 'subscription_id' });
    };
  
    return Subscription;
  };
  