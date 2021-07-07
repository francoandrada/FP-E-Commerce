const { Sequelize } = require('sequelize');
const { Brand } = require('../db');

// ----------------  ADD NEW BRAND -----------------

const newBrand = async function newBrand(req, res) {
	try {
		const { name, image } = req.body;

		const createdBrand = await Brand.findOrCreate({
			where: {
				name,
				image,
			},
		});

		res.status(200).json({ message: 'Brand created succesfully' });
	} catch (error) {
		res.send(error);
	}
};

// ----------------  FIND BRAND BY NAME -----------------

const getBrand = async function getBrand(req, res) {
	try {
		const { name } = req.params;

		const brandfound = await Brand.findAll({
			where: {
				name,
			},
		});

		res.status(200).json(brandfound);
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	newBrand,
	getBrand,
};
