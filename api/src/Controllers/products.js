const { Sequelize } = require('sequelize');
const { Product, Brand } = require('../db');

// ----------------  ADD NEW PRODUCT -----------------

const postNewProduct = async function postNewProduct(req, res) {
	try {
		const { name, price, description, weight, Image, stock, brand } = req.body;
		console.log(brand);
		const brands = await Brand.findAll({
			attributes: ['id', 'name', 'image'],
		});

		var newProduct = await Product.findOrCreate({
			where: {
				name,
				price,
				description,
				weight,
				Image,
				stock,
			},
		});
		if (newProduct) {
			for (let i = 0; i < brands.length; i++) {
				if (brands[i].name.toLowerCase() === brand.toLowerCase()) {
					await newProduct[0].setBrand(brands[i]);
				}
			}
		}

		return res.status(200).json({ message: 'product created succesfully' });
	} catch (error) {
		res.send(error);
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

module.exports = {
	postNewProduct,
	getProductName,
	orderProducts,
};
