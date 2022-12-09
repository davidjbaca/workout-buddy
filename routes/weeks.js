const express = require('express');
const { route } = require('.');
const router = express.Router();
const weekController = require('../controllers/weeks');
// const isLoggedIn = require('../config/auth')


router.get('/new',  weekController.new);
router.post('/', weekController.create);
router.get('/', weekController.index);
// router.post('/', isLoggedIn, weekController.create);
router.get('/:id', weekController.show)

module.exports = router;