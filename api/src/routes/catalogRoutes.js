


const { Router } = require('express');
// const { getAllProducts } = require('../Controllers/products')
const { getFilteredProducts } = require('../Controllers/products')
const router = Router();
    
    
router.get('/', getFilteredProducts);

module.exports = router;
