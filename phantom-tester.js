'use strict'

var phantom = require('phantom')
// config file containing the repl keys
// for development, create a config file exporting the following :
// module.exports = { token : { msg_mac: 'key', time_created : timestamp}}
var config = require('./config/config')
var express = require('express')
var app = express()
var path = require('path')

var argv = require('yargs')
  .usage('Usage: $0 --port [port]')
  .demand(['port'])
  .argv

var host = 'localhost'
var port = argv.port

// run self contained http server

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/tester.html'))
})

var server = app.listen(port)

var _ph, _page

phantom.create().then(function (ph) {
  _ph = ph
  return _ph.createPage()
}).then(function (page) {
  _page = page
  // print all console messages in the webpage
  _page.property('onConsoleMessage', function (msg) {
    console.log('CONSOLE: ' + msg)
  })
  // print all the error messages in the webpage
  _page.property('onError', function (msg) {
    console.log('phantomjs page error : ' + msg)
  })

  _page.property('onCallback', function (data) {
    console.log('Received response : ' + data.payload)
  })
  return _page
}).then(function (page) {
  return _page.open('http://' + host + ':' + port)
}).then(function (status) {
  console.log(status)
  if (status === 'fail') throw 'Connection Failure'
  return
}).then(function () {
  return _page.evaluate(function (config) {
    // set token
    $('#token').val(JSON.stringify(config.token))
    // set code
    $('#code').val('print "Hello World, FCC!"')
    // evaluate
    return $('button').click()
  }, config)
}).then(function (next) {
  // waiting for the websocket to connect and finish jobs
  // for now we are using this hack. As Node process and phantomJs process are separate, the
  // onCallBack property cannot execute _page.close and _ph.exit within it. See more about
  // the discussion in this issue : https://github.com/amir20/phantomjs-node/issues/292
  setTimeout(function () {
    close()
  }, 10000)
}).catch(function (error) {
  console.log(error)
  close()
})

/**
 * Close Phantom and Server
 */
function close () {
  console.log('Shutting down!')
  _page.close()
  _ph.exit()
  server.close()
}
