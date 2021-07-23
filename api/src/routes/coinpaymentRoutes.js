const { Router } = require('express');
const router = Router();
const { getBasicInfo, createTransaction, getTransactionInfo,getCoinRates, createOrderCrypto } = require('../Controllers/coinpayment');

router.get('/info', getBasicInfo);
router.post('/order', createTransaction);
router.get('/status',getTransactionInfo)
router.get('/rate',getCoinRates)
router.post('/createorder',createOrderCrypto)



module.exports = router;
