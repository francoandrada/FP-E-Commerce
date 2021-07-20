const { Sequelize } = require('sequelize');
const { User, Cart} = require('../db');

//-------------- ACA CREAMOS UN CARRITO ------------------

const createCart = async function createCart(req, res) {
	const { userId, prodId, quantity } = req.body;

    const newCart = Cart.findOrCreate({
        where: { 
            userId: userId,
            prodId: prodId,
            quantity: quantity
        },

    })

};

//---------- ACA BUSCAMOS UN CARRITO SEGUN ID DE USUARIO -----------

const findCart = async function findCart(req, res) {
	const { userId } = req.body;

    const findCart = Cart.findAll({
        where: { 
            userId: userId,
        },

    })

};


module.exports = {
	createCart,
    findCart
};
