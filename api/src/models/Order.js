const { DataTypes } = require('sequelize');

const { INTEGER, TEXT, ENUM } = DataTypes;
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
			type: ENUM(
				'created',
				'processing',
				'cancelled',
				'completed',
				'dispatched'
			),
			allowNull: true,
			defaultValue: 'created',
		},
		address: {
			type: TEXT,
			allowNull: false,
			defaultValue: 'pick up at the store',
		},
	});
};
