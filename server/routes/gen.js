const express = require('express');
const router = require('express').Router();
router.use(express.json());

router.post('/proxies', (req, res) => {
    var data = req.body.bandwidth;
    var count = 0;

    if (data === 0) {
        count = 0;
    }
    else if (data === 5) {
        count = 200;
    }
    else if (data === 10) {
        count = 400;
    }
    else if (data === 20) {
        count = 600;
    }
    else if (data === 30) {
        count = 800;
    }
    else if (data === 40) {
        count = 1000;
    }
    else if (data === 50) {
        count = 1200;
    }
    else {
        count = 2000;
    }
    
    
    var proxyList = []
    for (var i = 0; i < count; i++) {
        let proxy = `pa-cometproxies-us.ntnt.io:5959:${req.body.proxyUser}-cc-cpus-sid-${req.body.sid + '-' + (i+1)}:${req.body.proxyPass}`
        proxyList.push(proxy);
    }
    res.json(proxyList)
} );

module.exports = router;