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
			// brandId,
			category,
		} = req.body;
		let variable = {};
		const product = await Product.findOne({
			where: {
				id: id,
			},
		});
		product.id = id
		product.name = name
		product.price = price
		product.description = description
		product.weight = weight 
		product.image = image
		product.stock = stock
		await product.save()
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

async function getUserToEdit (req, res) {
	const userEmail= req.params.email
	try {
		const user = await User.findOne({ where: { email: userEmail } });
		return res.status(200).json(user);
	} catch (error) {
		res.send(error);
	}

};

async function putUserInfo(req, res, next) {
	try {
		// console.log(req.body)
		// res.send('ok')
		const newUserInfo = req.body;
		const user = await User.findOne({ where: { email: newUserInfo.email } });
		user.name= newUserInfo.name,
		user.surname= newUserInfo.surname,
		user.email= newUserInfo.email,
		user.password= newUserInfo.password, 
		user.address= newUserInfo.address,
		user.addressNumber= newUserInfo.addressNumber? parseInt(newUserInfo.addressNumber):null,
		user.postalCode= newUserInfo.postalCode? parseInt(newUserInfo.postalCode): null,
		user.phone= newUserInfo.phone,
		user.admin= newUserInfo.admin
		await user.save()
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
		await user.destroy()
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
	deleteUser
};
