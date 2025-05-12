const express = require('express');
const router = express.Router({mergeParams: true});// mergeParams is used to merge the parameters of the parent route and the child route and it is used to access the parameters of the parent route in the child route
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview } = require('../middleware.js');

const reviewController = require("../controllers/review.js");

router.post("/",validateReview, wrapAsync(reviewController.postReview));

module.exports = router;