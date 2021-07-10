const { Router } = require('express');
const { newBrand, getBrands } = require('../Controllers/brands');
const router = Router();

router.post('/addbrand', newBrand);

router.get('/', getBrands);

module.exports = router;
