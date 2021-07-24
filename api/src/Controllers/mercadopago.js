const { Sequelize } = require('sequelize');
const mercadopago = require('mercadopago');
const { Order, OrderDetail, Product, User } = require('../db');

//---------------ACA CREAMOS LA ORDEN------------------
const createOrder = async function createOrder(req, res) {
	const { ammount, status, address, prodCarrito, id } = req.body;

	console.log('ADDRESSSS', req.body);

	try {
		await Order.create(
			{
				ammount,
				status,
				address: JSON.stringify(address),
			},
			{
				fields: ['ammount', 'status', 'address'],
			}
		).then((order) => {
			prodCarrito &&
				prodCarrito.forEach((prod) => {
					(async function createOrderDetail() {
						var newDetail = await OrderDetail.create(
							{
								price: prod.price,
								quantity: prod.qty,
							},
							{
								fields: ['price', 'quantity'],
							}
						);

						var productFind = await Product.findOne({
							where: { id: prod.prodId },
						});

						if (productFind) {
							await newDetail.setProduct(productFind.dataValues.id);
						}
						await order.addOrderDetail(newDetail.dataValues.id);

						var userFind = await User.findOne({
							where: { userId: id },
						});
						console.log(userFind);
						try {
							if (userFind) {
								await order.setUser(userFind.dataValues.userId);
							} else {
								res.status(400).json({ msg: 'Error' });
							}
						} catch (error) {
							console.log(error);
						}
					})();
				});
		});

		//--------------ACA SE CREA LA PREFERENCIA PARA MANDAR A MERCADO PAGO-----------------

		let preference = {
			items: prodCarrito.map((i) => ({
				title: i.name,
				unit_price: i.price,
				quantity: i.qty,
				id: i.prodId,
			})),
			back_urls: {
				success: 'http://localhost:3000/webhook',
				failure: 'http://localhost:3001/mercadopago/pagos',
				pending: 'http://localhost:3001/mercadopago/pagos',
			},
			auto_return: 'approved',
		};

		mercadopago.preferences
			.create(preference)
			.then(function (response) {
				console.log(response.body);

				res.send(response.body.init_point);
			})
			.catch(function (error) {
				console.log(error);
			});
	} catch (error) {
		res.status(400).json(error);
	}
};

module.exports = {
	createOrder,
};
