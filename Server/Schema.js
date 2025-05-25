const Joi = require("joi");

module.exports.userSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  profilePic: Joi.string().allow("", null),
  phone: Joi.string().allow("", null),
  address: Joi.string().allow("", null),
  userType: Joi.string().valid("customer", "seller").required(),
});

module.exports.itemSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required().min(0),
  description: Joi.string().required(),
  specifications: Joi.object({
    fabric: Joi.string().allow("", null),
    sleeveLength: Joi.string().allow("", null),
    pattern: Joi.string().allow("", null),
    fit: Joi.string().allow("", null),
    neck: Joi.string().allow("", null),
    origin: Joi.string().allow("", null),
  }).required(),
  discount: Joi.number().allow("", null).min(0).max(100),
  category: Joi.string().required(),
  sizes: Joi.array().items(Joi.string()).required(),
  images: Joi.array().items(Joi.string()).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.string().required(),
  rating: Joi.number().required().min(1).max(5),
});

// module.exports.orderSchema = Joi.object({
//     items: Joi.array().items(
//         Joi.object({
//             itemId: Joi.string().required(),
//             quantity: Joi.number().required().min(1)
//         })
//     ).required(),
//     totalAmount: Joi.number().required().min(0),
//     shippingAddress: Joi.string().required(),
//     paymentMethod: Joi.string().valid('creditCard', 'paypal', 'bankTransfer').required(),
// });
