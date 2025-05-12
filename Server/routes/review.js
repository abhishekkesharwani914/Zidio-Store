const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview } = require('../middleware.js');

const reviewController = require("../controllers/review.js");

router.post("/",validateReview, wrapAsync(reviewController.postReview));

module.exports = router;