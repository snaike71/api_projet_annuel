const { Subscription } = require('../models');

class SubscriptionService {
  static async getAllSubscriptions() {
    return Subscription.findAll({
      order: [['created_at', 'DESC']]
    });
  }

  static async getSubscriptionById(id) {
    return Subscription.findByPk(id);
  }
}

module.exports = SubscriptionService;
