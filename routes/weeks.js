const router = require('express').Router();
const workoutController = require('../controllers/weeks');

router.get('/', workoutController.index);

module.exports = router;