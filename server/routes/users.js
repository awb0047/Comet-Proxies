const router = require('express').Router();
const { getNetNutData } = require('../utils/api')

router.get(`/data/:username`, async (req, res) => {
    const username = req.params['username']
    const usersData = await getNetNutData();
    var status_response = ''
    var customer_index = '';
    for (var i = 0; i < usersData.result.customers.length; i++) {
        if (usersData.result.customers[i].customer_name.toLowerCase() == username.toLowerCase()) {
            if (usersData.result.customers[i].name.includes("allocation") && usersData.result.customers[i].package_is_active == 1) {
                customer_index = i;
                status_response = 'customer active'
                break
            }
            else {
                customer_index = i;
                status_response = 'customer deactive'
            }
        }

    }
    if (customer_index != '') {
        res.json({
            response: status_response,
            name: usersData.result.customers[customer_index].customer_name,
            usage: usersData.result.customers[customer_index].used,
            total: usersData.result.customers[customer_index].bandwidth,
            start: usersData.result.customers[customer_index].start_date,
            end: usersData.result.customers[customer_index].end_date
        });
        return;
    }
    else {
        res.json({response: 'customer not found'});
    }
} );

module.exports = router;