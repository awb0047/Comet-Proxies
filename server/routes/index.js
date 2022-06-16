const router = require('express').Router();
const auth = require('./auth');
// const discord = require('../strategies/discord');

router.use('/auth', auth);
// router.use('/discord', discord);

router.get('/12345', (req, res) => {
    if (req.user) {
        console.log( req.user.discordTag );
        console.log("Test!");
        res.send( req.user );
    } else {
        //console.log(req.user);
        res.status(401).send({ msg: 'Unauthorized'})
    }
})

module.exports = router;