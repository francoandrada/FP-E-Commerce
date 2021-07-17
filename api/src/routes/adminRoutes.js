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
	getUsers,
	getUserToEdit,
	putUserInfo,
	deleteUser,
} = require('../Controllers/admin');

const router = Router();
const routerHelper = require('../helpers/routerHelper');
const tablePagination = require('../Controllers/admin/tablePagination.controller');
const countOfBrand = require('../Controllers/admin/countBrand.controller');
// router.get('/', getAllProducts)
router.get('/countofbrand', routerHelper(countOfBrand));
router.post('/tablepagination', routerHelper(tablePagination));
router.put('/putproduct', putProduct);
router.post('/createdbrand', postBrand);
router.post('/addproduct', postProduct);
router.put('/putbrand', putBrand);
router.post('/addCategory', postCategoryProduct);
router.put('/putcategory', putCategoryProduct);
router.get('/productcategoryget/:name', getProductCategory);
router.get('/productos', getProductAll);
router.get('/users', getUsers);
router.get('/user/:email', getUserToEdit);
router.put('/user/edit', putUserInfo);
router.put('/user/delete', deleteUser);

module.exports = router;
