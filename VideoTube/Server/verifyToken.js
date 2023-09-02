const jwt = require("jsonwebtoken")
// module.exports.verifyToken = (req, res, next) => {
verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    // if (!token) return
    // res.status(401).json("Not authenticated!")

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");

        else if (user) {
            req.user = user
            next()
        }
        //req.user = user;
        // next()
    });
};
module.exports = { verifyToken }