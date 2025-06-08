const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const userData = require("../controllers/userData.js");
const { userAuth } = require("../middleware.js");

router.post("/data", userAuth, wrapAsync(userData.getUserData));
router.put("/update", userAuth, wrapAsync(userData.updateUser));
router.delete("/delete", userAuth, wrapAsync(userData.deleteUser));

module.exports = router;
