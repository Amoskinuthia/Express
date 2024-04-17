const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  dealName: {
    type: String,
    required: true,
  },
  reminder: {
    type: String,
    required: false,
  },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
