const SubscriptionService = require('../services/subscriptionService');

class SubscriptionController {
  static async getAllSubscriptions(req, res) {
    try {
      const subscriptions = await SubscriptionService.getAllSubscriptions();
      res.status(200).json(subscriptions);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getSubscriptionById(req, res) {
    try {
      const subscription = await SubscriptionService.getSubscriptionById(req.params.id);
      if (!subscription) {
        return res.status(404).json({ error: 'Subscription not found' });
      }
      res.status(200).json(subscription);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = SubscriptionController;
