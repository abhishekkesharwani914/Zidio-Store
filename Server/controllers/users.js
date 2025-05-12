const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const User = require("../models/users.js");
const transporter  = require("../config/nodemailer.js");
const {EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE} = require("../config/emailTemplate.js");

// Register User
module.exports.register = async(req, res) => {
    const {userName, email, password} = req.body;

    if(!userName || !email || !password) {
        return res.json({success: "false", message: "Missing Details"});
    }

    try{
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.json({success:false, message: "User already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            userName, email, password:hashedPassword
        });

        await user.save();

        // Generate JWT Token
        const token = JWT.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"}); // token is generated and in JWT we have to pass id, secret, and expire time

        // Store token in cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV==="production",
            sameSite: process.env.NODE_ENV==="production"? "none":"strict",
            expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Sending Welcome Email
        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: email,
            subject: "Welcome to KalaKriti",
            text: `Welcome to KalaKriti Pvt Ltd. Your account has been created with email id: ${email}`
        };

        await transporter.sendMail(mailOptions);

        res.json({success: true});

    } catch(err) {
        res.json({success:"false", message: err.message});
    }
};

// Login User
module.exports.login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.json({sucess: false, message: "Email and Password are required"});
    }

    try{
        const user = await User.findOne({email});
        if(!user) {
            return res.json({sucess: false, message: "Invalid Email"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({sucess: false, message: "Invalid Password"});
        }

        // Generate JWT Token
        const token = JWT.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"}); // token is generated and in JWT we have to pass id, secret, and expire time

        // Store token in cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV==="production",
            sameSite: process.env.NODE_ENV==="production"? "none":"strict",
            expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Store session in MongoDB
        req.session.user = {id:user._id, email: email};

        res.json({success: true});

    }catch(err) {
        res.json({sucess: false, message: err.message});
    }
};

// Logout User
module.exports.logout = async (req, res) =>{
    try{

        // Clear token from cookies
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV==="production",
            sameSite: process.env.NODE_ENV==="production"? "none":"strict",
        });

        // Destroy session in MongoDB
        req.session.destroy((err) => {
            if (err) return res.status(500).json({ message: "Logout failed" });
        });

        // Clear session cookie from the client
        res.clearCookie("connect.sid", {
            httpOnly: true,
            secure: process.env.NODE_ENV==="production",
            sameSite: process.env.NODE_ENV==="production"? "none":"strict",
        });

        res.json({success: true, message: "Logged Out"});

    }catch(err) {
        res.json({sucess: false, message: err.message});
    }
};

// Send Verification OTP to user's Email
module.exports.sendVerifyOtp = async (req, res) => {
    try{
        const {userId} = req.body;
        const user = await User.findById(userId);

        if(user.isAccountVerified) {
            return res.json({success: false, message: "Account is already verified"});
        }

        const otp = String(Math.floor((Math.random() *900000) + 100000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 1000 * 60 * 10;

        await user.save();

        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: user.email,
            subject: "Account Verification OTP",
            // text: `Your OTP is ${otp}. Verify your account using this OTP.  OTP is valid for 10 minutes.`,
            html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        };

        await transporter.sendMail(mailOptions);
        res.json({sucess: true, message: "Verification OTP Sent on Email"});

    }catch(err) {
        res.json({sucess: false, message: err.message});
    }
};

// Email verified or not
module.exports.verifyEmail = async (req, res) => {
    const {userId, otp} = req.body;

    if(!userId || !otp){
        return res.json({success: false, message: "Missing Details"});
    }

    try {

        const user = await User.findById(userId);
        if(!user) {
            return res.json({success: false, message: "User not found"});
        }

        if(user.verifyOtp ==="" || user.verifyOtp !== otp) {
            return res.json({success: false, message: "Invalid Otp"});
        }
        if(user.verifyOtpExpireAt < Date.now()) {
            return res.json({success: false, message: "OTP Expired"});
        }

        user.isAccountVerified = true;
        user.verifyOtp = "";
        user.verifyOtpExpireAt = 0;

        await user.save();
        return res.json({success: true, message: "Email verified successfully"});

    }catch(err) {
        res.json({sucess: false, message: err.message});
    }
};

// Check if user is authenticated or not 
module.exports.isAuthenticated = async (req, res) => {
    try {
        return res.json({success: true});
    }catch (err) {
        res.json({success: false, message: err.message});
    }
}

// Send password reset otp
module.exports.sendResetOtp = async (req, res) => {
    const {email} = req.body;

    if(!email) {
        return res.json({success: false, message: "Email is required"});
    }

    try{

        const user = await User.findOne({email});
        if(!user) {
            return res.json({success: false, message: "User not found"});
        }

        const otp = String(Math.floor((Math.random() *900000) + 100000));
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 1000 * 60 * 15;

        await user.save();

        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: user.email,
            subject: "Password Reset OTP",
            // text: `Your OTP for resetting your password is ${otp}. Use this OTP to proceed with resetting your password. OTP is valid for 15 minutes`
            html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        };

        await transporter.sendMail(mailOptions);
        return res.json({sucess: true, message: "OTP sent to your Email"});
        
    }catch (err) {
       res.json({success: false, message: err.message});
    }
};

// Reset User Password
module.exports.resetPassword = async (req, res) => {
    const {email, otp, newPassword} = req.body;

    if(!email || !otp || !newPassword) {
        return res.json({success: false, message: "Email, OTP, and Password are required"});
    }

    try{
        const user = await User.findOne({email});

        if(!user) {
            return res.json({success: false, message: "User not found"});
        }

        if(user.resetOtp === "" || user.resetOtp !== otp){
            return res.json({success: false, message: "Invalid OTP"});
        } 

        if(user.resetOtpExpireAt < Date.now()){
            return res.json({success: false, message: "OTP Expired"});
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetOtp = "";
        user.resetOtpExpireAt = 0;

        await user.save();
        res.json({success: true, message: "Password has been reset successfully"});

    }catch(err){
        res.json({success: false, message: err.message});
    }
};