const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('product', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		priceSpecial: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
		},
		image: {
			type: DataTypes.STRING,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
