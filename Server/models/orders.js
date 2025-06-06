const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: { type:Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      quantity: { type: Number, default: 1 },
    },
  ],
  trackOrderStatus: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  totalAmount: Number,
  paymentMethod: String,
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed','refunded'],
    default: "Pending"
  },
  trackingId: {type: Number, default: Math.floor(Math.random()*10000000000)},
  paymentDetails: {
      paymentIntentId: { type: String }, // Stripe PaymentIntent ID
      checkoutSessionId: { type: String }, // Stripe Checkout Session ID
      methodType: { type: String }, // e.g., 'card', 'upi', 'emi'
      // Add more details like card brand, last 4 digits if needed (from PaymentIntent)
  }, // transaction ID from Stripe/PayPal
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;