const { Sequelize } = require('sequelize');
const mercadopago = require('mercadopago');
const { Order, OrderDetail, Product, User } = require('../db');

//---------------ACA CREAMOS LA ORDEN------------------
const createOrder = async function createOrder(req, res) {
	const { ammount, status, prodCarrito, userId } = req.body;

	console.log('userIddd', userId);

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
							// OrderDetail.belongsTo(Product);
							await newDetail.setProduct(productFind.dataValues.id);
						}
						await order.addOrderDetail(newDetail.dataValues.id);

						var userFind = await User.findOne({
							where: { userId: userId },
						});
						console.log('USER ID', userFind.dataValues.userId);
						if (userFind) {
							// // Order.belongsTo(User, { foreignKey: 'userId' });
							await order.setUser(userFind.dataValues.userId);
						}
					})();
				});
		});


		// res.status(200).json('Order created successfully!', productFind);

		//--------------ACA SE CREA LA PREFERENCIA PARA MANDAR A MERCADO PAGO-----------------
		// [
		// 	{ prodId: 5, price: 17399, qty: 3 },
		// 	{ prodId: 1, price: 99999, qty: 2 },
		// ];

		const itemsCarrito = prodCarrito.map((i) => ({
			title: i.name,
			unit_price: i.price,
			quantity: i.qty,
			id: i.prodId,
		}));

		let preference = {
			items: itemsCarrito,

			back_urls: {
				success: 'http://localhost:3000/shoppingcart/success',
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

// app.post("/create_preference", (req, res) => {

// 	let preference = {
// 		items: [{
// 			title: req.body.description,
// 			unit_price: Number(req.body.price),
// 			quantity: Number(req.body.quantity),
// 		}],
// 		back_urls: {
// 			"success": "http://localhost:8080/feedback",
// 			"failure": "http://localhost:8080/feedback",
// 			"pending": "http://localhost:8080/feedback"
// 		},
// 		auto_return: 'approved',
// 	};

// 	mercadopago.preferences.create(preference)
// 		.then(function (response) {
// 			res.json({id :response.body.id})
// 		}).catch(function (error) {
// 			console.log(error);
// 		});
// });

module.exports = {
	createOrder,
};
