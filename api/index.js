const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	console.log('-----successful database connection-----');
	server.listen(3001, () => {
		console.log('%s listening at 3001');
	});
});
