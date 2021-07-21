const { Sequelize } = require('sequelize');
const { Review, User, Product } = require('../db');

const newReview = async function newReview(req, res) {
	try {
		const { userId, productId, description, stars } = req.body;

		const userReview = await User.findOne({
			where: {
				userId,
			},
		});
		if (userReview) {
			var response = await userReview.addReview({
				through: {
					description,
					stars,
					userId,
					productId,
				},
			});
		}

		res.status(200).json(response);
	} catch (error) {
		res.send(error);
	}
};
//-----------------------------------
// const newReview = async function newReview(req, res) {
// 	try {
// 		const { userId, productId, description, stars } = req.body;

// 		const userReview = await User.findOne({
// 			where: {
// 				userId,
// 			},
// 		});
// 		const review = await Review.create({

// 			attributes: ['description', 'stars'],
// 			where: {
// 				description,
// 				stars,

// 			}

// 		})
// 		Promise.All([userReview, review]) {
// 			var response = await userReview.addReview( review, 	});
// 		}

// 		res.status(200).json(response);
// 	} catch (error) {
// 		res.send(error);
// 	}
// };



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
	newReview,
};
