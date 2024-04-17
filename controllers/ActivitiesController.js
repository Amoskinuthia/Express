const asyncHandler = require('express-async-handler');
const Activity = require('../models/Activity.js');

// @desc Fetch all activities for an agent using the agentId
// @route GET /api/activities
// @access Public
const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find({});
  res.status(200).json(activities);
});

// @desc Fetch a single activity using the activityId
// @route GET /api/activities/:id
// @access Public
const getActivityById = asyncHandler(async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    res.status(200).json(activity);
  } else {
    res.status(404);
    throw new Error('Activity not found');
  }
});

// @desc Create an activity
// @route POST /api/activities
// @access Public
const createActivity = asyncHandler(async (req, res) => {
  const {
    title,
    date,
    startTime,
    endTime,
    location,
    details,
    contactName,
    dealName,
    reminder,
  } = req.body;
  const activity = new Activity({
    title,
    date,
    startTime,
    endTime,
    location,
    details,
    contactName,
    dealName,
    reminder,
  });

  const createdActivity = await activity.save();
  res.status(201).json(createdActivity);
});

// @desc Update an activity
// @route PUT /api/activities/:id
// @access Public
const updateActivity = asyncHandler(async (req, res) => {
  const { name, description, image, price, category, countInStock } = req.body;
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    activity.name = name;
    activity.description = description;
    activity.image = image;
    activity.price = price;
    activity.category = category;
    activity.countInStock = countInStock;
    const updatedActivity = await activity.save();
    res.json(updatedActivity);
  } else {
    res.status(404);
    throw new Error('Activity not found');
  }
});

// @desc Delete an activity
// @route DELETE /api/activities/:id
// @access Public
const deleteActivity = asyncHandler(async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    await activity.remove();
    res.json({ message: 'Activity removed' });
  } else {
    res.status(404);
    throw new Error('Activity not found');
  }
});

module.exports = {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
};
