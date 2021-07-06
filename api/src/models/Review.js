const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('review', {
		description: {
			type: DataTypes.TEXT,
		},
		stars: {
			type: DataTypes.INTEGER,
		},
	});
};
