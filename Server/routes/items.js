const express = require('express');
const router = express.Router(); 
const wrapAsync = require("../utils/wrapAsync.js");
const {userAuth, isOwner, validateItem} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const itemsController = require('../controllers/items.js'); //Fetching controllers from '../controllers/items.js'

router.get("/", wrapAsync(itemsController.itemsList));
router.post("/add-product",userAuth,upload.array('images',5),validateItem, wrapAsync(itemsController.addProduct));
router.get("/:id", wrapAsync(itemsController.itemsDetails));
router.put("/:id/update-product",userAuth,isOwner,upload.array('images',5),wrapAsync(itemsController.updateProduct));
router.delete("/:id/delete-product", userAuth,isOwner, wrapAsync(itemsController.deleteProduct));

module.exports = router;