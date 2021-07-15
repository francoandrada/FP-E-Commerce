const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('order_detail', {
        price: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}; 