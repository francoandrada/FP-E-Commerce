const { Sequelize } = require('sequelize');
const { Product, User } = require('../db.js');

//-------------------------  CREATES FAVORITES IN DATA BASE  --------------------------------//
const addFavorites = async function addFavorites(req, res) {
	const { userId, prodId } = req.body;
	
	try {
		const userFound = await User.findOne({
				where: {
					userId: userId,
				},
			})

		
			for (let i=0; i<prodId.length; i++){
						
				let prod = await Product.findOne({
					where:{id: prodId[i].id}
					})
					console.log(prodId[i])
					await userFound.addProduct(prod)
							
				}

	
	} catch (error) {
		console.log(error);
	}

		
};


//-------------------------  GETS ALL FAVORITES (FOR ADMIN)  --------------------------------//

const getAllFavorites = async function getAllFavorites(req, res, next) {
	// try {
	// 	const allFavorites = await Favorite.findAll({ include: [
    //         {
    //             model: Product,
    //         }
    //     ] });
	// 	res.status(200).json(allFavorites);
	// } catch (error) {
	// 	next(error);
	// }
};

//----------------------  GETS ONE ORDER BY ID  ---------------------------//

const getUserfavorites = async function getUserfavorites(req, res) {
	const { id } = req.params;

	try {
		const userFavorites = await User.findOne({
			where: {
				userId: id
			},
		});
		const allFavorites = await userFavorites.getProducts()

		res.json(allFavorites);
	} catch (error) {
		console.log(error);
	}
};

//----------------------  UPDATES FAVORITES  ---------------------------//

const updateFavorites = async function updateFavorites(req, res) {
	const { userId, favorites } = req.body;
	
	try {
		const userFound = await User.findOne({
				where: {
					userId: userId,
				},
			})
		const productToRemove = await userFound.getProducts();
		const removed = await userFound.removeProducts(productToRemove)

		for (let i=0; i<favorites.length; i++){
						
			let prod = await Product.findOne({
				where:{id: favorites[i].id}
				})

				await userFound.addProduct(prod)
						
			}
			
		res.status(200).send('favorites updated');
	} catch (error) {
		console.log(error);
	}
};






module.exports = {
	addFavorites,
    getAllFavorites,
    getUserfavorites,
	updateFavorites,
	
};
