const { Router } = require('express');
const {
	postNewProduct,
	getProductName,
	orderProducts,
} = require('../Controllers/products');
const router = Router();

router.post('/addproduct', postNewProduct);

router.get('/:name', getProductName);

router.get('/orderedproducts/:type/:orderby', orderProducts);

module.exports = router;
