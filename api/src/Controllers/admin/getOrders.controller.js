const { Op } = require('sequelize');
const { OrderDetail, Product } = require('../../db');

// http://localhost:3001/admin/listorders?page=1
/*
	body {
		limit: int (size of the page),
		search: ""
	}
*/

const getOrders = async (req, res, next) => {
	let products = {};
	const { limit, search } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);
	const limitToNumber = Number.parseInt(limit);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;

	if (search && search.trim()) {
		products = await OrderDetail.findAndCountAll({
			limit: limitToNumber,
			offset: page * limitToNumber,
			include: {
				model: Product,
				where: {
					name: {
						[Op.iLike]: `%${search.toLowerCase()}%`,
					},
				},
			},
		});

		return res.json({
			totalPages: Math.floor(products.count / limitToNumber),
			products: products.rows,
		});
	}

	products = await OrderDetail.findAndCountAll({
		limit: limitToNumber,
		offset: page * limitToNumber,
		include: { model: Product },
	});

	return res.json({
		totalPages: Math.floor(products.count / limitToNumber),
		products: products.rows,
	});
};

module.exports = getOrders;
