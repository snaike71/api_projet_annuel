module.exports = (sequelize, DataTypes) => {
    const SubscriptionUser = sequelize.define('SubscriptionUser', {
      subscription_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'subscriptions',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    }, {
      tableName: 'subscription_user',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    return SubscriptionUser;
  };
  