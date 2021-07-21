const { OrderDetail, Product } = require('../../db');

/*
	Order attributes
		+ orderId: integer
		+ ammount: integer
		+ status: emun
			- defaultValue: processing
			- [created, processing, cancelled, completed]
*/

// http://localhost:3001/admin/listorders?page=1
/*
	body {
		limit: int (size of the page)
	}
*/

const getOrders = async (req, res, next) => {
	let products = {};
	const { limit } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;

	products = await Product.findAndCountAll({
		limit,
		offset: page * limit,
		include: { model: OrderDetail },
	});

	return res.json({
		totalPages: Math.floor(products.count / limit),
		products: products.rows,
	});
};

module.exports = getOrders;
