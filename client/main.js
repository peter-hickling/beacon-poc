/**
 * Created by peterhickling on 04/04/2017.
 */

let notifications = require("./push-notifications");
let client = require("./rest-client");
let beaconScanner = require('./beacon-scanner');
let environmentParams = require("../environmentParams.json");

document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("bluetoothSearch").addEventListener('click', event => {
    beaconScanner.searchForBeacons(environmentParams.nameOfBeacon).then(device => {
      client.get(device.id).then(response => {
        notifications.sendNotification(environmentParams.notificationMessage, response, environmentParams.notificationImage);
      });
    });
  });
});
