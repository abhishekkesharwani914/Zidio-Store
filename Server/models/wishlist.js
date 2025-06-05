const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model("Wishlist", wishlistSchema);