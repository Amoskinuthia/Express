const express = require('express');
const router = express.Router();
const {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} = require('../controllers/ActivitiesController');

router.get('/', getActivities);

router.get('/getActivity:id', getActivityById);

router.post('/createActivity', createActivity);

router.post('/updateActivity', updateActivity);

router.post('/deleteActivity', deleteActivity);

module.exports = router;
