const User = require("../modules/User");
const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
// Create user


const signup = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({

            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            profileImg: req.body.img
        })
        //2nd 
        // const newUser = new User({...req.body, password:hashedPass})
        await newUser.save();
        res.status(200).send("User has been created!");
    }
    catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {


        const user = await User.findOne({ name: req.body.name })
        if (!user) res.status(404).json({ message: "User not found" })
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) res.status(400).json({
            message: "wrong cerdential"
        })

        const token = jwt.sign({ id: user._id }, process.env.JWT)
        const { password, ...others } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200)
            .json(others);
    }
    catch (err) {
        next(err)
    }
}
// Login user

// Google Auth
const googleAuth = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({

            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            profileImg: req.body.img
        })
        await newUser.save();
        res.status(200).send("User has been created!");
    }
    catch (err) {
        res.status(500).json(err);
    }
}
module.exports = { signup, login, googleAuth }

