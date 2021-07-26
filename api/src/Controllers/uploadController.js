const { uploader } = require('../config/cloudinaryConfig');

exports.upload = async (file) => {
	if (file) {
		return await uploader.upload(file).then((result) => {
			return result.url;
		});
	}
};
