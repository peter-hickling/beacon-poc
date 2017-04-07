/**
 * Created by peterhickling on 02/04/2017.
 */

let express = require("express");
let app = new express();
const addUrl = require("../../environmentParams.json").addUrl;

app.use('/static', express.static(__dirname + '/static'));

app.get("/stuff", (req, res) => {
  let uuid = req.query.uuid;
  console.log("Base url: " + req.get("origin"));
  res.header("Access-Control-Allow-Origin", req.get("origin"))
    .header("Access-Control-Allow-Credentials", true)
    .send(addUrl);

  console.log("Get request processed with uuid: " + uuid);
});

app.get("/", (req, res) => {
  res.sendFile( __dirname + "/" + "index.html" );
});

let server = app.listen(8081, "0.0.0.0", () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at %s:%s", host, port);
});