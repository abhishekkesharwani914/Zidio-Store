const Order = require('../models/orders.js'); // Assuming you have an Order model defined in models/order.js
const User = require('../models/users.js');
const Cart = require('../models/cart.js');
const Items = require('../models/itemModel.js');
const transporter  = require("../config/nodemailer.js");
const {ORDER_CONFIRM_TEMPLATE} = require("../config/emailTemplate.js");
const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports.create_COD_Order = async (req, res) => {
    try {
      const { userId, cartId, totalAmount,paymentMethod } = req.body;

      if (!cartId) {
          return res.status(400).json({ msg: 'Cart is empty.' });
      }
      if (!userId) { // Ensure you're getting this from authenticated user
          return res.status(401).json({ msg: 'User ID is required.' });
      }
      if (!totalAmount) {
        return res.json({ success: false, message: 'Total amount is required' });
      }
      if (!paymentMethod) {
        return res.json({ success: false, message: 'Payment method is required' });
      }

      const user = await User.findById(userId)
      const cart = await Cart.findById(cartId);
      const items = cart.items.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
      }));

      const order = new Order({userId, items, totalAmount, paymentMethod});
      
      // Saving Order
      await order.save();

      // Removing cart after order placing
      await Cart.findByIdAndDelete(cartId);

    // Sending Order Confirmation Email
      const mailOptions = {
        from: process.env.SENDER_MAIL,
        to: user.email,
        subject: "Order Confirmation",
        // text: `Welcome to Thread & Throne Pvt Ltd.`,
        html: ORDER_CONFIRM_TEMPLATE
      };

      await transporter.sendMail(mailOptions);

      res.json({success: true, message: 'Order placed successfully', order });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};

module.exports.create_Card_Upi_order = async(req, res) => {
    try{
      const { userId, cartId, totalAmount, paymentMethod } = req.body;

      if (!cartId) {
          return res.status(400).json({ msg: 'Cart is empty.' });
      }
      if (!userId) { // Ensure you're getting this from authenticated user
          return res.status(401).json({ msg: 'User ID is required.' });
      }
      if (!totalAmount) {
        return res.status(401).json({ success: false, message: 'Total amount is required' });
      }
      if (!paymentMethod) {
        return res.status(401).json({ success: false, message: 'Payment method is required' });
      }

      const cart = await Cart.findById(cartId);
      const lineItems = [];
      const orderItems = [];

      for(const item of cart.items) {
          const product = await Items.findById(item.itemId);
          if(!product) {
              return res.status(404).json({ success: false, message: `Item with ID ${item.itemId} not found.` });
          }
          if (product.stock < item.quantity) {
              return res.status(400).json({ success: false, message: `Insufficient stock for ${product.title}. Available: ${product.stock}, Requested: ${item.quantity}` });
          }

          // Stripe expects amount in the smallest currency unit (e.g., paise for INR)
          lineItems.push({
              price_data: {
                  currency: 'inr', // Set currency here 
                  product_data: {
                      name: product.title,
                      images: [product.images[0]], // Optional: Display product images on Stripe checkout
                      description: product.description.substring(0, 50) + '...', // Short description
                  },
                  unit_amount: product.price * 100,
              },
              quantity: item.quantity,
          });
          totalAmount += product.price * item.quantity;
          orderItems.push({
              itemId: product._id,
              quantity: item.quantity,
          });
      }

      const items = cart.items.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
      }));

      const user = await User.findById(userId);
      const order = new Order({userId, items, totalAmount,paymentMethod});
      await order.save();

      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card', 'upi'], // Add other types like 'paytm', 'afterpay_clearpay', etc., if enabled in Stripe
          line_items: lineItems,
          mode: 'payment',
          success_url: `${process.env.CLIENT_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.CLIENT_URL}/order-failed`,
          metadata: {
              orderId: order._id.toString(), // Pass your order ID to the webhook
              userId: userId.toString(), // Pass userId to webhook if needed
              // You might pass a stringified version of cartItems here if you don't store them directly in the Order model before payment
              // For stock deduction, using `newOrder.items` in the webhook is better as it's already saved.
          },
          customer_email: `${user.email}`, // Optional: pre-fill customer email if known
      });

      res.json({success: true,  id: session.id, url: session.url });

    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
};

