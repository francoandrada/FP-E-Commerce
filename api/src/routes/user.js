const { Router } = require('express');
const user = require('../controllers.js/userController');


const router = Router();

router.get('/',
   user.newUser
);


module.exports = router;
