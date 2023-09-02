const User = require("../modules/User");
const Video = require("../modules/Video")
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    }
    catch (err) {
        next(err)
    }
}
const deleteUser = async (req, res, next) => {
    //console.log(req.params.id);
    if (req.params.id === req.user.id) {
        try {
            const user = await User.findOneAndDelete(req.params.id)

            res.status(200).json(" user delete");
        }
        catch (err) {
            next(err)
        }
    } else { return res.status(403).json("You cann't delete only your account!") }
}
const updateUser = async (req, res, next) => {
    console.log(req.user.id);
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body },
                { new: true }
            )

            res.status(200).json(updatedUser);
        }
        catch (err) {
            next(err)
        }
    }
    else { return res.status(403).json("You can update only your account!") }

}
const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id },
        })
        await User.findByIdAndUpdate(req.params.id,
            {
                $inc: { subscribe: 1 }

            })
        res.status(200).json(" subscribe successful");
    }
    catch (err) {
        next(err)
    }

}
const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedUsers: req.params.id },
        })
        await User.findByIdAndUpdate(req.params.id,
            {
                $inc: { subscribe: -1 }

            })
        res.status(200).json(" unsubscribe successful");
    }
    catch (err) {
        next(err)
    }
}
const like = async (req, res, next) => {
    const id = req.user.id
    const videoId = req.params.id
    try {
        // await Video.findById(req.params.id, {
        //     $push: { userId: id },
        // })
        await Video.findByIdAndUpdate(videoId,
            {
                $addToSet: { likes: id },
                $pull: { dislikes: id }

            })
        res.status(200).json("The video has been liked.");
    }
    catch (err) {
        next(err)
    }
}
const dislike = async (req, res, next) => {
    const id = req.user.id
    const videoId = req.params.id
    try {
        // await Video.findById(req.params.id, {
        //     $push: { userId: id },
        // })
        await Video.findByIdAndUpdate(videoId,
            {
                $addToSet: { dislikes: id },
                $pull: { likes: id }

            })
        res.status(200).json("The video has been disliked.");
    }
    catch (err) {
        next(err)
    }
}
module.exports = { getUser, updateUser, deleteUser, subscribe, unsubscribe, like, dislike }

