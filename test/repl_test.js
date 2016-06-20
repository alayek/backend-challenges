// Repl.it testing with challenges
// Todo Change it in a mocha test

var ReplitClient = require('replit-client')

var token = require('../lib/token').generateToken()
// socket creator dependency
var WebSocket = require('ws')
var dir = require('node-dir')
var assert = require('assert')
var colors = require('colors')

var payload = ''
var count = 0

var PADDING = 19

var repl = new ReplitClient('api.repl.it', 80, 'python', token, WebSocket)
console.log('connecting to Python repl ...'.bold)
repl.connect().then(function () {
	console.log('connected to repl'.bold)
	readProgramFiles()
}, function () {
	console.log('failed to connect')
	next()
})

/**
 * Read Python program files and send them to Repl
 * Add every two (test and train files)
 */
function readProgramFiles() {
	dir.readFiles(__dirname + '/../python',{
		match: /.py$/
	}, function (err, content, filename, next) {
		count ++
		if (err) throw err;
		console.log('reading ' + filename)

		if(filename.includes('_solution')) {
			// comment the top line to remove imports
	  	payload = content + "\n# "
			next()
		}
		else if(filename.includes('_test')) {
	  	var fname = filename.substr(filename.lastIndexOf('/') + 1)
			var m = content.lastIndexOf('$$TEST_METHOD$$')
			var testMethod = content.substr(m + PADDING,content.length)
			payload = payload + content + "\n" + testMethod
			sendPayload(payload, fname, next)
	  	payload = ''
	  } else {
			next()
		}
	}, function(err, files){
	  if (err) throw err;
	  console.log('------------------Reading Complete--------------------')
	  console.log('disconnecting repl'.bold)
	  repl.disconnect()
	})
}

/**
 * sendPayload function to evaluate the codes from Repl server
 */
function sendPayload(payload, filename, next) {
	console.log('Sending Payload : ')
	console.log('-------------------------------------------')
	console.log(payload.magenta)
	console.log('-------------------------------------------')

	repl.evaluate(payload,
		{	stdout: function (out) {
			console.log(out)
		}
	}).then(function (result) {
		if(result.error) {
			console.log('error', result.error)
		}
		try {
			assert.strictEqual(result.data, 'None')
			console.log(filename.green + ' passed REPL checks'.green)
		} catch(AssertException) {
			console.log(filename.red + ' failed REPL checks'.red)
		} finally {
			next()
		}
	})
}
