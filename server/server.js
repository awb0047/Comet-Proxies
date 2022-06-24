// Imports
require('dotenv').config();
require('./strategies/discord');

const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const Store = require('connect-mongo');
const FormData = require('form-data');


// Server Initialization
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

//Mongoose Connections
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(cors( {
    //origin: "http://45.33.101.29:3000",
    origin: "http://www.cometproxies.com",
    credentials: true,
}))

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        domain: '.cometproxies.com',
        maxAge: 60000 * 60 * 24
    },
    store: Store.create({mongoUrl: process.env.MONGO_URI}),
}))

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);
app.use(express.json({ limit: '3mb' }));
app.listen(PORT, () => console.log(`listening at ${PORT}`));

app.get(`/api/customer/data/:username`, async (request, response) => {
    const username = request.params['username']
    const api_url = `https://reseller-api.netnut.io/api/aff/customers?loginEmail=cometproxies1@gmail.com&loginPassword=Proxiescom098!`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    var status_response = ''
    var customer_index = '';
    for (var i = 0; i < json.result.customers.length; i++) {
        if (json.result.customers[i].customer_name.toLowerCase() == username.toLowerCase()) {
            if (json.result.customers[i].name.includes("allocation") && json.result.customers[i].package_is_active == 1) {
                customer_index = i;
                status_response = 'customer active'
                break
            }
            else {
                customer_index = i;
                status_response = 'customer deactive'
            }
        }

        // if (json.result.customers[i].customer_name.toLowerCase() == username.toLowerCase() && json.result.customers[i].name.includes("allocation") && json.result.customers[i].package_is_active == 1) {
        //     customer_index = i;
        //     response = 'customer found'
        // }
    }
    if (customer_index != '') {
        response.json({
            response: status_response,
            name: json.result.customers[customer_index].customer_name,
            usage: json.result.customers[customer_index].used,
            total: json.result.customers[customer_index].bandwidth,
            start: json.result.customers[customer_index].start_date,
            end: json.result.customers[customer_index].end_date
        });
        return;
    }
    else {
        response.json({response: 'customer not found'});
    }
});

app.post('/api/customer/add', async (req, res) => {

    console.log(req.body.username);
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    //Adds params to form
    const form = new FormData();
    form.append("customer_name", username);
    form.append("customer_dashboard_email", email);
    form.append("customer_dashboard_pwd", password);
    form.append("customer_login_name", username);
    form.append("customer_login_pwd", "12345678");
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

    fetch('https://reseller-api.netnut.io/api/aff/customers', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if (response.result.customer) {
            res.json({
                status: 'Account Created'
            })
        }
        if (response.result.result.error) {
            res.json({
                status: 'Account Not Created'
            })
        }
        else {
            res.json({
                status: 'Idk whats happening tbh'
            })
        }
    })
    .catch(err => console.error(err));
});

//Mongoose
app.post("/api/add_user", async (request, response) => {
    try {
        const user = await userModel.create({
            username: "splooti",
            discriminator: 5457,
            email: "add9mob@gmail.com"
        })
        response.send(user);
    } catch (e) {
        console.log(e.message);
        response.status(500).send(e);
    }
});

app.get("/api/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });