/**
 * Created by peterhickling on 02/04/2017.
 */

let express = require("express");
var app = new express();

app.get("/stuff", function(req, res) {
  let uuid = req.query.uuid;
  console.log(req);
  console.log("Base url: " + req.get("origin"));
  res.header("Access-Control-Allow-Origin", req.get("origin"))
    .header("Access-Control-Allow-Credentials", true)
    .send("http://bit.ly/DriveByAds");

  console.log("Get request processed with uuid: " + uuid);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at %s:%s", host, port)
})