const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { postNewProduct, 
        getProductName,
        orderProducts } = require('../Controllers/products')
const router = Router();


// router.get('/', getAllProducts)
router.post('/addProduct', postNewProduct)

router.get('/:name', getProductName)

router.get('/orderedproducts/:type/:orderby', orderProducts)

module.exports = router;