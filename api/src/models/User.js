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
		},
		surname: {
			type: STRING,
		},
		email: {
			type: STRING,
<<<<<<< HEAD
			allowNull: false,
			unique: true
=======
>>>>>>> main
		},
		password: {
			type: STRING,
		},
		address: {
			type: STRING,
		},
		addressNumber: {
			type: INTEGER,
		},
		postalCode: {
			type: INTEGER,
		},
		phone: {
			type: INTEGER,
		},
		resetLink: {
			type: STRING,
			default: '',
		},
	});
};
