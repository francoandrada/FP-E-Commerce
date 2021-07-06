const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const { authUser, userAuth } = require('../Controllers/auth');
const authToken = require('../middlewares/authToken');


router.post('/',
    [
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
    ],
  authUser
);

router.get('/',
   authToken,
    userAuth
);


module.exports = router;