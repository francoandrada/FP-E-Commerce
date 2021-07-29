const { Router } = require('express');
const router = Router();
const {
	addFavorites,
    getAllFavorites,
    getUserfavorites,
    updateFavorites,
} = require('../Controllers/favorites');

router.post('/', addFavorites);

router.get('/', getAllFavorites);

router.get('/user/:id', getUserfavorites);

router.put('/user/favoritesupdate', updateFavorites);


module.exports = router;