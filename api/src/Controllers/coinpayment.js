const Coinpayments = require('coinpayments');
const { response } = require('express');
const { COINPAYMENT_API_PUBLIC, COINPAYMENT_API_SECRET, COINPAYMENT_MERCHAND_ID } = process.env;

const CoinpaymentsCredentials = {
	key: '736e355aacd8db0db04f226da8d268fe22b3b87733de4ebec978c9c78893fe75',
	secret: COINPAYMENT_API_SECRET,
};
const client = new Coinpayments(CoinpaymentsCredentials);

// Get your basic account information.
const getBasicInfo = async (req, res) => {
	console.log('entró a getInfo');
	const info = await client.getBasicInfo();
	console.log(info);
	res.json(info);
};

// Create transaction
const createTransaction = async (req, res) => {
	const CoinpaymentsCreateTransactionOpts = {
		currency1: 'ARS',
		currency2: 'LTCT',
		amount: 100000,
		buyer_email: 'meursault.1986@gmail.com',
		buyer_name: 'Nicolas Meursault',
		// address?: string,
		// item_name?: string,
		// item_number?: string,
		// invoice?: string,
		// custom?: string,
		// ipn_url?: string,
		// success_url?: string,
		// cancel_url?: string
	};

	const order = await client.createTransaction(
		CoinpaymentsCreateTransactionOpts
	);
	console.log(order);
	res.json(order);
};

//Get Transaction Info
const getTransactionInfo = async (req, res) => {
	const CoinpaymentsGetTxOpts = {
		txid: 'CPFG3DREYPWLFQMBWYKNZKPTOK',
		full: 0,
	};

	const status = await client.getTx(CoinpaymentsGetTxOpts);
	console.log(status);
	res.json(status);
};

//Get actual Rates.
const getCoinRates = async (req, res) => {
	const CoinpaymentsRatesOpts = {
		short: 1,
		accepted: 2
	};
	const rates = await client.rates(CoinpaymentsRatesOpts);
    console.log(rates);
	res.json(rates);
};

//Get POS.
// const createPos = async (req, res) => {
//     const {amount} = req.body

//     const pos = `https://www.coinpayments.net/index.php?cmd=_pos&reset=1&merchant=${COINPAYMENT_MERCHAND_ID}&item_name=Order+Payment&currency=ARS&allow_currency=1&amountf=${amount}`
// 	const rates = await client.rates(CoinpaymentsRatesOpts);
//     console.log(rates);
// 	res.json(rates);
// };



module.exports = {
	getBasicInfo,
	createTransaction,
	getTransactionInfo,
    getCoinRates
};
