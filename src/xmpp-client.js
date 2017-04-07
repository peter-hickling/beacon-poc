/**
 * Created by peterhickling on 16/03/2017.
 */
// Started implementing XMPP originally and is no longer user...
let Client = require('node-xmpp-client');

(function (global) {
  'use strict';

  /* Note these are connection details for a local dev server :) */
  var client = new Client({
    websocket: { url: 'ws://localhost:5222' },
    jid: 'client1@localhost',
    password: 'secret',
    preferred: 'PLAIN',
    reconnect: true
  });

  client.on('online', function () {
    console.log('CONNECTED TO WEBSOCKET');
  });

  client.on('stanza', function(stanza) {
    console.log(stanza);
  });

  client.on('error', function (err) {
    console.error(err)
  })
}(this));