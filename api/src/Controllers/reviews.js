const { Sequelize } = require('sequelize');
const { Review, User, Product } = require('../db');

//------------------------CREAR LA REVIEW------------------------
const newReview = async function newReview(req, res) {
	const { userId, productId, description, stars } = req.body;
	console.log(req.body);
	try {
		var userFind = await User.findOne({
			where: { userId: userId },
		});
		if (userFind) {
			var review = await Review.create(
				{
					description,
					stars,
					userId,
					productId,
				},
				{
					fields: ['description', 'stars', 'userId', 'productId'],
				}
			).then((review) => {
				res.send(review);
			});
		} else {
			res.status(404).send('THE USER DOESNT EXIST');
		}
	} catch (error) {
		console.log(error);
	}
};

//------------------------PROMEDIO DE ESTRELLAS------------------------
const getAvergedStars = async (req, res) => {
	const { productId } = req.body;
	console.log('PRODUCT ID', productId);
	try {
		if (productId !== undefined) {
			const prom = await Review.findAll({
				where: {
					productId: productId,
				},
				attributes: [[Sequelize.fn('avg', Sequelize.col('stars')), 'rating']],
			});

			res.send(prom);
		}
	} catch (error) {
		res.send(error);
	}
};

// SELECT AVG(stars)
// FROM public.reviews
// where "productId" = 2;

//------------------------TODAS LAS REVIEWS------------------------
const getAllReviews = async function getAllReviews(req, res) {
	try {
		const allReviews = await Review.findAll();
		return res.status(200).json(allReviews);
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	getAllReviews,
	getAvergedStars,
	newReview,
};
