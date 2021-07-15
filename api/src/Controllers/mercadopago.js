const { Sequelize } = require('sequelize');
const mercadopago = require('mercadopago');
const { Order, OrderDetail, Product } = require('../db');

//desde front BUY ---> dispatch ---- action GENERAR_ORDEN ----> manda al back la info de los productos
// {id de cada prod, total-price, qty} ----->  ruta POST newOrder ----> genera en bd la nueva Order
// 1. id prod --- relaciona con Order_detail  (prod-Order_detail) (buscar productos y relacionarlos con una orden detail)
// 2. Order_detail -- Order (todas las order details generan una order)

// Order.create {
// 	ammount: total
// 	status: created
// // } ---->

const getOrder = async function getOrder(req, res) {
	let preference = {
		items: [
			{
				title: 'Mi producto',
				unit_price: 100,
				quantity: 1,
			},
		],
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
};

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
	} catch (error) {
		res.status(400).json(error);
	}
};

module.exports = {
	getOrder,
	createOrder,
};
