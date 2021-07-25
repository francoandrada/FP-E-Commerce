const { DataTypes} = require('sequelize');

const { INTEGER,  TEXT, ENUM } = DataTypes;
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
			type: ENUM('created', 'processing', 'cancelled', 'completed'),
			allowNull: true,
			defaultValue: 'processing',
		},
		address: {
			type: TEXT,
			allowNull: false,
			defaultValue: 'pick up at the store'
		},
	});
};
