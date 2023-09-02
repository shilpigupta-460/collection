import express from "express";
import { getAllUsers, addUser, updateUser, delUser } from "../controllers/user.js";


const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/signup", addUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", delUser)
export default userRouter;