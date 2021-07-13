const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const {
	putProduct,
	postBrand,
	postProduct,
	putBrand,
	postCategoryProduct,
	putCategoryProduct,
	getProductCategory,
	getProductAll,
} = require('../Controllers/admin');
const router = Router();
const routerHelper = require('../helpers/routerHelper');
const tablePagination = require('../Controllers/admin/tablePagination.controller');
// router.get('/', getAllProducts)
router.post('/tablepagination', routerHelper(tablePagination));
router.put('/putproduct', putProduct);
router.post('/createdbrand', postBrand);
// router.post('/addproduct', postProduct)
router.put('/putbrand', putBrand);
router.post('/addCategory', postCategoryProduct);
router.put('/putcategory', putCategoryProduct);
router.get('/productcategoryget/:name', getProductCategory);
router.get('/productos', getProductAll);

module.exports = router;
