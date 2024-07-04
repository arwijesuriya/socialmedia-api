const express = require("express");
const connectDB = require("./database/db");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const { errorHandler } = require("./middlewares/error");

// 
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(errorHandler);

// routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("api/post", postRoute);
app.use("/api/comment", commentRoute);


// Start the server
app.listen(process.env.PORT, () => {
    connectDB();
    console.log("App listening on port 6000");
});