const { User, Order } = require('../../db');

const userOrder = async (req, res, next) => {
	let userAndOrders = {};
	const { limit } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);
	const limitToNumber = Number.parseInt(limit);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;

	userAndOrders = await User.findAndCountAll({
		limit: limitToNumber,
		offset: page * limitToNumber,
		include: {
			model: Order,
		},
	});

	return res.json({
		totalPages: Math.floor(userAndOrders.count / limitToNumber),
		products: userAndOrders.rows,
	});
};

module.exports = userOrder;
