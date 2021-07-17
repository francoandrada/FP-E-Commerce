const { Sequelize } = require('sequelize');
const { Order } = require('../../db.js');

//-------------------------  GETS ALL ORDERS  --------------------------------//

const getOrders = async function getOrders(req, res, next) {
	try {
		const allOrders = await Order.findAll({ include: 'orderDetails' });
		res.status(200).json(allOrders);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getOrders,
};

//----------------------  GETS ONE ORDER BY ID  ---------------------------//

const getOrderById = async function getOrderById(req, res, next) {
	const id = parseInt(req.params.id);

	try {
		const orderById = await Order.findOne({
			include: 'orderDetails',
			where: {
				orderId: id,
			},
		});
		res.status(200).json(orderById);
	} catch (error) {
		next(error);
	}
};

const modifyOrderStatus = async function modifyOrderStatus(req, res, next) {
	const id = parseInt(req.params.id);
	const newStatus = req.body.status;

	try {
		const orderById = await Order.findOne({
			where: { orderId: id },
		});
		const updatedStatus = await orderById.update({
			status: newStatus,
		});

		res.status(200).json(updatedStatus.dataValues.status);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getOrders,
	getOrderById,
	modifyOrderStatus,
};
