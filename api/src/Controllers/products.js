const { Sequelize } = require('sequelize');
const { Product, Brand, Category, Image,Review } = require('../db');
const { jsonProducts } = require('../../jsonProducts');
const {getAvergedStars} = require ('../Controllers/reviews')

// ----------------  Products to Db -----------------
const productsDb = async function setProductsToDb() {
	jsonProducts.forEach(
		({
			name,
			priceNormal,
			priceSpecial,
			img,
			description,
			weight,
			brand,
			category,
		}) => {
			(async function creatProd() {
				var pr = await Product.findOrCreate({
					where: {
						name: name,
						price: priceNormal,
						priceSpecial: priceSpecial,
						image: img,
						description: description,
						weight: weight,
						stock: 3,
					},
				}).then((product) => {
					(async function createBrandProd() {
						var brandDb = await Brand.findOrCreate({
							where: { name: brand },
						});
						await product[0].setBrand(brandDb[0]);
					})();
					(async function createCategoryProd() {
						var categoryDb = await Category.findOrCreate({
							where: { name: category },
						});
						await product[0].addCategories(categoryDb[0]);
					})();
					(async function createImageProd() {
						var imageDb = await Image.findOrCreate({
							where: { imageUrl: img },
						});
						await product[0].addImage(imageDb[0]);
					})();
				});
			})();
		}
	);
};

// ----------------  ADD NEW PRODUCT -----------------

const postNewProduct = async function postNewProduct(req, res) {
	try {
		const { name, price, description, weight, image, stock, brand, category } =
			req.body;

		const brands = await Brand.findAll({
			attributes: ['id', 'name', 'image'],
		});

		var newProduct = await Product.findOrCreate({
			where: {
				name,
				price,
				description,
				weight,
				image,
				stock,
			},
		});
		if (newProduct) {
			for (let i = 0; i < brands.length; i++) {
				if (brands[i].name.toLowerCase() === brand.toLowerCase()) {
					var response = await newProduct[0].setBrand(brands[i]);
				}
			}
			const productComplete = await response.addCategories(category);
			res.json(productComplete);
		}
		// return res.status(200).json({ message: 'product created succesfully' });
	} catch (error) {
		res.send(error);
	}
};

// ----------------  FIND ALL PRODUCTS -----------------
// producto con brnadId y category
const getAllProducts = async function getAllProducts(req, res, next) {
	try {
		const allProduct = await Product.findAll({ include: Category });
		res.status(200).json(allProduct);
	} catch (error) {
		next(error);
	}
};
// ----------------     GET ID PRODUCT -----------------
const getIdProduct = async function getIdProduct(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		const IdProduct = await Product.findOne({
			include: [{ model: Brand }, { model: Category }, { model: Image }],
			where: {
				id: id,
			},
		});
		res.status(200).json(IdProduct);
	} catch (error) {
		next(error);
	}
};
// ----------------     GET BY BRAND -----------------
const getBrandProduct = async function getBrandProduct(req, res, next) {
	try {
		const brand = req.params.name;
		const getBrand = await Product.findAll({
			include: Brand,
			where: {
				name: brand,
			},
		});
		res.status(200).json(getBrand);
	} catch (error) {
		next(error);
	}
};

// ----------------  SEARCH PRODUCTS BY NAME -----------------

const getProductName = async function getProductName(req, res) {
	const productName = req.params.name;

	try {
		productFound = await Product.findAll({
			where: {
				name: { [Op.iLike]: '%' + productName + '%' },
			},
		});

		if (productFound.length !== 0) {
			return res.status(200).json(productFound);
		} else {
			return res
				.status(404)
				.send({ message: 'Product not found or does not exist' });
		}
	} catch (error) {
		res.send(error);
	}
};

// ----------------  ORDER PRODUCTS BY PRICE -----------------
// This endpoint receives two params type:DESC/ASC (descendent or ascendant) and orderBy:price
// Since type is variable we could ad other option as Name, Brand, etc

