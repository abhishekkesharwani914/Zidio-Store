if ( process.env.NODE_ENV !== "production" ) {
    require("dotenv").config(); 
}

// Required modules or npm packages
const express = require("express");
const app = express();
const cors = require("cors");
const ExpressError = require("./utils/expressError.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const main = require("./config/mongodb.js");

const corsOptions = {
    origin: 'https://localhost:3000', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If your frontend needs to send cookies or authorization headers
};

// Fetching Routes 
const userRoute = require("./routes/users.js");
const cartRoute = require("./routes/cart.js");
const userDataRoute = require("./routes/userData.js");
const itemsRoute = require("./routes/items.js");
const reviewRoute = require("./routes/review.js");

// Connection with Database
main();

// Use of require module or npm packages
app.use(cors(corsOptions)); // CORS is used to allow cross-origin requests and it is used to allow the frontend to access the backend API
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(cookieParser());

// Middleware for session management
const store = MongoStore.create({ // MongoStore is used to store the session data in the MongoDB Atlas (which is a cloud database) and it is used to store the session data in the database
    mongoUrl: process.env.MONGO_URL, // here we are using the MongoDB Atlas URL to store the session data in the database
    collectionName: "sessions",
    crypto: { // crypto is used to encrypt the session data and it is used to store the session data in the encrypted form
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600, // time period in seconds and it is used to update the session data after the time period
});
const sessionOptions = {
    store: store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        http: true,
        secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS in production
        sameSite: process.env.NODE_ENV==="production"? "none":"strict",
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 day
    }
};
app.use(session(sessionOptions));

app.use("/user/auth", userRoute);
app.use("/user", userDataRoute);
app.use("/cart", cartRoute);
app.use("/items/:id/reviews", reviewRoute);
app.use("/shop", itemsRoute);

// Error Handling Route
// app.use("*", (req, res, next) => {
//     res.status(404).json({success: false, message: "Route Not Found"});
// });

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});