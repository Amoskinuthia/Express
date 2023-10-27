const express = require('express');
const router = express.Router();
const authUser = require('../controllers/userController.js'); // Import the authUser function from the controller

router.post("/auth", authUser); // Use the authUser function as the route handler

module.exports = router;
