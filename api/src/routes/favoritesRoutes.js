const { Router } = require('express');
const router = Router();
const {
	addFavorites,
    getAllFavorites,
    getUserfavorites,
} = require('../Controllers/favorites');

router.post('/', addFavorites);

router.get('/', getAllFavorites);

router.get('/user/:id', getUserfavorites);


module.exports = router;