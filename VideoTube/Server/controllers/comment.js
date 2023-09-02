
const Comment = require("../modules/Comments");
const Video = require("../modules/Video")


const createCom = async (req, res, next) => {

    const newComment = new Comment({
        ...req.body,
        userId: req.user.id

    })
    try {
        const saveCom = await newComment.save({})
        res.status(200).json(saveCom)
    }
    catch (err) {
        next(err)

    }
}
const deleteCom = async (req, res, next) => {
    try {
        const comment = await Comment.findById(res.params.id);
        const video = await Video.findById(res.params.id);
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("Comment deleted")
        } else return await Comment.findByIdAndDelete(req.params.id)
        res.status(403).json("You can delete ony your comment!")
    }
    catch (err) {
        next(err)

    }
}

const getCom = async (req, res, next) => {


    try {
        const comments = await Comment.find({ videoId: req.params.videoId })

        res.status(200).json(comments)
    }
    catch (err) {
        next(err)

    }
}


module.exports = { createCom, getCom, deleteCom }
