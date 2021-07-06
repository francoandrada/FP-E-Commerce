const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('product', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DOUBLE(10, 2),
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
		},
		Image: {
			type: DataTypes.STRING,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
