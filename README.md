# beacon-poc

**Backend**

- websocket-server.js spins up server to listen on port 5322 for websocket connections and sends message back.
- simple webserver serves up index.html on 8080. This references app.js that is the webserver-client.js plus all of it's 
dependencies bundled into a single file.

**Frontend**

- websocket-client.js opens websocket connection to backend and listens for response.

To run websocket server enter "npm run start".

To run webserver enter "gulp start", this bundles all the js and then serves it up.