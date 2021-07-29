const { Sequelize } = require('sequelize');
const { Cart, Product} = require('../db');

//-------------- ACA CREAMOS UN CARRITO ------------------

const createCart = async function createCart(req, res) {
	const { userId, prodId } = req.body;
	console.log(req.body)
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

//----------- ELIMINATE SHOPPING CART -----------

const deleteCart = async function deleteCart(req, res) {
	const { userId } = req.body;
	try {
		
		let cartDestroy = await Cart.destroy({
				where: {
					userId: userId,

				},
				attributes: ['createdAt', 'updatedAt', "id", "qty", "productId"]
		
				});
			
		res.status(200).send('cart deleted');
	} catch (error) {
		console.log(error);
	}
};


// const deleteCart = async function deleteCart(req, res) {
// 	const { userId, cartToDelete } = req.body;
// 	try {
		
// 		cartToDelete.forEach((item) => {
// 			(async function deleteinstCart(){
// 				let itemDestroy = await Cart.destroy({
// 					where: {
// 						userId: userId,
// 						productId: item.id
// 					},
// 					attributes: ['createdAt', 'updatedAt', "id", "qty"]
		
// 					});
	
// 				})();

// 			})
			
// 		res.status(200).send('cart deleted');
// 	} catch (error) {
// 		console.log(error);
// 	}
// };


//----------- UPDATE SHOPPING CART -----------

const updateCart = async function updateCart(req, res) {
	const { userId, cart } = req.body;
	
	try {
		
		let cartDestroy = await Cart.destroy({
				where: {
					userId: userId,

				},
				attributes: ['createdAt', 'updatedAt', "id", "qty", "productId"]
		
				}).then((destroyed) => {
					if (cart != undefined) {
						for (let i = 0; i < cart.length; i++) {
								const newCart = Cart.findOrCreate({
									where: {
										userId: userId,
										productId: cart[i].id,
										qty: cart[i].qty,
									},
								});
							}
					}
				})
			
		res.status(200).send('cart updated');
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createCart,
	findCart,
	deleteCart,
	updateCart
};
