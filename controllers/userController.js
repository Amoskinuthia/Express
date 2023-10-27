const asyncHandler = require('express-async-handler');
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Auth user' });
}
);
//@desc register a new user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Register user' });
}
);
//@desc login user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Login user' });
}
);
//@desc logout user
//@route POST /api/users/logout
//@access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Logout user' });
}
);
//@desc get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Get user profile' });
}
);
//@desc update user profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Update user profile' });
}
);



module.exports = {
    authUser,
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}