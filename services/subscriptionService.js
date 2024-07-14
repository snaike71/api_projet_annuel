const { Subscription } = require('../models');

class SubscriptionService {
  static async getAllSubscriptions() {
    return Subscription.findAll({
      order: [['created_at', 'DESC']]
    });
  }

  static async getSubscriptionById(id) {
    const subscription = Subscription.findByPk(id);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    return subscription;
  }
}

module.exports = SubscriptionService;
