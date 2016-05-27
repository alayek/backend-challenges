// Token Generater file for REPL

var crypto;
var token;

module.exports.generateToken = function () {

	try {
		crypto = require('crypto')
		var secret = require('../config/config').secret

		var timeNow = new Date().getTime()
		var hash = crypto.createHmac('sha256', secret)
									.update(timeNow + '')
									.digest('base64')
		token = {msg_mac : hash, time_created : timeNow}
	} catch(err) {
		console.log('crypto support is disabled')
	}

	return token
}


