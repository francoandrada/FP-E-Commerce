const { Sequelize } = require('sequelize');
const { Order, OrderDetail, Product, User } = require('../../db.js');
require('dotenv').config({ path: '.env' });
var nodemailer = require('nodemailer');
//-------------------------  GETS ALL ORDERS  --------------------------------//

const getOrders = async function getOrders(req, res, next) {
	try {
		const allOrders = await Order.findAll({ include: 'orderDetails' });
		res.status(200).json(allOrders);
	} catch (error) {
		next(error);
	}
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
	const email = req.body.email;

	try {
		if (newStatus && newStatus.trim()) {
			const orderById = await Order.findOne({
				where: { orderId: id },
			});
			const updatedStatus = await orderById
				.update({
					status: newStatus,
				})
				.then(async () => {
					const Orders = await Order.findAll({
						where: { orderId: id, status: 'dispatched' },
						attributes: ['userId', 'status'],
					});
					if (Orders) {
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
					
											<p>Your Orden have been successfully dispatched to your location</p>
							
					
													</div>
											</body>
											</html>
					
				 `,
						};

						transporter.sendMail(mailOptions, function (err, data) {
							if (err) {
								console.log('Error ' + err);
							} else {
								console.log('Email sent successfully');
							}
						});
					}
				});
			// res.status(200).json(updatedStatus.dataValues.status);
			//  });
		}
	} catch (error) {
		next(error);
	}
};

//------------------  GETS ALL ORDERS BY USER ID - FOR USERS ACCOUNT  ----------------------//

const findUserOrders = async function findUserOrders(req, res, next) {
	const userId = parseInt(req.params.userid);

	try {
		const allUserOrders = await Order.findAll({
			where: { userId: userId },
			attributes: ['userId', 'ammount', 'status', 'address'],
			include: [
				{
					model: OrderDetail,
					as: 'orderDetails',
					attributes: ['id', 'orderId', 'price'],
					include: [
						{
							model: Product,

							attributes: [
								'id',
								'name',
								'image',
								'priceSpecial',
								'description',
								'weight',
								'stock',
							],
						},
					],
				},
			],
		});

		res.status(200).json(allUserOrders);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getOrders,
	getOrderById,
	modifyOrderStatus,

	findUserOrders,
};
