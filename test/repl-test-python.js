var expect = require('chai').expect;

var ReplitClient = require('replit-client');
var token = require('../lib/token').generateToken();
// socket creator dependency
var WebSocket = require('ws');
var dir = require('node-dir');

var payload = '';
var count = 0;

var PADDING = 19;
var isError = false;

var replClient = new ReplitClient('api.repl.it', 80, 'python', token, WebSocket);

describe('Connect to Python REPL Api : ', function(){
  it('Should connect sucessfully', function () {
    expect(replClient).to.be.true;
  });
});
