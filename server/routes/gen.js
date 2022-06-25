const express = require('express');
const router = require('express').Router();
const Gen = require('../utils/genSid');
const Ip = require('../database/schemas/Ip');

router.use(express.json());

router.post('/proxies', async (req, res) => {
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

    // const newIp = await Ip.create( {
    //     ips: { 
    //         ip1: '147.135.22.3',
    //         ip2: '51.81.26.153',
    //         ip3: '51.81.13.191',
    //         ip4: '51.81.26.235',
    //     }
    // } );

    const foundIps = await Ip.findById('62b69e016c3ed6f7ee1b31e0')
    
    var proxyList = []
    for (var i = 0; i < count; i++) {
        var ip;
        var ipNum = Gen.randomFour();
        if (ipNum === 1) {
            ip = foundIps.ips[0].ip1
        }
    
        if (ipNum === 2) {
            ip = foundIps.ips[0].ip2
        }
    
        if (ipNum === 3) {
            ip = foundIps.ips[0].ip3
        }
    
        if (ipNum === 4) {
            ip = foundIps.ips[0].ip4
        }
        let proxy = `${ip}:5959:${req.body.proxyUser}-cc-cpus-sid-${req.body.sid + '-' + (i+1)}:${req.body.proxyPass}`
        proxyList.push(proxy);
    }
    res.json(proxyList)
} );

module.exports = router;