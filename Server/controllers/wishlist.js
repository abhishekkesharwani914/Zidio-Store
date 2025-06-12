const Wishlist = require("../models/wishlist");

module.exports.getWishlist = async(req, res) => {
    const {userId} = req.body;
    if (!userId) {
        return res.status(401).json({ message: 'User not authenticated, login again' });
    }
    try{
        // Find the wishlist for the authenticated user
        let wishlist = await Wishlist.findOne({userId}).populate("items");
        if(!wishlist) {
            return res.json({message: "No wishlist found"});
        }
        res.json({success: true, wishlist:wishlist});
    } catch(err) {
        res.json({success: false, message: err.message});
    }
};

module.exports. createWishlist = async(req, res) => {
    const {userId} = req.body;
    const {id} = req.params;
    if (!req.user || !userId) {
        return res.status(401).json({ message: 'User not authenticated, login again' });
    }
    // Ensure productId is provided
    if (!id) {
        return res.status(400).json({ message: 'Item ID is required.' });
    }
    try{
        // Find or create the wishlist for the user
        let wishlist = await Wishlist.findOne({userId});
        if(!wishlist) {
            // If no wishlist exists for the user, create a new one
            wishlist = new Wishlist({userId, item: [{id}] });
        }

        // Check if product already in wishlist
        if(wishlist.items.includes(id)){
            return res.json({ msg: 'Product already in wishlist' });
        }

        // Add product to the wishlist
        wishlist.items.push(id);
        await wishlist.save();

        // Populate and return the updated wishlist
        await wishlist.populate('items');
        res.json({success: true, message: "Added to wishlist", wishlist});
    } catch (err) {
        res.json({success: false, message: err.message, error: err});
    }
};

module.exports.removeFromWishlist = async (req, res) => {
    const {userId} = req.body;
    const {id} = req.params;
    try{
        // Find the wishlist for the user
        let wishlist = await Wishlist.findOne({userId});
        if(!wishlist) {
            return res.json({message: "No wishlist found"});
        }
        // Check if product exists in wishlist
        if(!wishlist.items.includes(id)){
            return res.json({ msg: 'Product not in wishlist' });
        }
        // Remove product from the wishlist
        wishlist.items.pull(id);
        await wishlist.save();
        await wishlist.populate('items');
        res.json({success: true, message: "Removed from wishlist", wishlist: wishlist});
    } catch(err) {
        res.json({success: false, message: err.message});
    }
};