const Items = require('../models/itemModel.js');

//Items List Controller
module.exports.itemsList = async(req, res) => {
    try {
        let items =  await Items.find({}).populate("reviews").populate("seller");
        if (!items) {
            return res.status(404).json({message: "No items found"});
        }
        // Populate the reviews field with the actual review data
        res.json(items);
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
};

//Items Details Controller
module.exports.itemsDetails = async (req, res) => {
    try {
    let {id} = req.params;
    let itemsDetail = await Items.findById(id).populate("reviews").populate("seller");
    if (!itemsDetail) {
        return res.status(404).json({message: "Item not found"});
    }
    res.json(itemsDetail);
    } catch(err) {
        res.json(err);
    }
};

module.exports.addProduct = async(req, res) => {
    try{
        const { userId, product} = req.body;
        const uploadedImages = req.files;
        let imagesPath = uploadedImages.map(images => images.path);
        let newItem = new Items(product);
        newItem.images = imagesPath;
        newItem.seller = userId;
        await newItem.save();
        res.json({success: true, message: "Item added", item: newItem});

    }catch (err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.updateProduct = async(req,res) => {
    try{
        const {product} = req.body;
        const {id} = req.params;
        const item = await Items.findByIdAndUpdate(id, {...product});
        if(typeof req.file !== "undefined"){
            const uploadedImages = req.files;
            let imagesPath = uploadedImages.map(images => images.path);
            item.images = imagesPath;
            await item.save();
        }
        res.json({success: true, message: "Item updated"});
    }catch (err) {
        res.json({success: false, message: err.message});
    }
};

module.exports.deleteProduct = async(req, res) => {
    try{
        const {id} = req.params;
        await Items.findByIdAndDelete(id);
        res.json({success:true, message: "Item Deleted"});
    } catch (err){
        res.json({success: true, message: err.message});
    }
}