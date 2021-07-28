const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const {
	postNewProduct,
	getProductName,
	orderProducts,
	getAllProducts,
	getBrandProduct,
	getIdProduct,
	getCategoryProduct,
	getFilteredProducts,
} = require('../Controllers/products');
const router = Router();

router.post('/addproduct', postNewProduct);

router.get('/:name', getProductName);

router.get('/orderedproducts/:type/:orderby', orderProducts);

router.get('/', getAllProducts);

router.get('/allproducts/:id', getIdProduct);


// router.get('/productsbrand/:brand', getBrandProduct)

// router.get('/productscategory/:category', getCategoryProduct)

module.exports = router;
