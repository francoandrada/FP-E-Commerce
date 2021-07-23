require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
	{
		logging: false,
		native: false,
	}
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Role, User, Category, Brand, Order, OrderDetail, Cart, Review } =
	sequelize.models;

Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Order.hasMany(OrderDetail, {
	foreignKey: 'orderId',
});
Product.hasMany(OrderDetail, {
	foreignKey: 'productId',
});
OrderDetail.belongsTo(Product);

User.hasMany(Cart, {
	foreignKey: 'userId',
});
Product.hasMany(Cart, {
	foreignKey: 'productId',
});
Cart.belongsTo(Product);
Cart.belongsTo(User, {
	foreignKey: 'userId',
});

Product.belongsToMany(Category, {
	through: 'category_product',
	foreignKey: 'product_id',
});
Category.belongsToMany(Product, {
	through: 'category_product',
	foreignKey: 'category_id',
});

Brand.hasMany(Product, { foreignKey: 'brandId' });
Product.belongsTo(Brand, { foreignKey: 'brandId' });


Product.belongsToMany(User, { through: 'favorites' });
User.belongsToMany(Product, { through: 'favorites' });


// Product.belongsToMany(User, {
// 	through: 'review',
// 	foreignKey: 'productId',
// });
// User.belongsToMany(Product, {
// 	through: 'review',
// 	foreignKey: 'userId',
// });


// 1---------------> N
// User -----------> Review
User.hasMany(Review, {foreignKey: 'userId'});
Review.belongsTo(Product, {foreignKey: 'userId'});
// 1---------------> N
// Product -----------> Review
Product.hasMany(Review, {foreignKey: 'productId'});
Review.belongsTo(Product, {foreignKey: 'productId'});


module.exports = {
	...sequelize.models,
	conn: sequelize,
};
