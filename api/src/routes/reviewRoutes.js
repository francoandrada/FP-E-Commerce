const { Router } = require('express');
const { newReview, getAllReviews } = require('../Controllers/reviews');
const router = Router();

router.post('/', newReview);

router.get('/', getAllReviews);

module.exports = router;
