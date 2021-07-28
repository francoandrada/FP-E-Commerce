const { Product, Brand, Category, User, Image } = require('../db');
const { upload } = require('./uploadController');

async function postProduct(req, res, next) {
	try {
		// console.log('Holaaaaaaa', req.body[1]);
		const {
			name,
			price,
			description,
			weight,
			image,
			stock,
			brandId,
			priceSpecial,
			category,
		} = req.body[0];
		const { images } = req.body[1];
		const producto = await Product.create({
			name,
			price,
			description,
			weight,
			priceSpecial,
			image,
			stock,
			brandId,
		});

		var promis = images.map((i) => {
			return upload(i);
		});

		const result = await Promise.all(promis);

		var createImagesDb = result.map((imgDb) => {
			return Image.findOrCreate({
				where: {
					imageUrl: imgDb,
				},
			});
		});

		var imagesResult = await Promise.all(createImagesDb);
		var filteredImages = imagesResult
			.flat()
			.filter((e) => typeof e !== 'boolean');
		await producto.addImages(filteredImages);
		const newProductComplete = await producto.addCategories(category);
		res.send(newProductComplete);
	} catch (error) {
		next(error);
	}
}

async function putProduct(req, res, next) {
	try {
		const {
			id,
			name,
			price,
			priceSpecial,
			description,
			weight,
			image,
			stock,
			brand,
			category,
			images,
		} = req.body;
		let variable = {};
		const product = await Product.findOne({
			where: {
				id: id,
			},
		});

		var promis = images.map((i) => {
			return upload(i);
		});

		const result = await Promise.all(promis);

		var createImagesDb = result.map((imgDb) => {
			return Image.findOrCreate({
				where: {
					imageUrl: imgDb,
				},
			});
		});

		var imagesResult = await Promise.all(createImagesDb);
		var filteredImages = imagesResult
			.flat()
			.filter((e) => typeof e !== 'boolean');

		product.id = id;
		product.name = name;
		product.price = price;
		product.priceSpecial = priceSpecial;
		product.description = description;
		product.weight = weight;
		product.image = image;
		product.stock = stock;
		await product.save();
		await product.setBrand(brand);
		await product.addImages(filteredImages);
		await product.setCategories(parseInt(category));
		res.send(product);
	} catch (error) {
		next(error);
	}
}
async function postBrand(req, res, next) {
	try {
		const { name, image } = req.body;
		const createBrand = await Brand.create({
			name: name,
			image: image,
		});
		res.json(createBrand);
	} catch (error) {
		next(error);
	}
}
async function putBrand(req, res, next) {
	try {
		const { id, name, image } = req.body;
		let variable = {};
		if (name && name.length > 0) variable.name = name;
		if (image && image.length > 0) variable.image = image;
		const putBrandSelect = await Brand.update(variable, {
			where: {
				id: id,
			},
		});
		res.json(putBrandSelect);
	} catch (error) {
		next(error);
	}
}
async function postCategoryProduct(req, res, next) {
	try {
		const { name } = req.body;
		const categoryCreated = await Category.findOrCreate({
			where: {
				name: name,
			},
		});
		res.send(categoryCreated);
	} catch (error) {
		next(error);
	}
}
async function putCategoryProduct(req, res, next) {
	try {
		const { id, name } = req.body;
		let variable = {};
		if (name && name.length > 0) variable.name = name;
		const putCategorySelect = await Category.update(variable, {
			where: {
				id: id,
			},
		});
		res.json(putCategorySelect);
	} catch (error) {
		next(error);
	}
}
async function getProductCategory(req, res, next) {
	try {
		const name = req.params.name;
		const resAll = await Category.findAll({
			include: Product,
			where: {
				name: name,
			},
		});
		res.send(resAll);
	} catch (error) {
		next(error);
	}
}
async function getProductAll(req, res, next) {
	try {
		const resAll = await Product.findAll({});
		res.send(resAll);
	} catch (error) {
		next(error);
	}
}

async function deleteProduct(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		console.log(id);
		const produc = await Product.findOne({ where: { id: id } });
		await produc.destroy();
		res.json(id);
	} catch (error) {
		next(error);
	}
}
//http://localhost:3001/admin/deletebrand/1
async function deleteBrand(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		// console.log(id);
		// const brand = await Brand.findOne({ where: { id: id } });
		// await brand.destroy();
		await Brand.update(
			{ isVisible: false },
			{
				where: {
					id,
				},
			}
		);

		res.json(id);
	} catch (error) {
		next(error);
	}
}
//http://localhost:3001/admin/deletecategory/9
async function deleteCategory(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		// console.log(id);
		// const category = await Category.findOne({ where: { id:id} });
		// await category.update()
		await Category.update(
			{ isVisible: false },
			{
				where: {
					id,
				},
			}
		);

		res.json(id);
	} catch (error) {
		next(error);
	}
}

// ----------------     GET ID PRODUCT -----------------
const deleteImageProduct = async function deleteImageProduct(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		const image = await Image.findOne({
			where: {
				id: id,
			},
		});
		await image.destroy();
		res.status(200).json(image);
	} catch (error) {
		next(error);
	}
};
////////////////USER//////////
async function getUsers(req, res) {
	try {
		const usersList = await User.findAll();
		return res.status(200).json(usersList);
	} catch (error) {
		res.send(error);
	}
}

async function getUserToEdit(req, res) {
	const userEmail = req.params.email;
	try {
		const user = await User.findOne({ where: { email: userEmail } });
		return res.status(200).json(user);
	} catch (error) {
		res.send(error);
	}
}

async function putUserInfo(req, res, next) {
	console.log(req.body);
	try {
		// console.log(req.body)
		// res.send('ok')
		const newUserInfo = req.body;
		const user = await User.findOne({ where: { email: newUserInfo.email } });
		(user.name = newUserInfo.name),
			(user.surname = newUserInfo.surname),
			(user.email = newUserInfo.email),
			(user.password = newUserInfo.password),
			(user.address = newUserInfo.address),
			(user.addressNumber = newUserInfo.addressNumber
				? parseInt(newUserInfo.addressNumber)
				: null),
			(user.postalCode = newUserInfo.postalCode
				? parseInt(newUserInfo.postalCode)
				: null),
			(user.phone = newUserInfo.phone),
			(user.admin = newUserInfo.admin);
		await user.save();
		res.json(user);
	} catch (error) {
		next(error);
	}
}

async function deleteUser(req, res, next) {
	try {
		// console.log(req.body.email)
		// res.send('ok')
		const userToDelete = req.body.email;
		console.log(req.body.email);
		const user = await User.findOne({ where: { email: userToDelete } });
		await user.destroy();
		res.json(userToDelete);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	putProduct,
	postBrand,
	postProduct,
	putBrand,
	postCategoryProduct,
	putCategoryProduct,
	getProductCategory,
	getProductAll,
	getUsers,
	getUserToEdit,
	putUserInfo,
	deleteUser,
	deleteProduct,
	deleteBrand,
	deleteCategory,
	deleteImageProduct,
};
