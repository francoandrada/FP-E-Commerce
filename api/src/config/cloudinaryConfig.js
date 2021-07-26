const { config, uploader } = require('cloudinary');

require('dotenv').config({ path: '.env' });

const cloudinaryConfig = (req, res, next) => {
	config({
		CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
		API_KEY: process.env.CLOUDINARY_API_KEY,
		API_SECRET: process.env.CLOUDINARY_API_SECRET,
	});
	next();
};
//export { cloudinaryConfig, uploader };
module.exports = {
	cloudinaryConfig,
	uploader,
};
