const { User } = require('../db');
const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

exports.newUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { name, surname, email, password, address, addressNumber, postalCode, phone } = req.body;

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
            surname: surname,
            email: email,
            password: pass,
            address: address,
            addressNumber: addressNumber,
            postalCode: postalCode,
            phone: phone
        });
        res.send(newuser)

    } catch (error) {
        console.log(error)
    }
}





