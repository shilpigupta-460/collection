const router = require("express").Router();
const User = require("../modules/User")
const mongoose = require("mongoose");
const { verifyToken } = require("../verifyToken")


const Controller = require("../controllers/comment");


router.post("/", verifyToken, Controller.createCom);
router.delete("/:id", verifyToken, Controller.deleteCom);
router.get("/:videoId", Controller.getCom);

module.exports = router;