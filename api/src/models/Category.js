const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('category', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isVisible: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		},
	});
};
