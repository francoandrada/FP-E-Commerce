const { Router } = require('express');
const user = require('../controllers.js/userController');
const { check } = require('express-validator');

const router = Router();

router.post('/',
	[
		check('name', 'The name is obligatory').not().isEmpty(),
		check('email', 'Add a valid email').isEmail(),
		check('password', 'The password must be at least 6 characters').isLength({
			min: 6,
		}),
	],
	user.newUser
);

module.exports = router;