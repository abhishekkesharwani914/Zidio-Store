const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {getUserData} = require("../controllers/userData.js");
const { userAuth } = require('../middleware.js');

router.get("/data", userAuth, wrapAsync(getUserData));

module.exports = router;