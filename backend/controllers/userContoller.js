const User = require('../models/userModel');

// Login user
const loginuser = async (req, res) => {
    res.json({ mssg: "login user" });
};

// Signup user
const signupuser = async (req, res) => {
    res.json({ mssg: "signup user" });
};

// Correct export statement
module.exports = { signupuser, loginuser };
