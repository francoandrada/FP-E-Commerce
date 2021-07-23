const { Router } = require('express');
const router = Router();
const {
	createFavorites,
    getAllFavorites,
    getUserfavorites,
} = require('../Controllers/favorites');

router.post('/', createFavorites);

router.get('/', getAllFavorites);

router.get('/user/:id', getUserfavorites);


module.exports = router;