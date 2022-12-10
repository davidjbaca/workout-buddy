const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts');

router.post('/weeks/:id/workouts',workoutsCtrl.create);
router.delete('/weeks/:id',workoutsCtrl.delete);

module.exports = router;