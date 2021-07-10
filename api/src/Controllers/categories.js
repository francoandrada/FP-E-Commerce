const { Sequelize } = require('sequelize');
const { Category } = require('../db');


const getAllCategories = async function getAllCategories(req, res, next) {
	try {
		const allCategories = await Category.findAll();
        console.log(allCategories)
		res.status(200).json(allCategories);
	} catch (error) {
		next(error);
	}
};

module.exports = {
    getAllCategories
}