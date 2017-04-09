# beacon-poc
**Build Process**

The build process involves packaging up all the client code with all of it's dependencies in a bundle. This is outputted to the static folder so it's ready to be served by the express backend server.

**Backend**

- express http server that serves up the single page index.html.
- listens for get requests and responds with advertising goodies.

**Frontend**

- appBundle.js searches for BLE beacons on button press. Once found it makes an async get with the beacons UUID to the backend. On response it opens a notification with the response content.

**Running App**

To run the backend server enter "npm run start".
