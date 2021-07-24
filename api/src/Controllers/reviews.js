const { Sequelize } = require('sequelize');
const { Review, User, Product } = require('../db');

const newReview = async function newReview(req, res) {
	try {
		const { userId, productId, description, stars } = req.body;
		console.log(req.body);
		
			var review = await Review.create(
				{
					description,
					stars,
				},
				{
					fields: ['description', 'stars'],
				}
				).then((review) => {
					
					(async function() {
				
						var userFind = await User.findOne({
							where: { userId: userId },
						});
						console.log(userFind);
						if(userFind){						
								await review.setUser(userFind.dataValues.userId);
						}
						var productFind = await Product.findOne({
							where: { id: productId },
						});

						if (productFind) {
							await review.setProduct(productFind.dataValues.id);
						}
					})();
				// var userFind =  await User.findOne({
				// 	where: { userId: userId },
				// });
				// console.log(userFind)

				// try{
				// 	await review.addUser(userFind.dataValues.userId);
				// } catch(error){
				// 	console.log(error);
				// }
				})
		
	} catch (error) {
		console.log(error);
	}
};
//-----------------------------------
// const newReview = async function newReview(req, res) {
// 	try {
// 		const { userId, productId, description, stars } = req.body;

// 		const userReview = await User.findOne({
// 			where: {
// 				userId,
// 			},
// 		});
// 		const review = await Review.create({

// 			attributes: ['description', 'stars'],
// 			where: {
// 				description,
// 				stars,

// 			}

// 		})
// 		Promise.All([userReview, review]) {
// 			var response = await userReview.addReview( review, 	});
// 		}

// 		res.status(200).json(response);
// 	} catch (error) {
// 		res.send(error);
// 	}
// };

const getAllReviews = async function getAllReviews(req, res) {
	try {
		const allReviews = await Review.findAll();
		return res.status(200).json(allReviews);
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	getAllReviews,
	newReview,
};
