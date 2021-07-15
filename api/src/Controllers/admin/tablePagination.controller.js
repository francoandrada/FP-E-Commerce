const { Product, Category } = require('../../db.js');

const tablePagination = async (req, res, next) => {
	let products = {};
	const { category, sortBy, order, limit } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) page = pageAsNumber;

	/*
		url: http://localhost:3001/admin/tablepagination?page=0
		send by body:
		{
			"sortBy": "price",
			"order": "ASC",
			"category": "tabletas"
			"limit": paginationNumber
		}
	*/

	// filtered by category, and order
	if (category && order && category !== 'default' && order !== 'default') {
		products = await Product.findAndCountAll({
			limit: limit,
			offset: page * limit,
			include: {
				model: Category,
				where: {
					name: category,
				},
			},
			order: [[sortBy, order]],
		});
		return res.json({
			totalPages: Math.floor(products.count / limit),
			products: products.rows,
		});
	}

	// filter by category withour ordered
	if (category && category !== 'default') {
		products = await Product.findAndCountAll({
			limit: limit,
			offset: page * limit,
			include: {
				model: Category,
				attributes: ['name'],
				where: {
					name: category,
				},
			},
			attributes: ['id', 'name', 'priceSpecial', 'price', 'stock'],
		});
		return res.json({
			totalPages: Math.floor(products.count / limit),
			products: products.rows,
		});
	}

	if (order && order !== 'default') {
		products = await Product.findAndCountAll({
			limit: limit,
			offset: page * limit,
			include: {
				model: Category,
			},
			order: [[sortBy, order]],
		});
		return res.json({
			totalPages: Math.floor(products.count / limit),
			products: products.rows,
		});
	}

	// default values without any order
	products = await Product.findAndCountAll({
		limit: limit,
		offset: page * limit,
		include: {
			model: Category,
		},
	});
	return res.json({
		totalPages: Math.floor(products.count / limit),
		products: products.rows,
	});
};

module.exports = tablePagination;
