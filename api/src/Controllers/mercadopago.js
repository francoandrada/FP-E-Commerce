const { Sequelize } = require('sequelize');
const mercadopago = require('mercadopago');
const { Order, OrderDetail, Product, User } = require('../db');

//---------------ACA CREAMOS LA ORDEN------------------
const createOrder = async function createOrder(req, res) {
	const { ammount, status, address, prodCarrito, id } = req.body;
	// console.log(req.body)
	let orderId
	try {
	const order = await Order.create(
			{
				ammount,
				status,
				address: JSON.stringify(address),
			},
			{
				fields: ['ammount', 'status', 'address'],
			}
		).then((order) => {
			ordenId= order.dataValues.orderId
			// console.log('RESPUESTA',order)
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
					
							 let count = productFind.dataValues.stock - prod.qty
					
							await productFind.update({
							stock: 	count
							})
						}
						await order.addOrderDetail(newDetail.dataValues.id);

						var userFind = await User.findOne({
							where: { userId: id },
						});
			

						if (userFind) {
							await order.setUser(userFind.dataValues.userId);
						} else {
							res.status(400).json({ msg: 'Error' });
						}
					})();
				});
			
		})

		// console.log('RESPUESTA',ordenId)
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
			external_reference:  `${ordenId}`,
			notification_url: 'https://ecommerceherni.herokuapp.com/mercadopago/ipn',
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




const ipnMPUpdate = async (req, res, next) => {

	// item_number=userId
	// custom=orderId
	console.log('tigjdfsijfjid')

	// const id = parseInt(req.body.custom);
	// const newStatus = parseInt(req.body.status);

	// try {
	// 	const orderById = await Order.findOne({
	// 		where: { orderId: id },
	// 	});
	// 	if(newStatus===100){
	// 		var updatedStatus = await orderById.update({
	// 			status: 'completed',
	// 		});
	// 	} else if (newStatus<0){
	// 		var updatedStatus = await orderById.update({
	// 			status: 'cancelled',
	// 		});
	// 	} else if (newStatus>=0 && newStatus<100){
	// 		var updatedStatus = await orderById.update({
	// 			status: 'processing',
	// 		});
	// 	}
	// 	res.status(200).json(updatedStatus.dataValues.status);
	// } catch (error) {
	// 	next(error);
	// }
};

module.exports = {
	createOrder,
	ipnMPUpdate
};
