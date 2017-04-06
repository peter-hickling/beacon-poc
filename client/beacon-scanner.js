/**
 * Created by peterhickling on 04/04/2017.
 */

searchForBeacons = (nameOfDevice) => {
  if(nameOfDevice) {
    return navigator.bluetooth.requestDevice({
      filters: [{
        name: nameOfDevice
      }]
    })
  } else {
    return navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
    })
  }
};

module.exports = {
  searchForBeacons: searchForBeacons
};