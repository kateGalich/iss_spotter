const request = require('request-promise-native');

const fetchMyIP = function () {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function (body) {

  const data = JSON.parse(body);
  return request(`http://ipwho.is/${data.ip}`);
};

const fetchISSFlyOverTimes = function (body) {
  const data = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${data.latitude}&lon=${data.longitude}`);

};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => JSON.parse(body).response);

};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};