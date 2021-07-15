const { Product, Brand, Category, User } = require('../db');
async function postProduct(req, res, next) {
	try {
		const {
			name,
			price,
			description,
			weight,
			image,
			stock,
			brandId,
			category,
		} = req.body;
		const producto = await Product.create({
			name,
			price,
			description,
			weight,
			image,
			stock,
			brandId,
		});
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
			description,
			weight,
			image,
			stock,
			brandId,
			category,
		} = req.body;
		let variable = {};
		if (name.length > 0) variable.name = name;
		if (price) variable.price = price;
		if (description.length > 0) variable.description = description;
		if (weight) variable.weight = weight;
		if (image.length > 0) variable.image = image;
		if (stock) variable.stock = stock;
		if (brandId) variable.brandId = brandId;
		if (category) variable.category = category;
		const putProductSelect = await Product.update(variable, {
			where: {
				id: id,
			},
		});
		res.send(putProductSelect);
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
            where:{
                name: name
            }
         });
     res.send(resAll)
	} catch (error) {
		next(error);
	}
}
async function getProductAll(req, res, next) {
	try {
		const resAll = await Product.findAll({ include: Category });
		res.send(resAll);
	} catch (error) {
		next(error);
	}
}

async function getUsers (req, res) {
	try {
		const usersList = await User.findAll();
		return res.status(200).json(usersList);
	} catch (error) {
		res.send(error);
	}

};

module.exports = {
	putProduct,
	postBrand,
	postProduct,
	putBrand,
	postCategoryProduct,
	putCategoryProduct,
	getProductCategory,
	getProductAll,
	getUsers
};
