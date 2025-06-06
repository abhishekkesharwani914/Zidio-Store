const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const orderController = require('../controllers/orders.js');

module.exports.webhookControl = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.WEBHOOK_SECRET);
        console.log(`Received Stripe event: ${event.type}`);
    } catch (err) {
        console.error('Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            // A session can become 'completed' even if payment is not guaranteed yet (e.g., for async payments)
            // It's generally better to check session.payment_status === 'paid' or listen to payment_intent.succeeded
            if (session.payment_status === 'paid') {
                console.log(`Checkout session completed and paid: ${session.id}`);
                await orderController.fulfillOrder(session);
            } else {
                console.log(`Checkout session completed, but payment status is ${session.payment_status}: ${session.id}`);
                // Handle cases where payment might be pending or require action
            }
            break;

        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent successful: ${paymentIntent.id}`);
            // If you are using Stripe Checkout, the `checkout.session.completed` event
            // is usually sufficient. Use this if you have custom Payment Intents or need
            // to fulfill on a more granular level. Ensure no duplicate fulfillment.
            // You'll need to retrieve the Checkout Session from the PaymentIntent if needed
            // const relatedSession = await stripe.checkout.sessions.list({ payment_intent: paymentIntent.id });
            // if (relatedSession.data.length > 0) {
            //     await orderController.fulfillOrder(relatedSession.data[0]);
            // }
            break;

        case 'payment_intent.payment_failed':
            const failedPaymentIntent = event.data.object;
            console.log(`PaymentIntent failed: ${failedPaymentIntent.id}, Reason: ${failedPaymentIntent.last_payment_error?.message}`);
            await orderController.handleFailedPayment(failedPaymentIntent);
            break;

        // Add more event types you want to handle, e.g., 'charge.refunded', 'customer.*'
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
}