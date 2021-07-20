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




const emailPurchase = async function emailPurchase(req, res) {
	try {
		const { email } = req.body;

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
	
			const token = jwt.sign(
				{ id: user.userId, name: user.name },
				process.env.RESET_PASSWORD_KEY,
				{ expiresIn: '6h' }
			);
			var mailOptions = {
				from: 'hardwarecommerce@gmail.com',
				to: email,
				subject: 'Reset your password',
				html: `
				<div>
					<h2>Hello,</h2>
					<p>We've received a request to reset the password for the HardwareStore account associated with ${email}.
					<p>You can reset your passwordd by clicking the link below:</p>
					<a href="${process.env.CLIENT_URL}/reset-password/${token}">Reset Password</a>
					<p>If you did not request a new password, please let us know inmediately by replying to this email.</p>
				</div>
			 
			 `,
			};
	
			user.update({ resetLink: token });
	
			transporter.sendMail(mailOptions, function (err, data) {
				if (err) {
					console.log('Error ' + err);
				} else {
					console.log('Email sent successfully');
				}
			});
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	webhooks,
	emailPurchase
};

