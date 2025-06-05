const {
  itemSchema,
  reviewSchema,
  cartSchema,
  userSchema,
} = require("./Schema.js");
const ExpressError = require("./utils/expressError.js");
const JWT = require("jsonwebtoken");
const Items = require("./models/itemModel.js");
const Review = require("./models/review.js");

// User Validation Middleware
module.exports.validateUser = (req, res, next) => {
  let { error } = userSchema.validate(req.body);
  if (error) {
    // throw new ExpressError(400, result.error.details.map(el => el.message).join(", "));
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Item Validation Middleware
module.exports.validateItem = (req, res, next) => {
  let { error } = itemSchema.validate(req.body,{ stripUnknown: true }); //{ stripUnknown: true }: When this option is passed to validate(), Joi will remove any keys from the validated object that are not defined in the schema. 
  console.log(error);
  if (error) {
    // throw new ExpressError(400, result.error.details.map(el => el.message).join(", "));
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Is owner or not Middleware
module.exports.isOwner = async (req, res, next) =>{
  let {id} = req.params;
  const item = await Items.findById(id);
  if(item.seller._id.toString() !== req.body.userId){
    return res.json({success: false, message: "You are not owner of this item/product"});
  }
  next();

}

// Review Validation Middleware
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body,{ stripUnknown: true });
  if (error) {
    // throw new ExpressError(400, result.error.details.map(el => el.message).join(", "));
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Review ownew or not
module.exports.isReviewAuthor = async (req, res, next) => {
    let {reviewId} = req.params; 
    let {userId} = req.body;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(userId)) {
        return res.json({success: false, message: "You are not author of this review!"})
    }
    next();
};

// User Authentication Middleware (means isLoggedIn or not)
module.exports.userAuth = async (req, res, next) => {
  if (!req.cookies) {
    return res.json({ success: false, message: "No cookies found" });
  }

  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorised, Login Again" });
  }

  try {
    const tokenDecode = JWT.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
      req.user = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorised, Login Again",
      });
    }

    next();
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
