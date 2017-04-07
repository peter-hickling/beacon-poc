/**
 * Created by peterhickling on 17/03/2017.
 */

var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('ws://localhost:5322/', 'echo-protocol');

client.onerror = function() {
  console.log('Connection Error');
};

client.onclose = function() {
  console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
  if (typeof e.data === 'string') {
    console.log("Received: '" + e.data + "'");
    alert(e.data);
  }
};