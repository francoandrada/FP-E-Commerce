const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('orderDetail', {
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
