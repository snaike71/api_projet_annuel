const { Subscription, User, SubscriptionUser } = require('../models');

class SubscriptionService {
  static async getAllSubscriptions() {
    return Subscription.findAll({
      order: [['created_at', 'DESC']]
    });
  }

  static async getSubscriptionById(id) {
    const subscription = await Subscription.findByPk(id);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    return subscription;
  }

  static async subscribeUser(userId, subscriptionId) {
    const user = await User.findByPk(userId);
    let endDate;

    if (!user) {
      throw new Error('User not found');
    }

    const subscription = await Subscription.findByPk(subscriptionId);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    await SubscriptionUser.destroy({
      where: { user_id: userId }
    });

    switch(subscriptionId) {
      case 1:
        endDate = new Date('9999-12-31'); // Abonnement à vie
        break;
      case 2:
      case 3:
        endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1); // Abonnement de 1 mois
        break;
      case 4:
        endDate = new Date('9999-12-31'); // Abonnement à vie
        break;
      default:
        return res.status(400).json({ error: "Invalid subscription ID" });
    }
    await SubscriptionUser.create({
      user_id: userId,
      subscription_id: subscriptionId,
      start_date: new Date(),
      end_date: endDate // ou une date de fin si vous avez une logique de gestion des abonnements avec durée
    });

    return { user, subscription };
  }
}

module.exports = SubscriptionService;
