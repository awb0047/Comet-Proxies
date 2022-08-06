

require('dotenv').config()

const api = require('../utils/api');
const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const Orders = require('../database/schemas/orders');

router.use(
  express.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
  })
);

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


const storeItems = new Map([
    [5, { priceInCents: 8500, name: '200 IP Plan', gb: 5}],
    [10, { priceInCents: 16000, name: '400 IP Plan', gb: 10}],
    [20, { priceInCents: 30000, name: '600 IP Plan', gb: 20}],
    [30, { priceInCents: 42000, name: '800 IP Plan', gb: 30}],
    [40, { priceInCents: 52000, name: '1000 IP Plan', gb: 40}],
    [50, { priceInCents: 60000, name: '1200 IP Plan', gb: 50}],
])

router.post('/checkout', async (req, res) => {
    try {

        // const fnf = await stripe.coupons.create({percent_off: 30, id: 1});
        // const notify = await stripe.coupons.create({percent_off: 25, id: 2});
        // const groupbuy = await stripe.coupons.create({percent_off: 20, id: 3});
        // const discord = await stripe.coupons.create({percent_off: 15, id: 4});

        // const fnfCode = await stripe.promotionCodes.create({
        //   coupon: 1,
        //   code: 'gijepfnf',
        // });
        // const noityCode = await stripe.promotionCodes.create({
        //   coupon: 2,
        //   code: 'odkonotify',
        // });
        // const groupbuyCode = await stripe.promotionCodes.create({
        //   coupon: 3,
        //   code: 'iogifgdgb',
        // });
        // const discordCode = await stripe.promotionCodes.create({
        //   coupon: 4,
        //   code: 'd1zk0rb',
        // });

        const planId = Number(req.body.id);
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            allow_promotion_codes: true,
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
            success_url: process.env.DASH_URL,
            cancel_url: process.env.DASH_URL,
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
    const webhookSecret = 'whsec_SJLzWKqIHgRMY30V4kiY4dAzB2Lm0I3T';
  
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

        try {
          console.log(data.object.metadata);

          const findOrder = await Orders.findOne({name: 'orderList'})
          const doesContainOrder = findOrder.orders.includes(data.object.id)

          if (doesContainOrder === false) {

            const updateOrders = await Orders.findOneAndUpdate(
                {name: 'orderList' },
                {
                    $push: { orders: data.object.id },
                },
                {new: true}
            );

            const response = await api.createNetNutUser
            (
              data.object.metadata.discordId,
              data.object.metadata.discordTag,
              data.object.metadata.username,
              data.object.metadata.password,
              data.object.metadata.email,
            )
            
            console.log(response);
            console.log(data.object.id);
            const dataResponse = await api.allocateData(data.object.metadata.username, data.object.metadata.gb);

            try {
              var deliveredSuccess = false;

              if (dataResponse.result.result === true) {
                var deliveredSuccess = false;
              }

              if (deliveredSuccess === true) {
                console.log("Data Successfully Allocated");
                api.sendEmailConfirmation(data.object.customer_details.email, data.object.metadata.gb, data.object.metadata.discordTag);
              }
            } catch (err) {
              console.log("Error Sending Email");
              console.log(err.message);
            }

            console.log(dataResponse);
            break;
          }

          else {
            console.log('order already exists');
            break;
          }
        } catch (err) {
          console.log(err);
          break;
        }

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