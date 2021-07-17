const { Brand, Product } = require('../../db');

// http://localhost:3001/admin/countofbrand

const countBrand = async (req, res, next) => {
	const brands = await Brand.findAll({ attributes: ['name'] }).then(
		(response) => {
			return response.map(({ name }) => name);
		}
	);

	const productsWithBrand = await Product.findAll({
		include: {
			model: Brand,
		},
	});

	const counter = (array, brand) => {
		return array.filter(({ brand: { name } }) => name === brand).length;
	};

	const count = [];
	let others = 0;
	for (const brand of brands) {
		const n = counter(productsWithBrand, brand);
		if (n !== 1) count.push({ [brand]: n });
		else others++;
	}
	count.push({ others });
	return res.json(count);
};

module.exports = countBrand;
