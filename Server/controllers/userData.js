const User = require("../models/users.js");
const Cart = require("../models/cart.js");

module.exports.getUserData = async (req, res) => {
    try{

        const {userId} = req.body;
        const user = await User.findById(userId);

        if(!user) {
            return res.json({success: false, message: "User not found"});
        }

        res.json({
            success: true, 
            userData: user
        });

    }catch(err) {
        res.json({success: false, message: err.message});
    }
};

