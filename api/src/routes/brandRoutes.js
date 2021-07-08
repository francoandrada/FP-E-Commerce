const { Router } = require('express');
const { newBrand, getBrand } = require('../Controllers/brands');
const router = Router();

router.post('/addbrand', newBrand);

router.get('/:name', getBrand);

module.exports = router;
