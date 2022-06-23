const router = require('express').Router();
const auth = require('./auth');
const discord = require('./discord');
const users = require('./users');
const gen = require('./gen');
const stripe = require('./stripe');

router.use('/auth', auth);
router.use('/discord', discord);
router.use('/users', users)
router.use('/gen', gen);
router.use('/stripe', stripe);

module.exports = router;