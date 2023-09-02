import express, { json } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import userRouter from './routes/user.js';




//const cookieParser = require('cookie-parser')
config()

const PORT = 8080;
const app = express()
const url = process.env.MONGO_URL
connectDB(url)

// config({ path: __dirname + '/.env' });
app.use(cors())
app.use(json());
//app.use(cookieParser())
//app.use(bodyParser.json())
app.use("/users", userRouter)

// mongoose.connect(url, { useNewUrlParser: true })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log('conneted to server && database!');
//         })
//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         // process.exit();
//     });
app.listen(PORT, () => {
    console.log('conneted to server');
})