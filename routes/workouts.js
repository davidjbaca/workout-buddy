const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts');
const isLoggedIn = require('../config/auth')


router.get('/workouts/:id/edit', isLoggedIn, workoutsCtrl.edit);
router.post('/weeks/:id/workouts',isLoggedIn, workoutsCtrl.create);
router.put('/workouts/:id', isLoggedIn, workoutsCtrl.update);
router.delete('/workouts/:id', isLoggedIn, workoutsCtrl.delete);

module.exports = router;