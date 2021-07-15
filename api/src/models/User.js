const { DataTypes} = require('sequelize');

const { STRING, INTEGER, TEXT, BIGINT, BOOLEAN } = DataTypes;
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
		},
		surname: {
			type: STRING,
		},
		email: {
			type: STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: TEXT,
		},
		address: {
			type: TEXT,
		},
		addressNumber: {
			type: INTEGER,
		},
		postalCode: {
			type: INTEGER,
		},
		phone: {
			type: BIGINT,
		},
		resetLink: {
			type: STRING,
			defaultValue: '',
		},
		admin: {
			type: BOOLEAN,
			defaultValue: false,
			allowNull: true
		}
	});
};
