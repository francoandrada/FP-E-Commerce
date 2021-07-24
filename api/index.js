const server = require('./src/app.js');
const { productsDb } = require('./src/Controllers/products.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn

<<<<<<< HEAD
	.sync({ force: false})
=======

	.sync({ force: false })

>>>>>>> main

	.then(() => {
		console.log('-----successful database connection-----');
		server.listen(3001, () => {
			console.log('%s listening at 3001');
		});
	})
	.then(() => productsDb());
