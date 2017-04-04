/**
 * Created by peterhickling on 04/04/2017.
 */

let notifications = require("./push-notifications");
let client = require("./rest-client");

client.get("101").then(function(response) {
  console.log(response);
  notifications.sendNotification("Lots of lovely adds here", response);
});
