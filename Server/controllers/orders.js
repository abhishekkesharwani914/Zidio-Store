const Order = require('../models/orders.js'); // Assuming you have an Order model defined in models/order.js
const User = require('../models/users.js');
const Cart = require('../models/cart.js');
const transporter  = require("../config/nodemailer.js");
const {ORDER_CONFIRM_TEMPLATE} = require("../config/emailTemplate.js");

module.exports.createOrder = async (req, res) => {
    try {
      const { userId, cartId, shippingInfo, totalAmount,paymentMethod } = req.body;

      if (!userId || !cartId || !shippingInfo || !totalAmount || !paymentMethod) {
        return res.json({ success: false, message: 'Missing required fields' });
      }

      const user = await User.findById(userId)
      const cart = await Cart.findById(cartId);
      const items = cart.items.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
      }));

      const order = new Order({userId, items, totalAmount,paymentMethod});
      
      // Saving Order
      await order.save();

      // user.orders.push(order._id);
      // user.shippingInfo.push(shippingInfo);
      // await user.save();

      // Removing cart after order placing
      await Cart.findByIdAndDelete(cartId);

    // Sending Order Confirmation Email
      const mailOptions = {
        from: process.env.SENDER_MAIL,
        to: user.email,
        subject: "Order Confirmation",
        // text: `Welcome to KalaKriti Pvt Ltd. Your account has been created with email id: ${email}`,
        html: ORDER_CONFIRM_TEMPLATE
      };

      await transporter.sendMail(mailOptions);

      res.json({success: true, message: 'Order placed successfully', order });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};

module.exports.getOrders = async (req, res) => {
    const {userId} = req.body;
    try {
        const order = await Order.find({userId}).populate("items.itemId");
        const user = await User.findById(userId);
        if (order.length == 0) {
            return res.json({ success: false, message: 'No orders found' });
        }
        res.json({success: true,orders:order,contact: (user.phone, user.email), shippingDetail: user.shippingInfo, });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
}