const Joi = require('joi');

module.exports.itemSchema = Joi.object({
    
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
    specifications: Joi.object({
        material: Joi.string().allow("",  null),
        color: Joi.string().allow("",  null),
        weight: Joi.string().allow("",  null),
    }),
    category: Joi.string().required(),
    country: Joi.string().required(),
    image_url: Joi.string().allow("", null),
    
});

module.exports.reviewSchema = Joi.object({
    review: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
})

// module.exports.cartSchema = Joi.object({
//     userId: Joi.string().required(),
//     items: Joi.object({
//         itemId: Joi.string().required(),
//         quantity: Joi.number().required().min(1),
//     }).required(),
// });