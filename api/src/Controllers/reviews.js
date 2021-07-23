const { Sequelize } = require('sequelize');
const { Review, User, Product } = require('../db');

const newReview = async function newReview(req, res) {
	try {
		const { userId, productId, description, stars } = req.body;
		console.log(req.body);
	
			var response = await Review.create(
				{
					description: description,
					stars,
				},
				{
					fields: ['description', 'stars', userId, productId],
				}
			)
			const userReview = await User.findOne({
				where: {
					userId: userId,
				},
			});
			if (userReview) {
				await response.setUser(userReview.dataValues.userId);
			}

		res.status(200).json(response);
	} catch (error) {
		console.log(error);
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
