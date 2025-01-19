const User = require("../models/userModel");
const jswt = require("jsonwebtoken");

const createToken = (_id) => {
  // Return the generated token
  return jswt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Login user
const loginuser = async (req, res) => {
  const {email,password}=req.body
  try {
    // Attempt to create a user using the `signup` method of your User model
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    // Send success response
    res.status(200).json({ email, token });
  } catch (error) {
    // Send error response
    res.status(400).json({ error: error.message });
  }

};

// Signup user
const signupuser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Attempt to create a user using the `signup` method of your User model
    const user = await User.signup(email, password);

    // Create a token
    const token = createToken(user._id);

    // Send success response
    res.status(200).json({ email, token });
  } catch (error) {
    // Send error response
    res.status(400).json({ error: error.message });
  }

  // Do NOT send another response after the try/catch blocks
};

// Correct export statement
module.exports = { signupuser, loginuser };
