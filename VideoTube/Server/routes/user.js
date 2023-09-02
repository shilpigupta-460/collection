const User = require("../modules/User");
const router = require("express").Router();
const Controller = require("../controllers/user");
const { verifyToken } = require("../verifyToken")
// update user
router.put("/update/:id", verifyToken, Controller.updateUser);
//delete user
router.delete("/:id", verifyToken, Controller.deleteUser);
//get a user
router.get("/find/:id", Controller.getUser);
router.put("/sub/:id", verifyToken, Controller.subscribe);
router.put("/unsub/:id", verifyToken, Controller.unsubscribe);
router.put("/unsub/:videoId", verifyToken, Controller.like);
router.put("/unsub/:videoId", verifyToken, Controller.dislike);
//subscribe a user
//unsubscribe a user
// like video
// dislike video

module.exports = router;