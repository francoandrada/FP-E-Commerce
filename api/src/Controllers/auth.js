const { User } = require('../db');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });
var nodemailer = require('nodemailer');

exports.authUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const { email, password } = req.body;

		let user = await User.findOne({
			where: {
				email: email,
			},
		});
		if (!user) {
			res.status(401).send({ msg: 'The user does not exist' });
		}

		if (bcrypt.compareSync(password, user.password)) {
			console.log('antes del token');
			const token = jwt.sign(
				{
					id: user.userId,
					name: user.name,
				},
				process.env.SECRET,
				{
					expiresIn: '8h',
				}
			);

			res.send({ token, user });
		} else {
			res.status(401).send({ msg: 'The password is incorrect' });
		}
	} catch (error) {
		console.log('ERRORORROOR', error);
	}
};

exports.userAuth = async (req, res, next) => {
	res.json({ user: req.user });
};

///FORGOT PASWORD
exports.forgotPassword = async (req, res) => {
	const { email } = req.body;
	let user = await User.findOne({
		where: {
			email: email,
		},
	});
	if (!user) {
		res.status(400).send({ msg: "The user doesn't exist" });
	}

	try {
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

			<!DOCTYPE html>
			<html>
			<head>
			</head>
			<body style="background-color: #424242; margin: 1rem 3rem; font-family: 'Roboto', sans-serif; color: white">
			<div style="background-color: #C6C6C6; padding: 10px ">
							<h1 style="color: #FF3C4A; text-align: center;">Hardware Store</h1>
									</div>
									<div  style="background-color: #303030; padding: 30px">
				 <h2>Hello,</h2>
				 <p style=" margin: 30px;">We've received a request to reset the password for the HardwareStore account associated with ${email}.
				 <p style=" margin: 30px;">You can reset your passwordd by clicking the link below:</p>
				 <a style="background-color: #FF3C4A;  color: black;  padding: .5rem 1rem; margin: 30px; text-decoration: none"
				href="${process.env.CLIENT_URL}/reset-password/${token}">Reset Password</a>
				 <p style=" margin: 30px;">If you did not request a new password, please let us know inmediately by replying to this email.</p>
				</div>
			</body>
			</html>
		
		 
		 `,
		};

		user.update({ resetLink: token });

		transporter.sendMail(mailOptions, function (err, data) {
			if (err) {
				console.log('Error ===> ' + err);
			} else {
				console.log('Email sent successfully');
			}
		});
	} catch (error) {
		console.log(error);
	}
};

///RESET PASWORD
exports.resetPassword = async (req, res) => {
	const { resetLink, newPass } = req.body;
	console.log(req.body);
	if (!resetLink || !newPass) {
		return res.status(401).json({
			msg: 'Incorrect token or it is expired',
		});
	}

	let user;
	try {
		let jwtPayload = jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY);
		user = await User.findOne({ where: { resetLink } });
	} catch (error) {
		console.log(error);
		return res.status(401).json({ msg: 'Something went wrong' });
	}

	const salt = await bcrypt.genSalt(10);
	const pass = await bcrypt.hash(newPass, salt);

	user.password = pass;
	user.save();

	res.send({ msg: 'pasword change' });
};

exports.authUserGmail = async (req, res) => {
	try {
		const emailBody = req.body.email;
		const passwordBody = req.body.password;

		let user = await User.findOrCreate({
			where: {
				email: emailBody,
			},
			defaults: {
				email: emailBody,
				password: passwordBody,
			},
		});
		const token = jwt.sign(
			{
				id: user.userId,
				email: user.email,
			},
			process.env.SECRET,
			{
				expiresIn: '8h',
			}
		);

		res.send({ token, user });
	} catch (error) {
		 console.log(error);
	}
};
