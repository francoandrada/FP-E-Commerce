require('dotenv').config();
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

const watsonSession = async (req, res, next) => {
	const session = await assistant.createSession({
		assistantId: process.env.WATSON_ASSISTANT_ID || '{assistant_id}',
	}, function (error, response) {
		if (error) {
		  return res.send(error);
		} else {
		  return res.send(response);
		}
	  });
	return res.json(session['result']);
};

module.exports = watsonSession;
