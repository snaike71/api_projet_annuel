const express = require('express');
const SubscriptionController = require('../controllers/subscriptionController');
const { authJwt } = require('../middleware/auth');
const { checkValidationErrors } = require('../middleware/validators');
const router = express.Router();

router.get('/',authJwt, checkValidationErrors, SubscriptionController.getAllSubscriptions);
router.get('/:id',authJwt, checkValidationErrors, SubscriptionController.getSubscriptionById);

module.exports = router;
