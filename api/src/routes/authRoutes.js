const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const { authUser } = require('../Controllers/auth');


router.post('/',
    [
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
    ],
  authUser
);

module.exports = router;