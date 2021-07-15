const { Sequelize } = require('sequelize');
const mercadopago = require('mercadopago');
// const { Orders } = require('../db');

// POST Order ----> se crean Order_detail ----> se relaciona con un productId y con una OrderId

// GET Order -----> buscamos en la bd una Order determinada por OrderId y los datos se los guardamos en el preferences de mercadopago

// const getOrder = async function getOrder(req, res) {};

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

module.exports = {
	getOrder,
};
