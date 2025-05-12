const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    items: [
        {
            itemId: {
                type: Schema.Types.ObjectId,
                ref: 'Item',
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
})

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;