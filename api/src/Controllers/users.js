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
			res.status(400).send({msg:'The user is alredy singed up'});
		}else{
		//bcrypt libreria
		const salt = await bcrypt.genSalt(10);
		const pass = await bcrypt.hash(password, salt);

		const newuser = await User.create({
			name: name,
			surname: surname,
			email: email,
			password: password, 
			password: pass,
			address: address,
			addressNumber: addressNumber,
			postalCode: postalCode,
			phone: phone,
		});
		res.send(newuser);
	}
		
	} catch (error) {
		console.log(error);
	}
};

//---------- SEARCHS ALL USERS FOR ADMIN ONLY --------------

exports.getUsers = async (req, res) => {
	try {
		const usersList = await User.findAll();
		return res.status(200).json(usersList);
	} catch (error) {
		res.send(error);
	}

};

//-------- INITIAL ADMIN USER PRELOAD --------------
exports.adminUserPreload = async ()=>{
		let user = await User.findOrCreate({
			where: { name: 'admin' },
			defaults: {
				surname: 'admin',
				email: 'hardwarecommerce@gmail.com',
				password: 'Admin123', 
				address: 'su casa',
				addressNumber: 9999,
				postalCode: 9999,
				phone: 99999999,
				admin: true
			}
		  });
}

// module.exports = {
// 	adminUserPreload
// };