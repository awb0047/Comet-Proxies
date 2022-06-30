async function getBotGuilds() {
    const response = await fetch('http://discord.com/api/v6/users/@me/guilds', {
        method: 'GET',
        headers: {
            Authorization: `Bot ${TOKEN}`
        }
    });
}

async function getNetNutData() {
    try {
        const api_url = `https://reseller-api.netnut.io/api/aff/customers?loginEmail=cometproxies1@gmail.com&loginPassword=Proxiescom098!`
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        return json;
    } catch (err) {
        const json = {err: 'Error fetching Data'}
        console.log(err);
        return json;
    }
}

async function createNetNutUser(discordId, discordTag, username, password, email) {
    const newEmail = username + '@bettersneaks.com';
    
    const form = new FormData();
    form.append("customer_name", discordTag);
    form.append("customer_dashboard_email", newEmail);
    form.append("customer_dashboard_pwd", password);
    form.append("customer_login_name", username);
    form.append("customer_login_pwd", password);
    form.append("customer_country_code", "us");
    form.append("loginEmail", "cometproxies1@gmail.com");
    form.append("loginPassword", "Proxiescom098!");

    //Sets header options
    const options = {
    method: 'POST',
    headers: {
        'Content-Disposition': 'form-data',
    }
    };

    //Adds form to options
    options.body = form;

    const response = await fetch('https://reseller-api.netnut.io/api/aff/customers', options)
    const result = response.json();
    return result;
    // .then(response => response.json())
    // .then(response => {
    //     // console.log(response)
    //     if (response.result.customer) {
    //         var string = 'Account created'
    //         return string;
    //     }
    //     else if (response.result.result.error) {
    //         var string = 'Account Not created'
    //         console.log(string);
    //         return string;
    //     }
    //     else {
    //         var string = 'wtf is happening'
    //         return string;
    //     }
    // })
    // .catch(err => console.error(err));
}

async function allocateData(proxyUser, gb) {
    try {
        //Gets customer ID
        var userId;
        const usersData = await getNetNutData();
        for (var i = 0; i < usersData.result.customers.length; i++) {
            if (usersData.result.customers[i].customer_login_name.toLowerCase() == proxyUser.toLowerCase()) {
                userId = usersData.result.customers[i].customer_id
                break
                // if (usersData.result.customers[i].name.includes("allocation")) {
                //     status_response = 'customer exists';
                //     break
                // }
                // else {
                //     status_response = 'customer does not exist';
                // }
            }
            else {
                userId;
            }
        }
        const form = new FormData();
        form.append("allocation", gb);

        //Sets header options
        const options = {
        method: 'POST',
        headers: {
            'Content-Disposition': 'form-data',
        }
        };

        options.body = form;

        const response = await fetch(`https://reseller-api.netnut.io/api/aff/customer/${userId}/allocate?loginPassword=Proxiescom098!&loginEmail=cometproxies1@gmail.com`, options)
        const result = response.json();
        return result;
    } catch (err) {
        console.log(err);
        const result = {err: 'could not allocate data'}
        return result;
    }
}

module.exports = { getNetNutData, createNetNutUser, allocateData }