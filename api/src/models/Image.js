const { DataTypes } = require('sequelize');

const { TEXT } = DataTypes;
module.exports = (sequilize) => {
	sequilize.define('image', {
		imageUrl: {
			type: TEXT,
		},
	});
};
