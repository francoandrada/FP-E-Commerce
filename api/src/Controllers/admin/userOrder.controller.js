const { Op } = require('sequelize');
const { User, Order } = require('../../db');

// http://localhost:3001/admin/usersandhisorders?page=0 (post);

const userOrder = async (req, res, next) => {
	let products = {};
	const { limit, search, filter } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);
	const limitToNumber = Number.parseInt(limit);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;

	if (filter && search && search.trim() && filter !== 'all') {
		products = await Order.findAndCountAll({
			limit: limitToNumber,
			offset: page * limitToNumber,
			include: { model: User },
			where: {
				status: filter,
			},
		});
		return res.json({
			message: 'here',
			totalPages: Math.ceil(products.count / limitToNumber),
			products: products.rows.filter(({ user: { name } }) =>
				name.includes(search)
			),
		});
	}

	if (filter && filter !== 'all') {
		products = await Order.findAndCountAll({
			limit: limitToNumber,
			offset: page * limitToNumber,
			include: { model: User },
			where: {
				status: filter,
			},
		});
		return res.json({
			message: 'here',
			totalPages: Math.ceil(products.count / limitToNumber),
			products: products.rows,
		});
	}

	if (search && search.trim()) {
		products = await Order.findAndCountAll({
			limit: limitToNumber,
			offset: page * limitToNumber,
			include: {
				model: User,
				where: {
					name: {
						[Op.iLike]: `%${search.toLowerCase()}%`,
					},
				},
			},
		});
		return res.json({
			message: 'here',
			totalPages: Math.ceil(products.count / limitToNumber),
			products: products.rows,
		});
	}

	products = await Order.findAndCountAll({
		limit: limitToNumber,
		offset: page * limitToNumber,
		include: {
			model: User,
		},
	});

	return res.json({
		totalPages: Math.ceil(products.count / limitToNumber),
		products: products.rows,
	});
};

module.exports = userOrder;
