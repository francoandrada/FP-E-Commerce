const { Sequelize } = require('sequelize');
// const { Product, Favorite } = require('../../db.js');

//-------------------------  CREATES FAVORITES IN DATA BASE  --------------------------------//
const createFavorites = async function createFavorites(req, res) {
	const { userId, prodId } = req.body;

	// if (prodId != undefined) {
	// 	for (let i = 0; i < prodId.length; i++) {
	// 		try {
	// 			const newFavorites = Favorite.findOrCreate({
	// 				where: {
	// 					userId: userId,
	// 					productId: prodId[i].prodId,
	// 				},
	// 			});
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// }
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
	const { userId } = req.body;

	// try {
	// 	const userFavorites = await Favorite.findAll({
	// 		where: {
	// 			userId: userId
	// 		},
	// 		include: [
	// 			{
	// 				model: Product,
	// 			}
	// 		]
	// 	});
	// 	res.json(userFavorites);
	// } catch (error) {
	// 	console.log(error);
	// }
};




module.exports = {
	createFavorites,
    getAllFavorites,
    getUserfavorites,
	
};
