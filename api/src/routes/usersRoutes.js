const { Router } = require('express');
const {check} = require('express-validator');
const { newUser, prueba } = require('../Controllers/users');
const router = Router();


router.post('/',

    [
        check('name', 'The name is obligatory').not().isEmpty(),
        check('surname', 'The surname is obligatory').not().isEmpty(),
        check('address', 'The address is obligatory').not().isEmpty(),
        check('addressNumber', 'The addressNumber is obligatory').not().isEmpty(),
        check('postalCode', 'The postalCode is obligatory').not().isEmpty(),
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
    ],
    newUser

);



router.get('/', prueba);


module.exports = router;

