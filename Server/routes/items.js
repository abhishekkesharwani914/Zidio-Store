const express = require('express');
const router = express.Router(); 
const wrapAsync = require("../utils/wrapAsync.js");

const itemsController = require('../controllers/items.js'); //Fetching controllers from '../controllers/items.js'

router.get("/", wrapAsync(itemsController.itemsList));
router.get("/:id", wrapAsync(itemsController.itemsDetails));

module.exports = router;