const express = require('express');
const router = express.Router();
const {
    authUser,
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
 } = require('../controllers/userController.js'); // Import the authUser function from the controller
const  protect= require('../middleware/authMiddleware.js'); // Import the protect function from the middleware

router.post("/auth", authUser); // Use the authUser function as the route handler

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);


module.exports = router;
