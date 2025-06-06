const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhook.js');
const wrapAsync = require('../utils/wrapAsync.js');
const bodyParser = require('body-parser'); // Needed for raw body parsing

// @description-    Stripe Webhook Listener
// @access-  Public (but secured by Stripe signature verification)
router.post("/",  bodyParser.raw({ type: 'application/json' }), wrapAsync(webhookController.webhookControl));

module.exports = router;