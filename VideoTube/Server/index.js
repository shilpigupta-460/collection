const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser")
// const userRoute = require("./modules/User.js")
const authRoute = require("./routes/auth")
const videoRoute = require("./routes/video")
const commentRoute = require("./routes/comment")
const userRoutes = require("./routes/user")
const bodyParser = require("body-parser");

const PORT = 8080;
dotenv.config({ path: __dirname + '/.env' });
const app = express()
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// app.get("/api", (req, res) => {
//     res.json("hello");
// })
// app.get("/api/auth", (req, res) => {
//     res.json("ji");
// })
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || " somthing wrong"
    return res.status(status).json({
        success: false,
        message,
        status
    })
})
app.use("/api/auth", authRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log("conneted to server");
})

