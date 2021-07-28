const { Router } = require('express');
const router = Router();
const {
	getOrders,
	getOrderById,
	modifyOrderStatus,
	findUserOrders,
	orderDispatched,
} = require('../Controllers/orders/orders');

router.get('/', getOrders);

router.get('/orderid/:id', getOrderById);

router.put('/order/:id', modifyOrderStatus);

router.get('/order/user/:userid', findUserOrders);



module.exports = router;
