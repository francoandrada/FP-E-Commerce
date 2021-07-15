const { Op } = require('sequelize');
const { Product, Category } = require('../../db.js');

const tablePagination = async (req, res, next) => {
	let products = {};
	const { category, sortBy, order, limit, search } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) page = pageAsNumber;

	/*
		url: http://localhost:3001/admin/tablepagination?page=0
		send by body:
		{
			"sortBy": "name",
			"order": "default", ["ASC", "DESC"]
			"category": "default"
			"limit": paginationNumber
			"search": ""
		}
	*/

	if (category && category !== 'default') {
		if (order && order !== 'default' && search && search.trim().length) {
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
				products: products.rows.filter(({ name }) => name.includes(search)),
			});
		}

		if (order && order !== 'default') {
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

		products = await Product.findAndCountAll({
			limit: limit,
			offset: page * limit,
			include: {
				model: Category,
				where: {
					name: category,
				},
			},
		});
		return res.json({
			totalPages: Math.floor(products.count / limit),
			products: products.rows,
		});
	}

	if (order && search && order !== 'default' && search.trim().length) {
		products = await Product.findAndCountAll({
			limit: limit,
			offset: page * limit,
			include: {
				model: Category,
			},
			where: {
				name: {
					[Op.iLike]: `%${search}%`,
				},
			},
			order: [[sortBy, order]],
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

	if (search && search.trim().length) {
		products = await Product.findAndCountAll({
			limit: limit,
			offset: page * limit,
			include: {
				model: Category,
			},
			where: {
				name: {
					[Op.iLike]: `%${search}%`,
				},
			},
		});
		return res.json({
			totalPages: Math.floor(products.count / limit),
			products: products.rows,
		});
	}

	console.log('default');
	// without any order or sort
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
