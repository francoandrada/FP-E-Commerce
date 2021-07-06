const { Router } = require('express');
const { check } = require('express-validator');
const auth = require('../controllers.js/authController');

const router = Router();

router.post('/',
	[
		check('name', 'The name is obligatory').not().isEmpty(),
		check('email', 'Add a valid email').isEmail(),
		check('password', 'The password must be at least 6 characters').isLength({
			min: 6,
		}),
	],
	auth.authUser
);

module.exports = router;