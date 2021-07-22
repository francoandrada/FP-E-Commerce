import { config, uploader } from 'cloudinary';
const cloudinaryConfig = () =>
	config({
		CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
		API_KEY: process.env.CLOUDINARY_API_KEY,
		API_SECRET: process.env.CLOUDINARY_API_SECRET,
	});
export { cloudinaryConfig, uploader };
