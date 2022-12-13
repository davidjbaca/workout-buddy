const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts');


router.get('/workouts/:id/edit', workoutsCtrl.edit);
router.post('/weeks/:id/workouts',workoutsCtrl.create);
router.put('/workouts/:id', workoutsCtrl.update);
router.delete('/workouts/:id',workoutsCtrl.delete);

module.exports = router;