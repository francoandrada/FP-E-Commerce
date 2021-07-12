const { Product, Category } = require('../../db');
// to make it work uncomment the pagination line in routes index
// implemantation details on ../../routes/pagination
// http://localhost:3001/pagination?page=2&category=tabletas&order=ASC

const pagination = async (req, res, next) => {
	const LIMIT = 3;
	let products = {};
	const { category, order } = req.query;
	const pageAsNumber = Number.parseInt(req.query.page);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) page = pageAsNumber;

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
			order: [['price', order]],
		});
		return res.json({
			totalPages: Math.floor(products.count / LIMIT),
			products: products.rows,
		});
	}

	if (category !== undefined && category !== 'default') {
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
			include: Category,
			order: [['price', order]],
		});
		return res.json({
			totalPages: Math.floor(products.count / LIMIT),
			products: products.rows,
		});
	}

	products = await Product.findAndCountAll({
		limit: LIMIT,
		offset: page * LIMIT,
		include: Category,
	});
	return res.json({
		totalPages: Math.floor(products.count / LIMIT),
		products: products.rows,
	});
};

module.exports = pagination;
