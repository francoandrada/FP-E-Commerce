const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { postNewProduct, 
        getProductName } = require('../Controllers/products')
const router = Router();


// router.get('/', getAllProducts)
router.post('/addProduct', postNewProduct)

router.get('/:name', getProductName)


module.exports = router;