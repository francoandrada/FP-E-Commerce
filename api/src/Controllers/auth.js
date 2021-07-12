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
			res.json({ token });
		} else {
			res.status(401).send({ msg: 'The password is incorrect' });
			return next();
		}
	} catch (error) {
		console.log(error);
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
		 <h2>Please click on given link to reset your password </h2>
		 <a href="url">${process.env.CLIENT_URL}/reset-password/${token}</a>
		 <a href="${process.env.CLIENT_URL}/reset-password/${token}">Reset Password</a>
		 `,
		};

		user.update({ resetLink: token });

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			}
			res.send({ msg: 'Email sent: ' + info.response });
		});
	} catch (error) {
		console.log(error);
	}
};

///RESET PASWORD
exports.resetPassword = async (req, res) => {
	const { resetLink, newPass } = req.body;

	if (!resetLink || !newPass) {
		return res.status(401).json({
			msg: 'Incorrect token or it is expired',
		});
	}
	let jwtPayload;
	let user;
	try {
		jwtPayload = jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY);
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
		console.log('llegó al controller de la API');
		console.log(req.body);
		const { email, password } = req.body;

		let user = await User.findOrCreate({
			where: {
				email: email,
			},
			defaults: {
				email: email,
				password: password,
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
		res.json({ token });
	} catch (error) {
		console.log(error);
	}
};
