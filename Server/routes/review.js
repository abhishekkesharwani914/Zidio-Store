const express = require('express');
const router = express.Router({mergeParams: true});// mergeParams is used to merge the parameters of the parent route and the child route and it is used to access the parameters of the parent route in the child route
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, userAuth, isReviewAuthor } = require('../middleware.js');

const reviewController = require("../controllers/review.js");

router.post("/",userAuth, validateReview, wrapAsync(reviewController.postReview));
router.delete("/:reviewId",userAuth, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;