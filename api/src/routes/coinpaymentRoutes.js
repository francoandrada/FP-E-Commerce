const { Router } = require('express');
const router = Router();
const { getBasicInfo, createTransaction, getTransactionInfo,getCoinRates, createOrderCrypto,ipnUpdate } = require('../Controllers/coinpayment');

router.get('/info', getBasicInfo);
router.post('/order', createTransaction);
router.get('/status',getTransactionInfo)
router.get('/rate',getCoinRates)
router.post('/createorder',createOrderCrypto)
router.post('/ipn',ipnUpdate)


module.exports = router;
