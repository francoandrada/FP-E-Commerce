const User = require("../models/User");
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.newUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { email, password } = req.body;


	let user = await User.findOne({ email });
	if (user) {
		res.status(400).json('The user is alredy singed up');
	}

	user = new User(req.body);

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(password, salt);
	try {
		await user.save();
		res.send('User created succesfully');
	} catch (error) {
		console.log(error);
	}
};
