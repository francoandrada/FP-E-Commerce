const { Router } = require('express');
const router = Router();
const { getBasicInfo, createTransaction, getTransactionInfo,getCoinRates } = require('../Controllers/coinpayment');

router.get('/info', getBasicInfo);
router.post('/order', createTransaction);
router.get('/status',getTransactionInfo)
router.get('/rate',getCoinRates)


module.exports = router;
