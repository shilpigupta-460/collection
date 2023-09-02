const router = require("express").Router();
const User = require("../modules/User")
const mongoose = require("mongoose");
const { verifyToken } = require("../verifyToken")
const Controller = require("../controllers/video");


router.post("/", verifyToken, Controller.addV);
router.get("/find/:id", Controller.getV);
router.put("/:id", verifyToken, Controller.updateV);
router.delete("/:id", verifyToken, Controller.deleteV);
router.put("/views/:id", Controller.addView)
router.get("/trends", Controller.trend)
router.get("/random", Controller.random)
router.get("/tags", Controller.getByTag)
router.get("/search", Controller.search)
router.get("/like/:videoId", verifyToken, Controller.likeV)
router.get("/dislike/:videoId", verifyToken, Controller.dislikeV)
router.get("/subChannels", verifyToken, Controller.subChannels);

module.exports = router;