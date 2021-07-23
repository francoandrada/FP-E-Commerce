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
	deleteProduct,
	deleteBrand,
	deleteCategory,
} = require('../Controllers/admin');

const router = Router();
const routerHelper = require('../helpers/routerHelper');
const tablePagination = require('../Controllers/admin/tablePagination.controller');
const countOfCategories = require('../Controllers/admin/countCategories.controller');
const countOfBrand = require('../Controllers/admin/countBrand.controller');
const getProductOrder = require('../Controllers/admin/getOrders.controller');
const getUserOrder = require('../Controllers/admin/userOrder.controller');
const getOrderDetails = require('../Controllers/admin/getAllDataAboutAnOrder.controller');
// router.get('/', getAllProducts)
router.get('/dataaboutorder/:id', routerHelper(getOrderDetails));
router.post('/usersandhisorders', routerHelper(getUserOrder));
router.post('/listorders', routerHelper(getProductOrder));
router.get('/categoriescount', routerHelper(countOfCategories));
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
router.delete('/deleteproduct/:id', deleteProduct);
router.delete('/deletebrand/:id', deleteBrand);
router.delete('/deletecategory/:id', deleteCategory);

module.exports = router;
