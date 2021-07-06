const { Router } = require('express');
const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');

// const user = require('./users');

const router = Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
