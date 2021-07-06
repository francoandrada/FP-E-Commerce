const { DataTypes } = require('sequelize');

const { INTEGER, ENUM } = DataTypes;
module.exports = (sequilize) => {
	sequilize.define('order', {
		orderId: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		ammount: {
			type: INTEGER,
			allowNull: false,
		},
		status: {
			type: ENUM('pending', 'complete'),
			allowNull: true,
			defaultValue: 'pending',
		},
	});
};
