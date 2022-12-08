
const express = require('express');
const router = express.Router();
const weekCtrl = require('../controllers/weeks');
const isLoggedIn = require('../config/auth')


/* GET users listing. */
router.get('/new', isLoggedIn, weekCtrl.new);
router.get('/', weekCtrl.index);
router.post('/', isLoggedIn, weekCtrl.create);

router.get('/:id', weekCtrl.show);


module.exports = router;
