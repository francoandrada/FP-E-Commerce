const { Sequelize } = require('sequelize');
const { Product, Category } = require('../../db.js');

const tablePagination = async (req, res, next) => {
	const LIMIT = 3;
	let products = {};
	const { category, orderBy, order } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) page = pageAsNumber;

	/*
		url: http://localhost:3001/admin/tablepagination?page=0
		send by body:
		{
			"orderBy": "price",
			"order": "ASC",
			"category": "tabletas"
		}
	*/

	// filtered by category, and order
	if (category && order && category !== 'default' && order !== 'default') {
		products = await Product.findAndCountAll({
			limit: LIMIT,
			offset: page * LIMIT,
			include: {
				model: Category,
				where: {
					name: category,
				},
			},
			order: [[orderBy, order]],
		});
		return res.json({
			totalPages: Math.floor(products.count / LIMIT),
			products: products.rows,
		});
	}

	// filter by category withour ordered
	if (category && category !== 'default') {
		products = await Product.findAndCountAll({
			limit: LIMIT,
			offset: page * LIMIT,
			include: {
				model: Category,
				where: {
					name: category,
				},
			},
		});
		return res.json({
			totalPages: Math.floor(products.count / LIMIT),
			products: products.rows,
		});
	}

	if (order && order !== 'default') {
		products = await Product.findAndCountAll({
			limit: LIMIT,
			offset: page * LIMIT,
			include: {
				model: Category,
			},
			order: [[orderBy, order]],
		});
		return res.json({
			totalPages: Math.floor(products.count / LIMIT),
			products: products.rows,
		});
	}

	// default values without any order
	products = await Product.findAndCountAll({
		limit: LIMIT,
		offset: page * LIMIT,
		include: {
			model: Category,
		},
	});
	return res.json({
		totalPages: Math.floor(products.count / LIMIT),
		products: products.rows,
	});
};

module.exports = tablePagination;
