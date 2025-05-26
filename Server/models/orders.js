const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: { type:Schema.Types.ObjectId, ref: 'User', required: true },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      quantity: { type: Number, default: 1 },
    },
  ],
  track: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled']
  },
  totalAmount: Number,
  paymentMethod: String,
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed']
  },
  paymentId: String, // transaction ID from Stripe/PayPal
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;