const { DataTypes } = require('sequelize');

const { INTEGER, DOUBLE, ENUM } = DataTypes;
module.exports = (sequilize) => {
	sequilize.define('order', {
		orderId: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		ammount: {
			type: DOUBLE,
			allowNull: false,
		},
		status: {
			type: ENUM('pending', 'complete'),
			allowNull: true,
			defaultValue: 'pending',
		},
	});
};
