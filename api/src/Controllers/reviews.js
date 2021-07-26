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
//------------------------CUADRO DE ESTRELLAS------------------------
//SELECT "stars" , count(*) as NUM FROM public.reviews GROUP BY stars
const getAllStars = async (req, res) => {
	try {
		const prom = await Review.findAll({
			attributes: [
				'stars',
				[Sequelize.fn('COUNT', Sequelize.col('stars')), 'PostCount'],
			],

			group: ['stars'],
		});

		res.send(prom);
	} catch (error) {
		console.log(error);
	}
};

// SELECT AVG(stars)
// FROM public.reviews
// where "productId" = 2;

//------------------------TODAS LAS REVIEWS------------------------
const getAllReviews = async function getAllReviews(req, res) {
	const { productId } = req.body;
	console.log(productId);
	try {
		const allReviews = await Review.findAll({
			where: {
				productId: productId,
			},
			attributes: ['stars', 'description'],
			include: {
				model: User,
				attributes: ['name', 'surname', 'email'],
			},
		});

		console.log(allReviews);
		res.send(allReviews);
	} catch (error) {
		console.log(error);
	}
};

// var userFind = await User.findOne({
// 	where: { userId: userId },
// });
// console.log(userFind)
// if (userFind) {

module.exports = {
	getAllReviews,
	getAllStars,
	getAvergedStars,
	newReview,
};