// Fulfill the order and deduct stock (called by webhook)
// @access  Internal (via Stripe webhook)
module.exports.fulfillOrder = async (session) => {
    console.log(session);
    try {
        const orderId = session.metadata.orderId;
        const userId = session.metadata.userId; // Get userId from metadata

        if (!orderId) {
            console.error('Missing orderId in session metadata for fulfillment.');
            return;
        }

        const order = await Order.findById(orderId);

        if (!order) {
            console.error(`Order not found for ID: ${orderId}`);
            return;
        }

        if (order.paymentStatus === 'paid') {
            console.log(`Order ${orderId} already fulfilled.`);
            return;
        }

        // 1. Update order status to paid
        order.paymentStatus = 'Paid';
        order.paymentDetails = {
            paymentIntentId: session.payment_intent,
            checkoutSessionId: session.id,
            methodType: session.payment_method_types[0], // e.g., 'card', 'upi'
            // You can fetch more details from PaymentIntent if needed:
            // const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
            // order.paymentDetails.cardBrand = paymentIntent.charges.data[0].payment_method_details.card.brand;
        };
        await order.save();
        console.log(`Order ${orderId} marked as paid for user ${userId}.`);

        // 2. Deduct item stock
        for (const item of order.items) { // Use items from the saved order for accurate stock deduction
            const product = await Items.findById(item.itemId);
            if (product) {
                if (product.stock >= item.quantity) {
                    product.stock -= item.quantity;
                    await product.save();
                    console.log(`Deducted ${item.quantity} from stock for product ${product.name} (ID: ${item.productId})`);
                } else {
                    console.warn(`Insufficient stock for product ${product.name} (ID: ${item.productId}). Requested: ${item.quantity}, Available: ${product.stock}. Order ${orderId} might need manual review.`);
                }
            } else {
                console.warn(`Product with ID ${item.itemId} not found during stock deduction for order ${orderId}.`);
            }
        }

        const user = await User.findById(userId);
        // Sending Order Confirmation Email
        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: user.email,
            subject: "Order Confirmation",
            // text: `Welcome to KalaKriti Pvt Ltd. Your account has been created with email id: ${email}`,
            html: ORDER_CONFIRM_TEMPLATE
        };
                
        await transporter.sendMail(mailOptions);

        console.log('Order fulfillment and stock deduction completed successfully.');
    }catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
};

// Handle payment failures (called by webhook for payment_intent.payment_failed)
// @access  Internal (via Stripe webhook)
exports.handleFailedPayment = async (paymentIntent) => {
    try {
        const orderId = paymentIntent.metadata.orderId; // Assuming you set this metadata
        const userId = paymentIntent.metadata.userId; // Assuming you set this metadata
        if (!orderId) {
            console.error('Missing orderId in paymentIntent metadata for failed payment.');
            return;
        }

        const order = await Order.findById(orderId);
        if (!order) {
            console.log(`Order not found for failed PaymentIntent ID: ${orderId}`);
            return;
        }

        if (order.paymentStatus !== 'Failed') { // Avoid redundant updates
            order.paymentStatus = 'Failed';
            // You might want to store error details from paymentIntent.last_payment_error
            order.paymentDetails.paymentIntentId = paymentIntent.id;
            order.paymentDetails.methodType = paymentIntent.payment_method_types ? paymentIntent.payment_method_types[0] : 'unknown';
            await order.save();
            console.log(`Order ${orderId} marked as failed due to PaymentIntent failure.`);
        }
        
        // Notify user about failed payment, possibly via email
        const user = await User.findById(userId);
        // Sending Order Confirmation Email
        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: user.email,
            subject: "Order Confirmation",
            // text: `Welcome to KalaKriti Pvt Ltd. Your account has been created with email id: ${email}`,
            html: ORDER_CONFIRM_TEMPLATE
        };
                
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error handling failed payment (Webhook):', error);
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
        res.json({success: true,orders:order,contact: {name: user.name,phone: user.phone, emai: user.email}, shippingDetail: user.shippingInfo, });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
}