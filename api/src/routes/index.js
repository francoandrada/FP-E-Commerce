const { Router } = require('express');

const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const brandRoutes = require('./brandRoutes');
const authGmailRoutes = require('./authGmailRoutes');
const reviewRoutes = require('./reviewRoutes');

const router = Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/authGmail', authGmailRoutes);
router.use('/admin', adminRoutes);
router.use('/brands', brandRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
