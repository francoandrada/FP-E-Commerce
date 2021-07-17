const { Product, Category } = require('../../db');
//http://localhost:3001/admin/categoriescount

const countCategories = async (req, res, next) => {
	const categories = await Category.findAll().then((response) => {
		return response.map(({ name }) => name);
	});

	const productWithCategories = await Product.findAll({
		include: { model: Category },
	});

	const counter = (array, categoryName) => {
		return array.filter(({ categories: [{ name }] }) => name === categoryName)
			.length;
	};

	const count = [];
	let others = 0;
	for (const category of categories) {
		const n = counter(productWithCategories, category);
		if (n !== 1) count.push({ [category]: n });
		else others++;
	}
	if (others) count.push({ others });

	const countOrdered = count.sort(
		(a, b) => Object.values(b) - Object.values(a)
	);

	return res.json(countOrdered);
};

module.exports = countCategories;
