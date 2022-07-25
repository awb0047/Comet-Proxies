const express = require('express');
const router = require('express').Router();
const Gen = require('../utils/genSid');
const Ip = require('../database/schemas/Ip');
const User = require('../database/schemas/User');

router.use(express.json());

router.post('/proxies', async (req, res) => {
    try {
        var data = req.body.bandwidth;
        var user = req.body.proxyUser;
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
        const ipCount = foundIps.ips.length;       
        
        var proxyList = []
        for (var i = 0; i < count; i++) {
            var ip;
            var ipNum = Gen.randomNumber(ipCount);
            ip = foundIps.ips[ipNum - 1];
            let randomGennedSid = Gen.genSID();
            let proxy = `${ip}:5959:${req.body.proxyUser}-cc-cpus-sid-${randomGennedSid}:${req.body.proxyPass}`
            proxyList.push(proxy);
        }

        const findUser = await User.findOne({ proxyUser: user })
        if (findUser.currentIps.length != count) {
            const updateUser = await User.findOneAndUpdate(
                {proxyUser: user },
                {
                    currentIps: proxyList,
                },
                {new: true}
            );
            res.json(proxyList);
        }
        else {
            res.json(findUser.currentIps);
        }
    } catch (err) {
        res.json(
            {error: "Error Genning Proxies"},
        );
        console.log(err);
    }
} );

module.exports = router;