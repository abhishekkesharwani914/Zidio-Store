const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const userData = require("../controllers/userData.js");
const { userAuth, validateItem, isOwner } = require('../middleware.js');
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/data", userAuth, wrapAsync(userData.getUserData));
router.put("/", userAuth, wrapAsync(userData.updateUser));
router.delete("/delete-user", userAuth, wrapAsync(userData.deleteUser));
router.post("/add-product",userAuth,upload.array('images',5),validateItem, wrapAsync(userData.addProduct));
router.put("/:id/update-product",userAuth,isOwner,upload.array('images',5),wrapAsync(userData.updateProduct));
router.delete("/:id/delete-product", userAuth,isOwner, wrapAsync(userData.deleteProduct))

module.exports = router;