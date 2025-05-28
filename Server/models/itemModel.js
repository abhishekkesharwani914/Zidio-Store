const { required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const Review = require("../models/review.js");

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specifications: {
        fabric: {
            type: String
        },
        sleeveLength: {
            type: String
        },
        pattern: {
            type: String
        },
        fit: {
            type: String
        },
        neck: {
            type: String
        },
        origin: {
            type: String
        }
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    sizes: [
        {
            type: String,
            required: true
        }
    ],
    images: [
        {
            type: String,
            required: true
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    stock: {
        type: Number,
        required: true
    }
}, {timestamps: true});

itemSchema.post("findOneAndDelete", async(Items) => {
    if(Items) {
        await Review.deleteMany({_id: {$in: Items.reviews}});
    }
} );

const Items = mongoose.model("Item", itemSchema);
module.exports = Items;