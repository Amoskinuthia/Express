const asyncHandler = require('express-async-handler');
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Auth user' });
}
);
module.exports = authUser;