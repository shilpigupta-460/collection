import mongoose from "mongoose";
import { config } from 'dotenv';

const connectDB = (url) => {
    // const url = process.env.MONGO_URL;

    mongoose.connect(url, { useNewUrlParser: true })
        .then(() => {

            console.log('conneted to server && database!');
        })

        .catch(err => {
            console.log("Cannot connect to the database!", err);
            // process.exit();
        });
}

// module.export = { db };
export default connectDB;