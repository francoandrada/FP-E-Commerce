const { Users } = require('../db');
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.authUser = async (req, res) => {
    //valido que el pass y el email sean el mismo
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        //verifico que exista ese email
        const user = await Users.findOne({ where: { email: email } });
        if (!user) {
            res.status(401).json('Invalid email');
        }

        //verifico que exista esa password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid Password.')


        //genero un jwt
        const token = jwt.sign({
            id: user.id,
            name: user.name
        }, process.env.SECRET, {
            expiresIn: '8h'
        });

        res.json({ token })
    } catch (error) {
        console.log(error)
    }
}


