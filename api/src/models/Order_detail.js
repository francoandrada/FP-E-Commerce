const { DataTypes } = require('sequelize');

const { INTEGER } = DataTypes;
module.exports = (sequilize) => {
	sequilize.define('order_detail', {
		price: {
			type: INTEGER,
			allowNull: false,
		},
		quantity: {
			type: INTEGER,
			allowNull: false,
		},
	});
};
