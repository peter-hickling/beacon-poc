/**
 * Created by peterhickling on 17/03/2017.
 */

let WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(5322, function() {
  console.log((new Date()) + ' Server is listening on port 5322');
});

wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false,
  keepalive: true
});

wsServer.on('request', function(request) {
  var connection = request.accept('echo-protocol', request.origin);
  connection.sendUTF("hello");
  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function(message) {
  });
  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});