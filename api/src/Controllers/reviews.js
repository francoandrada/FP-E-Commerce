const { Sequelize } = require('sequelize');
const { Review } = require('../db');

const newReview = async function newReview(req, res) {
	try {
		const { description, stars } = req.body;

		const createdReview = await Review.findOrCreate({
			where: {
				description,
				stars,
			},
		});

		res.status(200).json({ message: 'Review created succesfully' });
	} catch (error) {
		res.send(error);
	}
};

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
