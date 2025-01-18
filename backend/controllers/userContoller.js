const User = require('../models/userModel');

// Login user
const loginuser = async (req, res) => {
    res.json({ mssg: "login user" });
};

// Signup user
const signupuser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Attempt to create a user using the `signup` method of your User model
        const user = await User.signup(email, password);

        // Send success response
        res.status(200).json({ email, user });
    } catch (error) {
        // Send error response
        res.status(400).json({ error: error.message });
    }

    // Do NOT send another response after the try/catch blocks
};

// Correct export statement
module.exports = { signupuser, loginuser };
