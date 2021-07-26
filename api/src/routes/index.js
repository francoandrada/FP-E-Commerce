const { Router } = require('express');
const { multerUploads } = require('../middlewares/multer');

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
const webHooks = require('./webHooks');
const cartRoutes = require('./cartRoutes');
const favoritesRoutes = require('./favoritesRoutes');
<<<<<<< HEAD
const uploadRoutes = require('./uploadRoutes');
=======
const coinpaymentRoutes = require('./coinpaymentRoutes');
const watsonRoutes = require('./watson');
>>>>>>> main
const router = Router();

// router.use('/pagination', paginationRouter);
router.use('/watson', watsonRoutes);
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
router.use('/webhooks', webHooks);
router.use('/shoppingcart', cartRoutes);
router.use('/favorites', favoritesRoutes);
<<<<<<< HEAD
router.use('/upload', multerUploads, uploadRoutes);
=======
router.use('/coinpayment', coinpaymentRoutes);
>>>>>>> main
module.exports = router;
