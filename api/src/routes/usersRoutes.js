const { Router } = require('express');
const {check} = require('express-validator');

// <<<<<<< HEAD
// const { newUser, prueba } = require('../Controllers/users');
// =======
const { newUser,
        } = require('../Controllers/users');

const router = Router();


router.post('/',

    [
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
    ],
    newUser

);

// router.get('/userslist', getUsers )



module.exports = router;

