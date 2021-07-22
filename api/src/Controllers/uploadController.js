const { Sequelize } = require('sequelize');

const upload = async function upload(req, res) {
	// console.log('req.body :', req.body);
	console.log('req.file : ', req.file);
};

module.exports = {
	upload,
};
