const { Router } = require('express');
const router = Router();
const { getOrders, getOrderById } = require('../Controllers/orders/orders');

router.get('/', getOrders);

router.get('/orderid/:id', getOrderById);

module.exports = router;
