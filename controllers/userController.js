const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken.js');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');

//@desc login a user
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  console.log('Auth user');
  console.log(req.body);
  const { username, password } = req.body;
  email = username;
  console.log('Email: ' + email);

  // Check if a user with the given email exists
  const user = await User.findOne({ email });
  if (user) {
    // Check if the password is correct
    console.log('User found');
    console.log('pass entered', password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      generateToken(res, user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        accessToken: process.env.JWT_SECRET,
      });
      console.log('User logged in successfully');
    } else {
      res.status(401);
      throw new Error('Invalid password');
    }
  }
});
//@desc register a new user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user with the given email already exists
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error('User already exists');
  }
  // Create a new user
  const newUser = await User.create({ name, email, password })
    .then((user) => {
      console.log('User created successfully', user);
    })
    .catch((err) => {
      console.log('Error creating user', err);
    });
  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      accessToken: req.cookies.jwt,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

  res.status(200).json({ msg: 'Register user' });
});
//@desc login a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Login user' });
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

//@desc get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Get user profile' });
});
//@desc update user profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Update user profile' });
});

module.exports = {
  authUser,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
