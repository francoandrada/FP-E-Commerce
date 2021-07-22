const { Router } = require('express');
const router = Router();
const {
	createCart,
    findCart
} = require('../Controllers/shoppingcart');

router.post('/', createCart);

router.post('/userCart', findCart);


module.exports = router;