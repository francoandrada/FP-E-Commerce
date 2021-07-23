const { Order, Product, User, OrderDetail } = require('../../db');

const getAllDataAboutAnOrder = async (req, res, next) => {
	const id = req.params.id;
	const idAsNumber = Number.parseInt(id);

	const orderDetails = await Order.findOne({
		where: {
			orderId: idAsNumber,
		},
		include: [
			{
				model: User,
				required: true,
			},
			{
				model: OrderDetail,
				required: true,
				include: { model: Product },
				where: {
					orderId: idAsNumber,
				},
			},
		],
	});
	return res.json(orderDetails);
};

module.exports = getAllDataAboutAnOrder;
