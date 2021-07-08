const { User } = require('../db');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '.env' })


exports.newUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const {
			name,
			surname,
			email,
			password,
			address,
			addressNumber,
			postalCode,
			phone,
		} = req.body;

		let user = await User.findOne({
			where: {
				email: email,
			},
		});
		if (user) {
			res.status(400).json('The user is alredy singed up');
		}

		const salt = await bcrypt.genSalt(10);
		const pass = await bcrypt.hash(password, salt);

		const newuser = await User.create({
			name: name,
			surname: surname,
			email: email,
			password: pass,
			address: address,
			addressNumber: addressNumber,
			postalCode: postalCode,
			phone: phone,
		});
		res.send(newuser);
	} catch (error) {
		console.log(error);
	}
};

exports.prueba = async (req, res) => {
	var nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });

	var mailOptions = {
		from: 'salomoneanapaulah3@gmail.com',
		to: 'vctrsalomone@gmail.com',
		subject: 'Tu cuenta de instagram ha sido hackeada',
		text: 'RECUPERA TU CONTRASEÑA O PERDERAS TU CUENTA',
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};
