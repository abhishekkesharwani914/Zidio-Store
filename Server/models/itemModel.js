const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    specifications: {
        dimentions: {
            type: String
        },
        material: {
            type: String
        },
        color: {
            type: String
        },
        weight: {
            type: String
        },
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        // default: "https://plus.unsplash.com/premium_vector-1736805077800-e23e077da330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthbGFrcml0aSUyMGZ1cm5pdHVyZSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
        set: (v) => 
            v === "" ? "https://plus.unsplash.com/premium_vector-1736805077800-e23e077da330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthbGFrcml0aSUyMGZ1cm5pdHVyZSUyMGxvZ298ZW58MHx8MHx8fDA%3D" : v,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

const Items = mongoose.model("Item", itemSchema);
module.exports = Items;