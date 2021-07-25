require('dotenv').config();
const { Router } = require('express');

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const authenticator = new IamAuthenticator({
	apikey: process.env.WATSON_ASSISTANT_APIKEY,
});

const assistant = new AssistantV2({
	version: '2019-02-28',
	authenticator: authenticator,
	url: process.env.WATSON_ASSISTANT_URL,
});

const router = Router();
const routerHelper = require('../helpers/routerHelper');
const watsonSession = require('../Controllers/watsonAssistant/watsonSession');
const watsonMessage = require('../Controllers/watsonAssistant/watsonMessage');

router.get('/session', routerHelper(watsonSession));
router.post('/message', routerHelper(watsonMessage));

module.exports = router;
