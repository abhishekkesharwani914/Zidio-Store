const express = require("express");
const router = express.Router();
const { userAuth } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const wishlistController = require("../controllers/wishlist.js");

router.post("/", userAuth, wrapAsync(wishlistController.getWishlist)); // Getting all wishlist
router
  .route("/:id") //Here id is item id not user id                // Add and Delete items from wishlist
  .post(userAuth, wrapAsync(wishlistController.createWishlist))
  .delete(userAuth, wrapAsync(wishlistController.removeFromWishlist));

module.exports = router;
