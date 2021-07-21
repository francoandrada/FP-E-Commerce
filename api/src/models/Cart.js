const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('cart', {
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
