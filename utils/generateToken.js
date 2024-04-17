const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 3600000,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production' ? true : false,
  });
};
module.exports = generateToken;
