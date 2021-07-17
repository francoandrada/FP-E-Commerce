const { Router } = require('express');

const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const brandRoutes = require('./brandRoutes');
const authGmailRoutes = require('./authGmailRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const reviewRoutes = require('./reviewRoutes');
const catalogRoutes = require('./catalogRoutes');
const mercadopagoRoutes = require('./mercadopagoRoutes');
const orderRoutes = require('./orderRoutes');

const router = Router();

// router.use('/pagination', paginationRouter);
router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/authGmail', authGmailRoutes);
router.use('/admin', adminRoutes);
router.use('/brands', brandRoutes);
router.use('/reviews', reviewRoutes);
router.use('/catalog', catalogRoutes);
router.use('/mercadopago', mercadopagoRoutes);
router.use('/orders', orderRoutes);

router.get('/', (req, res) => {
	res.send('Hello from Express!');
});
module.exports = router;
