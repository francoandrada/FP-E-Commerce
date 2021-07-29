const { Router } = require('express');
const router = Router();
const {
	createCart,
    findCart,
    deleteCart,
    updateCart
} = require('../Controllers/shoppingcart');

router.post('/', createCart);

router.post('/userCart', findCart);

router.delete('/userCart/delete', deleteCart);

router.put('/userCart/update', updateCart);

module.exports = router;