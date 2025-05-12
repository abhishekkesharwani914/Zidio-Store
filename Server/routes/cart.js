const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { userAuth, validateCart } = require('../middleware.js');

const cartController = require("../controllers/cart.js");

router.route("/")
.get(userAuth,wrapAsync(cartController.getCart))// Get cart items
.post(userAuth,wrapAsync(cartController.addToCart)); // Add item to cart

router.post('/update', userAuth, wrapAsync(cartController.updateCartItem)); // Update quantity
router.post('/remove', userAuth, wrapAsync(cartController.removeCartItem)); // Remove item

module.exports = router;