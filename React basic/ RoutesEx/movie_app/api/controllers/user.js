import user from "../models/user.js";
import User from "../models/user.js";
import bycrpt from 'bcrypt'
export const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find()

    }
    catch (err) {
        return console.log(err);
    }
    if (!users) {
        return res.status(500).json("Message : internal error")
    }

    // console.log(other);

    return res.status(200).json({ users })

}
export const addUser = async (req, res) => {
    const { name, email, password } = req.body
    let newUser
    const hashedPass = bycrpt.hashSync(password, 10)
    if (!name && name.trim() === ''
        && !email && email.trim() === ""
        && !password && password.trim() === "") { return res.status(422).json({ message: "invalid data" }) }
    try {

        const user = new User({ name, email, password: hashedPass })
        newUser = await user.save()
    }
    catch (err) {
        return console.log(err);
    }
    if (!newUser) {
        return res.status(500).json("Message : internal  server error")
    }

    return res.status(200).json({ newUser })

}

export const updateUser = async (req, res) => {
    const { id } = req.params
    console.log(id);
    const { name, email, password } = req.body
    const hashedPass = bycrpt.hashSync(password, 10)
    let upUser;

    if (!id) { return res.status(422).json({ message: "invalid id" }) }
    try {

        await User.findByIdAndUpdate(id, { name, email, password: hashedPass })

        return res.status(200).json({ message: " user upadated" })
    }
    catch (err) {
        return console.log(err);
    }


}
export const delUser = async (req, res) => {
    const { id } = req.params
    // console.log(id);
    // const { name, email, password } = req.body
    // const hashedPass = bycrpt.hashSync(password, 10)
    let delUser;

    if (!id) { return res.status(422).json({ message: "invalid id" }) }
    try {

        await User.findByIdAndDelete(id)

        return res.status(200).json({ message: " user delete" })
    }
    catch (err) {
        return console.log(err);
    }


}