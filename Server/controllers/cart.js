
const Cart = require("../models/cart.js");

module.exports.getCart = async (req, res) => {
    try {
        const { userId } = req.body;
        // console.log(userId);
        const carts = await Cart.findOne({ userId }).populate('items.itemId');//
        // console.log(carts, userId, carts.itemId);
        if (!carts) {
            return res.json({success: false, message: 'No carts' });
        }
        // Assuming you want to return the cart items as well
        res.json({success: true, carts: carts} );
      } catch (err) {
        res.json({ message: 'Error fetching carts' });
      }
};

module.exports.addToCart = async (req, res) => {
    try {
        let { userId, itemId, quantity } = req.body;
        let cart = await Cart.findOne({ userId});   
        if(!cart){
          cart = new Cart({userId, items:[{itemId, quantity}]});
          console.log(cart);
        }else {
          const cartIndex = cart.items.findIndex(
            (item) => item.itemId.toString() === itemId 
          );

          if (cartIndex !== -1) {
              cart.items[cartIndex].quantity += Number(quantity);
              // console.log(typeof(quantity),typeof(cart.items[cartIndex].quantity),cart.items[cartIndex].quantity += Number(quantity));
          }else {
              cart.items.push({itemId, quantity,});
          }
        }
        await cart.save();
        res.json({success: true, message: 'Item added to cart'});
    } catch (err) {
        res.json({ message: 'Error creating cart' });
        console.log(err);
    }
};

module.exports.updateCartItem = async (req, res) => {
  try {
      const { userId, itemId, quantity } = req.body;

      // Find the cart for the user
      const cart = await Cart.findOne({ userId });
      if (!cart) {
          return res.status(404).json({ success: false, message: 'Cart not found' });
      }

      // Update the quantity of the item
      const itemIndex = cart.items.findIndex(item => item.itemId.toString() === itemId);
      if (itemIndex !== -1) {
          cart.items[itemIndex].quantity = quantity;
          await cart.save();
          return res.json({ success: true, message: 'Quantity updated' });
      }

      res.status(404).json({ success: false, message: 'Item not found in cart' });
  } catch (err) {
      res.status(500).json({ success: false, message: 'Error updating cart item' });
  }
};

module.exports.removeCartItem = async (req, res) => {
  try {
      const { userId, itemId } = req.body;

      // Find the cart for the user
      const cart = await Cart.findOne({ userId });
      if (!cart) {
          return res.json({ success: false, message: 'No Cart ' });
      }

      // Remove the item from the cart
      cart.items = cart.items.filter(item => item.itemId.toString() !== itemId);
      await cart.save();

      res.json({ success: true, message: 'Item removed from cart' });
  } catch (err) {
      res.status(500).json({ success: false, message: 'Error removing cart item' });
  }
};