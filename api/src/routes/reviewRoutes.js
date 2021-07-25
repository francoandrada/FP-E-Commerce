const { Router } = require('express');
const { newReview, getAllReviews, getAvergedStars } = require('../Controllers/reviews');
const router = Router();

router.post('/', newReview);

router.get('/', getAllReviews);


router.post('/averaged', getAvergedStars);

module.exports = router;
