const Order = require('../models/orders.js'); // Assuming you have an Order model defined in models/order.js
const User = require('../models/users.js');
const Cart = require('../models/cart.js');
const transporter  = require("../config/nodemailer.js");
const {ORDER_CONFIRM_TEMPLATE} = require("../config/emailTemplate.js");
const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports.stripePayment = async (req,res) => {
    try{

        const { userId, cartId, totalAmount, paymentMethod,itemss } = req.body;
        
        if (!userId || !cartId || !totalAmount || !paymentMethod) {
            return res.json({ success: false, message: 'Missing required fields' });
        }
        
        const user = await User.findById(userId)
        const cart = await Cart.findById(cartId);
        const items = cart.items.map((item) => ({
            itemId: item.itemId,
            quantity: item.quantity,
        }));
        
        const order = new Order({userId, items, totalAmount, paymentMethod});

        const line_items = itemss.map((item) => ({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.itemId.title,
                },
                unit_amount: Math.floor(item.itemId.price) *100, // Stripe uses cents
                
            },
            quantity: item.quantity,
        }));
              
        // Creating Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: `https://localhost:5173/orders`,
            cancel_url: `https://localhost:5173/cart`,
        })

            

            

        //   Saving Order
        await order.save();
        
        user.orders.push(order._id);
        await user.save();
        
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
        if (session.id) {
            res.json({ success: true, id: session.id });
        } else {
            res.json({ success: false, message: 'Failed to create session' });
        }

    } catch (err) {
        res.json({ error: err.message });
    }   
}