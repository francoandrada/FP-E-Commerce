const { Sequelize } = require('sequelize');
const mercadopago = require('mercadopago');
const { Order, OrderDetail, Product } = require('../db');

//---------------ACA CREAMOS LA ORDEN------------------
const createOrder = async function createOrder(req, res) {
	const { ammount, status, prodCarrito } = req.body;
	try {
		var newOrder = await Order.create(
			{
				ammount,
				status,
			},
			{
				fields: ['ammount', 'status'],
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
					})();
				});
		});
		res.status(200).json('Order created successfully!');

		//--------------ACA SE CREA LA PREFERENCIA PARA MANDAR A MERCADO PAGO-----------------
		const itemsCarrito = prodCarrito.map((i) => ({
			title: i.name,
			unit_price: i.price,
			quantity: i.qty,
		}));

		let preference = {
			items: itemsCarrito,

			back_urls: {
				success: 'http://localhost:3001/mercadopago/pagos',
				failure: 'http://localhost:3001/mercadopago/pagos',
				pending: 'http://localhost:3001/mercadopago/pagos',
			},
		};

		mercadopago.preferences
			.create(preference)
			.then(function (response) {
				console.log(response.body);

				res.redirect(response.body.init_point);
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
