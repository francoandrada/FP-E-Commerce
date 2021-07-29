const { Brand } = require('../../db');

const brandsWithPagination = async function getBrands(req, res) {
	const pageAsNumber = Number.parseInt(req.query.page);
	const LIMIT = 5;

	const brands = await Brand.findAndCountAll({
		limit: LIMIT,
		offset: LIMIT * pageAsNumber,
	});
	return res.json({
		totalPages: Math.floor(brands.count / LIMIT),
		brands: brands.rows,
	});
};

module.exports = brandsWithPagination;
