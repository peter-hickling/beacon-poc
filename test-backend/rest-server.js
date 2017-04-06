/**
 * Created by peterhickling on 02/04/2017.
 */

let express = require("express");
let app = new express();
const addUrl = require("../environmentParams.json").addUrl;

app.get("/stuff", function(req, res) {
  let uuid = req.query.uuid;
  console.log("Base url: " + req.get("origin"));
  res.header("Access-Control-Allow-Origin", req.get("origin"))
    .header("Access-Control-Allow-Credentials", true)
    .send(addUrl);

  console.log("Get request processed with uuid: " + uuid);
});

let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at %s:%s", host, port);
});