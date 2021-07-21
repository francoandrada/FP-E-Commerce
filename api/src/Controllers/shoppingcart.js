const { Sequelize } = require('sequelize');
const { User, Cart, Product} = require('../db');

//-------------- ACA CREAMOS UN CARRITO ------------------

const createCart = async function createCart(req, res) {
	const { userId, prodId } = req.body;
	console.log('bodyyyy', req.body, 'CHHSHSHSH');
	if (prodId != undefined) {
		for (let i = 0; i < prodId.length; i++) {
			try {
				const newCart = Cart.findOrCreate({
					where: {
						userId: userId,
						productId: prodId[i].prodId,
						qty: prodId[i].qty,
					},
				});
				console.log('FINNNNNN');
			} catch (error) {
				console.log(error);
			}
		}
	}
};

//---------- ACA BUSCAMOS UN CARRITO SEGUN ID DE USUARIO -----------

const findCart = async function findCart(req, res) {
	const { userId } = req.body;

	console.log('iiiiddd', req.body, userId);
	try {
		const findCart = await Cart.findAll({
			where: {
				userId: userId
			},
			attributes: {
				exclude: ['createdAt', 'updatedAt', "id", "userId", "productId"]
			},
			include: [
				{
					model: Product,
				}
			]
		});
		res.json(findCart);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createCart,
	findCart,
};
