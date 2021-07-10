const { Router } = require('express');
const { getAllCategories } = require('../Controllers/categories');
const router = Router();

router.get('/', getAllCategories);

module.exports = router;
