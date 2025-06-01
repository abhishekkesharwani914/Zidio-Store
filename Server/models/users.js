const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    phone: {
        type:Number,
    },
    name: {
      type:String,
    },
    verifyOtp: {
      type: String,
      default: "",
    },
    verifyOtpExpireAt: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String,
      default: "",
    },
    resetOtpExpireAt: {
      type: String,
      default: 0,
    },
    userType: {
        type:String,
        enum: ["customer", "seller"],
    },
    shippingInfo: { // Address
      address: String,
      city: String,
      postalCode: {type: Number, minlength: 6, maxlength: 6},
      country: String
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
