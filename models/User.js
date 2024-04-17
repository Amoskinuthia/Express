const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      unique: true,
      validate(value) {
        // This regex checks if the email provided is valid
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(value);
      },
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);
userSchema.pre('save', async function (next) {
  // Check if password field is modified
  if (this.isModified('password')) {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;
