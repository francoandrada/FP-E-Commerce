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
	let Others = 0;
	let n = 0;
	for (const name of brands) {
		if (name !== null) {
			n = counter(productsWithBrand, name);
			if (n !== 1) count.push({ [name]: n });
			else Others++;
		}
	}
	if (Others) count.push({ Others });
	return res.json(count);
};

module.exports = countBrand;
