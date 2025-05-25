const {itemSchema, reviewSchema,cartSchema,userSchema} = require("./Schema.js");
const ExpressError = require("./utils/expressError.js");
const JWT = require("jsonwebtoken");

// User Validation Middleware
module.exports.validateUser = (req, res, next) => {
    let {error} = userSchema.validate(req.body);
    if(error) {
        // throw new ExpressError(400, result.error.details.map(el => el.message).join(", "));
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Item Validation Middleware
module.exports.validateItem = (req, res, next) => {
    let {error} = itemSchema.validate(req.body);
    if(error) {
        // throw new ExpressError(400, result.error.details.map(el => el.message).join(", "));
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Review Validation Middleware
module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        // throw new ExpressError(400, result.error.details.map(el => el.message).join(", "));
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// User Authentication Middleware (means isLoggedIn or not)
module.exports.userAuth = async (req, res, next) => {
    if (!req.cookies) {
        return res.json({ success: false, message: "No cookies found" });
    }

    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message: "Not Authorised, Login Again"});
    }

    try{
        const tokenDecode = JWT.verify(token, process.env.JWT_SECRET);
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
            req.user = tokenDecode
        }else{
            return res.json({success: false,message: "Not Authorised, Login Again"});
        }

        next();

    }catch(err) {
        return res.json({success: false, message: err.message});
    }
};
