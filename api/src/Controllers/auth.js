const { User } = require('../db');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
require('dotenv').config({ path: '.env' })


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
			res.status(400).json('The user doesnt exist');
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
			res.status(401).json('The password is incorrect');
			return next();
		}
	} catch (error) {
		console.log(error);
	}
};


exports.userAuth = async (req, res, next) => {
    res.json({user: req.user})
  
  }