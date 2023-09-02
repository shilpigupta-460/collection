

// const { findByIdAndDelete, findByIdAndUpdate, find } = require("../modules/User");
// const { findById } = require("../modules/Video");
const Video = require("../modules/Video");
const User = require("../modules/User");



const addV = async (req, res, next) => {
    if (req.user.id) {
        try {
            const newVideo = new Video({ userId: req.user.id, ...req.body })


            await newVideo.save();
            res.status(200).send("video has been created!");
        }
        catch (err) {
            next(err)
        }
    }
    else {
        return
        res.send(" Must sign")
    }
}

const getV = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video);
    }
    catch (err) {
        next(err)
    }
}
const getByTag = async (req, res, next) => {
    const tags = req.query.tags.split(",");
    console.log(tags);
    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(20)
        res.status(200).json(videos);
    }
    catch (err) {
        next(err)
    }
}
const search = async (req, res, next) => {
    const query = req.query.q;
    try {
        const videos = await Video.find({
            title: { $regex: query, $options: "i" },
        }).limit(40);
        res.status(200).json(videos);
    }
    catch (err) {
        next(err)
    }
}
const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        })
        res.status(200).json(" views no. increased");
    }
    catch (err) {
        next(err)
    }
}
const trend = async (req, res, next) => {
    try { // view :1 less viewwd 
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos);
    }
    catch (err) {
        next(err)
    }
}
const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(videos);
    }
    catch (err) {
        next(err)
    }
}
const subChannels = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        const subcribeChannels = user.subscribedUsers
        const list = await Promise.all(
            subcribeChannels.map(channelId => {
                return Video.find({ userId: channelId })
            })
        )
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    }
    catch (err) {
        next(err)
    }
}
const deleteV = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return res.status(401).json(" video isn't exit");

        delete (video)
        res.status(200).json(video);

    }
    catch (err) {
        next(err)
    }
}
const updateV = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(message)
        if (req.user.id === video.userId) {
            const updateVideo = await Video.findByIdAndUpdate(req.params.id,
                { $set: req.body }, { new: true })
            return res.status(200).send("Video has been updated!");

        } else {
            return next(err)
        }
    }

    catch (err) {
        next(err)
    }
}
const likeV = async (req, res, next) => {

    const videoId = req.params.videoId;
    try {
        const updateVideo = await Video.findByIdAndUpdate(videoId,
            {
                $addToSet: { likes: req.user.id },
                $pull: { dislikes: req.user.id }
            })
        return res.status(200).send("Video has liked!");

    }


    catch (err) {
        next(err)
    }
}
const dislikeV = async (req, res, next) => {

    const videoId = req.params.videoId;
    try {
        const updateVideo = await Video.findByIdAndUpdate(videoId,
            {
                $addToSet: { dislikes: req.user.id },
                $pull: { likes: req.user.id }
            })
        return res.status(200).send("Video has dislike!");

    }


    catch (err) {
        next(err)
    }


}





module.exports = { addV, getV, deleteV, updateV, random, trend, subChannels, addView, getByTag, search, likeV, dislikeV }
