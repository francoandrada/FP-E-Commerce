const server = require('./src/app.js');
const { productsDb } = require('./src/Controllers/products.js');
const { conn } = require('./src/db.js');

console.log('hola');
// Syncing all the models at once.
conn
	.sync({ force: false })
	.then(() => {
		console.log('-----successful database connection-----');
		server.listen(3001, () => {
			console.log('%s listening at 3001');
		});
	})
	.then(() => productsDb());
