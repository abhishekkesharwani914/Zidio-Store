const express = require('express');
const router = express.Router(); // mergeParams is used to merge the parameters of the parent route and the child route and it is used to access the parameters of the parent route in the child route
const wrapAsync = require("../utils/wrapAsync.js");

const itemsController = require('../controllers/items.js'); //Fetching controllers from '../controllers/items.js'

router.get("/", wrapAsync(itemsController.itemsList));
router.get("/:id", wrapAsync(itemsController.itemsDetails));

module.exports = router;