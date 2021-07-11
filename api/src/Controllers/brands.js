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

const getBrands = async function getBrands(req, res) {
	try {
		const brands = await Brand.findAll();

		res.status(200).json(brands);
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	newBrand,
	getBrands,
};
