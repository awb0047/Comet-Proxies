const router = require('express').Router();
const auth = require('./auth');
const discord = require('./discord');
const users = require('./users');

router.use('/auth', auth);
router.use('/discord', discord);
router.use('/users', users)

module.exports = router;