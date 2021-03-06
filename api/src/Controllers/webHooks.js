const { Sequelize } = require('sequelize');
const axios = require('axios');
require('dotenv').config({ path: '.env' });
var nodemailer = require('nodemailer');
const { Order, OrderDetail, Product, User } = require('../db');


const webhooks = async function webhooks(req, res) {
	const { id, email } = req.body;

	const config = {
		headers: { Authorization: `Bearer ${process.env.PROD_ACCESS_TOKEN}` },
	};

	try {
		const { id, email } = req.body;
		console.log('IDDD', id)
		const api = await axios.get(
			`https://api.mercadopago.com/v1/payments/${id}`,
			config
		);
		console.log('APIIIIIII',api)
		const idOrder = parseInt(api.data.external_reference);
		const newStatus = api.data.status_detail;
console.log('HOLA',idOrder, newStatus)
		const orderById = await Order.findOne({
			where: { orderId: idOrder },
		});
		if (newStatus === 'accredited') {
			var updatedStatus = await orderById.update({
				status: 'completed',
			});
		}
		res.status(200).json(updatedStatus.dataValues.status);
	} catch (error) {
		res.send(error);
	}

	console.log(api.data.additional_info.items)
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
		},
	});

	var mailOptions = {
		from: 'hardwarecommerce@gmail.com',
		to: email,
		subject: 'Order Confirmation',
		html: `
		<!DOCTYPE html>
		<html>
		<head>
		<style>
		table {
		  font-family: arial, sans-serif;
		  border-collapse: collapse;
		  width: 100%;
		}

		td, th {
		  border: 1px solid #dddddd;
		  text-align: left;
		  padding: 8px;
		}

		tr:nth-child(even) {
		  background-color: #dddddd;
		}
		</style>
		</head>
						<body style="background-color: #424242; font-family: 'Roboto', sans-serif; ">
		<div style="background-color: #C6C6C6; padding: 10px ">
						<h1 style="color: #FF3C4A; text-align: center;">Hardware Store</h1>
								</div>

		<div style="background-color: white; padding: 10px; margin: 10px 0; ">
		 <p style="text-align: center; color: white;font-weight: 900; background-color: #FF3C4A; padding: 10px;">Thank you for your purchase!</p>
		<h3>ORDER CONFIRMATION </h3>

						<p>Order Number: <span style="  font-weight: 900;">${api.data.order.id}</span></p>
						  <p>Order Date: <span style="  font-weight: 900;">${api.headers.date}</span></p>
								<p>Order Status: <span style="  font-weight: 900;">${api.data.status} ${api.data.status_detail} </span></p>
								<div  style="margin-top: 30px;">
				  <h3>ORDER SUMMARY </h3>
				  </div>

		<div style="background-color: #424242; color: white; padding: 10px;">

		<p>Total Shipping and Handling: <span style="  font-weight: 900;">${api.data.shipping_amount}</span></p>

		<p>Total Tax: <span style="  font-weight: 900;">${api.data.taxes_amount}</span></p>

		<p style="font-size: 20px; font-weight: 900;" >Order Total: ${api.data.transaction_amount} </p>
		</div>

								</div>
						</body>
						</html>

	 `,
	};

	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			console.log('Error ' + err);
		} else {
			res.send(console.log(api));
		}
	});
};

module.exports = {
	webhooks,
};
