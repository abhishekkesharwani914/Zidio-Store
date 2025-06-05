const Items = require("../models/itemModel.js");
const Review = require("../models/review.js");

module.exports.postReview = async(req, res) => {
    try{
        let {id} = req.params;
        let {rating, review, userId} = req.body;

        let item = await Items.findById(id);

        let newReview = new Review({rating: rating, review: review, author: userId});
        item.reviews.push(newReview);

        await newReview.save();
        await item.save();
        res.json({success: true, message: "Review Saved", review: newReview});
    } catch (err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.deleteReview = async(req, res) => {
    try{
        let {id, reviewId} = req.params; // here id is itemID
        await Items.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //here pull operator is used to remove the reviewId from the reviews array
        await Review.findByIdAndDelete(reviewId);
        res.json({success: true, message: "Review Deleted"});
    } catch (err) {
        res.json({success: false, message: err.message});
    }
}