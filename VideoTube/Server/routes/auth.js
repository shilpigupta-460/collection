const router = require("express").Router();
const User = require("../modules/User")
const mongoose = require("mongoose");

const Controller = require("../controllers/auth");

// Create user
router.post("/register", Controller.signup);
// Login user
router.post("/login", Controller.login);
// Google Auth
router.post("/goggle", Controller.googleAuth);
module.exports = router;