const orderProducts = async function orderProducts(req, res, next) {
	try {
		const type = req.params.type;
		const orderby = req.params?.orderby.toUpperCase();

		orderedProducts = await Product.findAll({
			order: [[type, orderby]],
		});
		return res.status(200).json(orderedProducts);
	} catch (error) {
		next(error);
	}
};

const getAllCategories = async function getAllCategories(req, res, next) {
	try {
		const allCategories = await Category.findAll();

		res.status(200).json(allCategories);
	} catch (error) {
		next(error);
	}
};

// http://localhost:3001/products/catalog?category=pc&brand=asus&order=descending&page=1
const getFilteredProducts = async function getFilteredProducts(req, res, next) {
	//req.query = { category: 'pc', brand: 'asus', price: 'descending', page: '1' }

	try {
		const { category, brand, order_type, order_dir, page, qty, stock } = req.query;

		//esto llegará por query
		const pageNumber = page || 1;

		let allProduct = await Product.findAll({
			include: [{ model: Category }, { model: Brand }, {model: Review, attributes: ['stars']}],
		});

		
		let result = [];


		function filter() {
			let allProduct1 = allProduct;
			if (category) {
				allProduct1 = allProduct.filter(
					(product) =>
						product.categories[0].name === category ||
						product.categories.length === 0
				);
			}
			if (brand) {
				allProduct1 = allProduct1.filter(
					(product) => product.brand.name === brand
				);
			}
			if (stock === 'true') {
				allProduct1 = allProduct1.filter((product) => product.stock >= 1);
			}
			if (stock === 'false') {
				allProduct1 = allProduct1.filter((product) => product.stock <= 0);
			}

			if (order_type === 'price' && order_dir === 'ascending') {
				allProduct1.sort(function (a, b) {
					if (a.price > b.price) {
						return 1;
					}
					if (a.price < b.price) {
						return -1;
					}
					// a must be equal to b
					return 0;
				});
			}

			if (order_type === 'price' && order_dir === 'descending') {
				allProduct1.sort(function (b, a) {
					if (b.price > a.price) {
						return -1;
					}
					if (b.price < a.price) {
						return 1;
					}
					// a must be equal to b
					return 0;
				});
			}

			// const result = reviews.reduce((a, b) => ( a.stars + b.stars ))
			const reducerRating = (a, b) => ( a.stars + b.stars )
			const starsAvg = (reviews)=>{
				if(reviews.length>0){
				return reviews.reduce(reducerRating)/reviews.length}
				return 0
			}

			if (order_type === 'rating' && order_dir === 'ascending') {
				allProduct1.sort(function (a, b) {
					if (starsAvg(a.reviews) > starsAvg(b.reviews)) {
						return 1;
					}
					if (starsAvg(a.reviews) < starsAvg(b.reviews)) {
						return -1;
					}
					// a must be equal to b
					return 0;
				});
			}

			if (order_type === 'rating' && order_dir === 'descending') {
				allProduct1.sort(function (b, a) {
					if (starsAvg(b.reviews) > starsAvg(a.reviews)) {
						return -1;
					}
					if (starsAvg(b.reviews) < starsAvg(a.reviews)) {
						return 1;
					}
					// a must be equal to b
					return 0;
				});
			}

			let respuesta = {
				products: allProduct1.slice((pageNumber - 1) * qty, pageNumber * qty),
				length: allProduct1.length,
			};

			return respuesta;
		}

		let result1 = await filter();

		res.status(200).json(result1);
		// const allProduct = await Product.findAll({ include: Category });
		// res.send('Nico');
	} catch (error) {
		next(error);
	}
};

module.exports = {
	postNewProduct,
	getProductName,
	orderProducts,
	getAllProducts,
	getBrandProduct,
	getIdProduct,
	getAllCategories,
	productsDb,
	getFilteredProducts,
	// getCategoryProduct,
};
