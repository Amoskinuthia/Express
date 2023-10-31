const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User.js');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Get the token from the authorization header
        try {
            token = req.cookies.jwt;
            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Find the user with the decoded id and attach it to the request object
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (err) {
            console.error(err);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
}
);
module.exports = protect;