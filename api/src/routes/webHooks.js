const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { webhooks } = require('../Controllers/webHooks');



router.post('/', webhooks);

module.exports = router;
