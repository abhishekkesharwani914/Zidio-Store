const Items = require('../models/itemModel.js');

//Items List Controller
module.exports.itemsList = async(req, res) => {
    try {
        let items =  await Items.find({});
        if (!items) {
            return res.status(404).json({message: "No items found"});
        }
        // Populate the reviews field with the actual review data
        res.json(items);
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
};

//Items Details Controller
module.exports.itemsDetails = async (req, res) => {
    try {
    let {id} = req.params;
    let itemsDetail = await Items.findById(id).populate("reviews");
    res.json(itemsDetail);
    } catch(err) {
        res.json(err);
    }
};