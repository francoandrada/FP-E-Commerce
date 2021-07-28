const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { webhooks, emailPurchase } = require('../Controllers/webHooks');



router.post('/', webhooks);




module.exports = router;
