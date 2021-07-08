const { Sequelize } = require('sequelize');
const { Product, Brand, Category } = require('../db');
const { jsonProducts } = require('../../jsonProducts')


// ----------------  Products to Db -----------------
const productsDb = async function setProductsToDb() {
	jsonProducts.forEach(
		({ name, priceNormal, priceSpecial, img, description, weight }) => {
			Product.create(
				{
					name: name,
					price: priceNormal,
					priceSpecial: priceSpecial,
					image: img,
					description: description,
					weight: weight,
					stock: 1,
				},
				{
					fields: [
						'name',
						'price',
						'priceSpecial',
						'image',
						'description',
						'weight',
						'stock',
					],
				}
			);
		}
	);
};

// ----------------  ADD NEW PRODUCT -----------------

const postNewProduct = async function postNewProduct(req, res) {
	try {
		const { name, price, description, weight, image, stock, brand } = req.body;

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
					await newProduct[0].setBrand(brands[i]);
				}
			}
		}

		return res.status(200).json({ message: 'product created succesfully' });
	} catch (error) {
		res.send(error);
	}
};

// ----------------  FIND ALL PRODUCTS -----------------
const getAllProducts = async function getAllProducts(req, res, next) {
	try {
		const allProduct = await Product.findAll();
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
// ----------------     GET BY CATEGORY -----------------
const getCategoryProduct = async function getCategoryProduct(req, res, next) {
	try {
		const category = req.params.category;
		const getCategory = await Product.findAll({
			include: Category,
			where: {
				name: category,
			},
		});
		res.status(200).json(getCategory);
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

module.exports = {
	postNewProduct,
	getProductName,
	orderProducts,
	getAllProducts,
	getBrandProduct,
	getIdProduct,
	getCategoryProduct,
	productsDb,
};
