const Items = require("../models/itemModel.js");
const Review = require("../models/review.js");

module.exports.postReview = async(req, res) => {
    try{
    let {id} = req.params;
    let item = await Items.findById(id);
    let newReview = new Review(req.body);
    item.reviews.push(newReview);
    await newReview.save();
    await item.save();
    res.json("review saved");
    } catch (err) {
        console.log(err);
    }
};