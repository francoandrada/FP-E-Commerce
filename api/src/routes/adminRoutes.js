const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { putProduct, postBrand } = require('../Controllers/admin')
const router = Router();


// router.get('/', getAllProducts)
router.put('/putproduct', putProduct)
router.post('/createdbrand', postBrand)


module.exports = router;