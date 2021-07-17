const { Router } = require('express');
const router = Router();
const {
	getOrders,
	getOrderById,
	modifyOrderStatus,
} = require('../Controllers/orders/orders');

router.get('/', getOrders);

router.get('/orderid/:id', getOrderById);

router.put('/order/:id/status', modifyOrderStatus);

module.exports = router;
