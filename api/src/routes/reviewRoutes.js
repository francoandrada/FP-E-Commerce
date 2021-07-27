const { Router } = require('express');
const { newReview, getAllReviews, getAvergedStars, getAllStars } = require('../Controllers/reviews');
const router = Router();

router.post('/', newReview);

router.post('/byproduct', getAllReviews);


router.post('/averaged', getAvergedStars);

router.post('/allStars',getAllStars);

module.exports = router;
