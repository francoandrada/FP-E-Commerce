const { Router } = require('express');

const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');
const brandRoutes = require('./brandRoutes');

const router = Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/brands', brandRoutes);

module.exports = router;
