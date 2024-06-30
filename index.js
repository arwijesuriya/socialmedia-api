const express = require("express");
const connectDB = require("./database/db");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// 
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoute);


// Start the server
app.listen(process.env.PORT, () => {
    connectDB();
    console.log("App listening on port 6000");
});