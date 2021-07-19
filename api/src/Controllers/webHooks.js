const { Sequelize } = require('sequelize');
const axios = require('axios');
require('dotenv').config({ path: '.env' });
var nodemailer = require('nodemailer');

const webhooks = async function webhooks(req, res) {
	try {
		const { id } = req.body;

		console.log('HOLA DESDE WEBHOOKS');

		console.log('imprimiendo id', req.body.id);
		const config = {
			headers: { Authorization: `Bearer ${process.env.PROD_ACCESS_TOKEN}` },
		};

		try {
			const api = await axios.get(
				 `https://api.mercadopago.com/v1/payments/${req.body.id}`,
				config
			);
			console.log(api.data.description);
			let obj = {
				description: api.data.description,
				order: api.data.order,
				pay: api.data.payer,
			};
			res.send(obj);
		} catch (error) {
			console.log(error);
		}
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	webhooks,
};

