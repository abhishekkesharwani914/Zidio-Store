const express = require('express');
const router = express.Router();
const { userAuth } = require('../middleware.js');
const wrapAsync = require("../utils/wrapAsync.js");
const orderController = require("../controllers/orders.js");

router.route("/")
.get(userAuth, wrapAsync(orderController.getOrders)) // Get all orders for the authenticated user
.post(userAuth, wrapAsync(orderController.createOrder)); // Create a new order

module.exports = router;
