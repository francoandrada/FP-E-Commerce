const { Router } = require('express');
const { upload } = require('../Controllers/uploadController');
const router = Router();

router.post('/', upload);

module.exports = router;
