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

router.post("/auth", authUser); // Use the authUser function as the route handler

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.get("/profile", getUserProfile);

router.put("/profile", updateUserProfile);


module.exports = router;
