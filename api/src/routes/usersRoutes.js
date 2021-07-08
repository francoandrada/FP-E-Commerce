const { Router } = require('express');
const {check} = require('express-validator');

// <<<<<<< HEAD
// const { newUser, prueba } = require('../Controllers/users');
// =======
const { newUser,
        getUsers } = require('../Controllers/users');

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

// <<<<<<< HEAD


// router.get('/', prueba);
// =======
router.get('/userslist', getUsers )



module.exports = router;

