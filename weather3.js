var request = require('request');

module.exports = function(location) {
  return new Promise(function(resolve, reject){
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation
    + '&appid=d51b7c7531536df8b94bf1b025311b4a&units=imperial';

    if (!location) {
      return reject('No location provided');
    }
    request({
      url: url,
      json: true
    }, function(error, response, body) {
      if (error) {
        reject('ERROR: Unable to fetch weather');
      } else {
        resolve("It's " + body.main.temp + "\xB0F in " + body.name);
      }
    });
  });
}
