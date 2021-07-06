const { DataTypes } = require('sequelize');

const { STRING, INTEGER } = DataTypes;
module.exports = (sequelize) => {
	sequelize.define('user', {
		userId: {
			type: INTEGER,
			primaryKey: true,
			unique: true,
			autoIncrement: true,
		},
		name: {
			type: STRING,
			allowNull: false,
		},
		surname: {
			type: STRING,
			allowNull: false,
		},
		email: {
			type: STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: STRING,
			allowNull: false,
		},
		address: {
			type: STRING,
			allowNull: false,
		},
		addressNumber: {
			type: INTEGER,
			allowNull: false,
		},
		postalCode: {
			type: INTEGER,
			allowNull: false,
		},
		phone: {
			type: INTEGER,
			allowNull: true,
		},
	});
};
