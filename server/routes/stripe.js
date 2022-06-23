

require('dotenv').config()

const api = require('../utils/api');
const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(
  express.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
  })
);

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
    [1, { priceInCents: 8500, name: '200 IP Plan', gb: 5}],
    [2, { priceInCents: 16000, name: '400 IP Plan', gb: 10}],
    [3, { priceInCents: 30000, name: '600 IP Plan', gb: 20}],
    [4, { priceInCents: 42000, name: '800 IP Plan', gb: 30}],
    [5, { priceInCents: 52000, name: '1000 IP Plan', gb: 40}],
    [6, { priceInCents: 60000, name: '1200 IP Plan', gb: 50}],
])

router.post('/checkout', async (req, res) => {
    try {
        const planId = Number(req.body.id);
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            metadata: {
              discordId: req.body.discordId,
              discordTag: req.body.discordTag,
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
              gb: storeItems.get(planId).gb
            },
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItems.get(planId).name
                        },
                        unit_amount: storeItems.get(planId).priceInCents
                    },
                    quantity: 1,
                },
            ],
            success_url: 'http://localhost:3000/dashboard',
            cancel_url: 'https://www.nike.com/',
        });

        res.json({ url: session.url })
        // res.json({ url: 'test url' })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
});

router.post('/webhook', async (req, res) => {
    let data;
    let eventType;
    // Check if webhook signing is configured.
    const webhookSecret = 'whsec_b9cb7234d797e1023ae8e0fd33c1198da7bf1cfc2093bd8c7ce5bfba124f0be4';
  
    if (webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers['stripe-signature'];
  
      try {
        event = stripe.webhooks.constructEvent(
          req['rawBody'],
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`);
        // console.log(err);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data;
      eventType = req.body.type;
    }
  
    switch (eventType) {
      case 'checkout.session.completed':
        console.log(data.object.metadata);

        await api.createNetNutUser(
          data.object.metadata.discordId,
          data.object.metadata.discordTag,
          data.object.metadata.username,
          data.object.metadata.password,
          data.object.metadata.email,
        ).then(response => console.log(response)
        ).then(await api.allocateData(data.object.metadata.username, data.object.metadata.gb)
        .then(response => console.log(response)))

        // const form = new FormData();
        // form.append("customer_name", data.object.metadata.discordTag);
        // form.append("customer_dashboard_email", data.object.metadata.email);
        // form.append("customer_dashboard_pwd", data.object.metadata.password);
        // form.append("customer_login_name", data.object.metadata.username);
        // form.append("customer_login_pwd", data.object.metadata.password);
        // form.append("customer_country_code", "us");
        // form.append("loginEmail", "cometproxies1@gmail.com");
        // form.append("loginPassword", "Proxiescom098!");

        break;
      case 'invoice.paid':
        break;
      case 'invoice.payment_failed':
        break;
      default:
      // Unhandled event type
    }
  
    res.sendStatus(200);
  });

module.exports = router;