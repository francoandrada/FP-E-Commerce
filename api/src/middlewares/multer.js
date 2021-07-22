var multer = require('multer');
//multer.memoeryStorage()dice multerque primero guardaremos el archivo en la memoria, que puede manipularse para adaptarse a cualquier propósito.
const storage = multer.memoryStorage();
//multer({ storage }).single('image');establece la opción de almacenamiento que usaremos en la aplicación, mientras que .single('image');especifica el nombre del campo al que multerdebe ir cuando busca el archivo.
const multerUploads = multer({ storage }).single('image');
// export { multerUploads };
module.exports = {
	multerUploads,
};
