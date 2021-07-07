const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { postNewProduct, 
        getProductName,
        orderProducts, getAllProducts,  getBrandProduct,
        getIdProduct, getCategoryProduct } = require('../Controllers/products')
const router = Router();


// router.get('/', getAllProducts)
router.post('/addProduct', postNewProduct)

router.get('/:name', getProductName)

router.get('/orderedproducts/:type/:orderby', orderProducts)

router.get('/allProducts', getAllProducts)

router.get('/:id', getIdProduct)

router.get('/:filterBrand', getBrandProduct)

router.get('/:filterCategory', getCategoryProduct)


module.exports = router;