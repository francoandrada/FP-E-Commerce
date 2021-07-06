const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { postNewProduct } = require('../Controllers/products')
const router = Router();


// router.get('/', getAllProducts)
router.post('/addProduct', postNewProduct)


module.exports = router;