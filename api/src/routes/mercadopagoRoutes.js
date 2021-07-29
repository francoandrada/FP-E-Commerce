const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { createOrder, ipnMPUpdate } = require('../Controllers/mercadopago');

const { PROD_ACCESS_TOKEN } = process.env;

mercadopago.configure({
	access_token: PROD_ACCESS_TOKEN,
});

router.post('/createorder', createOrder);

router.post('/ipn',ipnMPUpdate)

module.exports = router;
