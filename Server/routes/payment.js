const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { userAuth } = require('../middleware.js');

const paymentController = require("../controllers/payment.js");

router.route("/stripe")
.post(userAuth, wrapAsync(paymentController.stripePayment)); // Create a new order


module.exports = router;