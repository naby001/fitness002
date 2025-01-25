const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import the User model

const requireAuth = async (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers;    
    if (!authorization) {
        return res.status(401).json({ error: "Auth token required" });
    }
    const token = authorization.split(' ')[1];

    try {
        console.log("Token:", token); // Add logging
        const { _id } = jwt.verify(token, process.env.SECRET);
        console.log("User ID from token:", _id); // Add logging

        req.user = await User.findOne({ _id }).select("_id");
        if (!req.user) {
            return res.status(401).json({ error: "User not found" });
        }
        next();
    } catch (error) {
        console.log("Error verifying token:", error); // Add logging
        return res.status(401).json({ error: "Request not authorized" });
    }
}
module.exports = requireAuth;
