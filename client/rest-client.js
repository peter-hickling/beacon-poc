/**
 * Created by peterhickling on 02/04/2017.
 */

let request = require('request-promise');
const baseUrl = "http://localhost:8081";

function getRequest(uuid) {
  return request.get(baseUrl + "/stuff?uuid=" + uuid).then(function(result) {
    return result;
  });
}

module.exports = {
  get: getRequest
};