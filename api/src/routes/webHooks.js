const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { webhooks, contactForm } = require('../Controllers/webHooks');



router.post('/', webhooks);






module.exports = router;
