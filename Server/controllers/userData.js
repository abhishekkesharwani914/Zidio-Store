const User = require("../models/users.js");
const Cart = require("../models/cart.js");
const Items = require("../models/itemModel.js")
const Order = require("../models/orders.js")

module.exports.getUserData = async (req, res) => {
    try{

        const {userId} = req.body;
        const user = await User.findById(userId);
        const orders = await Order.findOne({userId});

        if(!user) {
            return res.json({success: false, message: "User not found"});
        }

        res.json({
            success: true, 
            userData: user,
            orders: orders
        });

    }catch(err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.updateUser = async (req, res) => {
    try{
        const {userId} = req.body;
        const user = await User.findById(userId);
        if(!user) {
            return res.json({success: false, message: "User not found"});
        }
        const {profilePic, phone, name, userType, shippingInfo} = req.body;
        if(profilePic){
            user.profilePic = profilePic;
        }
        if(phone){
            user.phone = phone;
        }
        if(name){
            user.name = name;
        }
        if(userType){
            user.userType = userType;
        }
        if(shippingInfo){
            user.shippingInfo = shippingInfo;
        }

        user.save();

        res.json({success: true, message: `${user.userName} your profile is updated`});
    } catch (err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await User.findByIdAndDelete(userId);
        if(!user) {
            return res.json({success: false, message: "User not found"});
        }
        res.json({success: true, message: "UserDeleted"});
    } catch{
        res.json({success: false, message: err.message});
    }
};

module.exports.addProduct = async(req, res) => {
    try{
        const {userId, product} = req.body;
        const uploadedImages = req.files;
        let imagesPath = uploadedImages.map(images => images.path);
        let newItem = new Items(product);
        newItem.images = imagesPath;
        newItem.seller = userId;
        await newItem.save();
        res.json({success: true, message: "Item added"});

    }catch (err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.updateProduct = async(req,res) => {
    try{
        const {product} = req.body;
        const {id} = req.params;
        const item = await Items.findByIdAndUpdate(itemId, {...product});
        if(typeof req.file !== "undefined"){
            const uploadedImages = req.files;
            let imagesPath = uploadedImages.map(images => images.path);
            item.images = imagesPath;
            await item.save();
        }
    }catch (err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.deleteProduct = async(req, res) => {
    try{
        const {id} = req.params;
        await Items.findByIdAndDelete(itemId);
        res.json({success:true, message: "Item Deleted"});
    } catch (err){
        res.json({success: true, message: err.message});
    }
}
