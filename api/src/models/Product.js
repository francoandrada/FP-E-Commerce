const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
