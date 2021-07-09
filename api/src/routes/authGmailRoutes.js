const express = require('express');
const router = express.Router();
const { authUserGmail, userAuth, forgotPassword, prueba, resetPassword } = require('../Controllers/auth');

const authToken = require('../middlewares/authToken');


router.post('/',
  authUserGmail
);

router.get('/',
   authToken,
    userAuth
);


router.put('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);

module.exports = router;