const User = require("../models/User");
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.newUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { email, password, name } = req.body;

        let user = await User.findOne({
            where:{
                email:email
        }});
        if(user){
            res.status(400).json('The user is alredy singed up')
        }
    
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);

        const newuser = await User.create({
            name: name,
            email: email,
            password: pass
        });
        res.send(newuser)

    } catch (error) {
        console.log(error)
    }
};
