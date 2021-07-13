const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { putProduct, postBrand, postProduct, putBrand,  postCategoryProduct, putCategoryProduct, getProductCategory, getProductAll} = require('../Controllers/admin')
const router = Router();


// router.get('/', getAllProducts)
router.put('/putproduct', putProduct)
router.post('/createdbrand', postBrand)
router.post('/addproduct', postProduct)
router.put('/putbrand', putBrand)
router.post('/addCategory', postCategoryProduct)
router.put('/putcategory', putCategoryProduct)
router.get('/productcategoryget/:name', getProductCategory)
router.get('/productos', getProductAll)



module.exports = router;