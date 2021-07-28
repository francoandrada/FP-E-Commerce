const { Router } = require('express');
const router = Router();
const { getBasicInfo, createTransaction, getTransactionInfo,getCoinRates, createOrderCrypto,ipnUpdate,getTransactionList } = require('../Controllers/coinpayment');

router.get('/info', getBasicInfo);
router.post('/order', createTransaction);
router.get('/status',getTransactionInfo)
router.get('/rate',getCoinRates)
router.post('/createorder',createOrderCrypto)
router.post('/ipn',ipnUpdate)
router.get('/transactionList',getTransactionList)

module.exports = router;
