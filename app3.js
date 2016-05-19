var weather = require('./weather3.js');
var location = require('./location3.js');

var argv = require('yargs')
  .option('location', {
    demand: false,
    alias: 'l',
    describe: 'Location for weather request',
    type: 'string'
  })
  .help('help')
  .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  console.log('Location provided. Fetching current temperature...')
  weather(argv.location).then(function(currentWeather) {
    console.log(currentWeather);
  }).catch(function(error) {
    console.log(error);
  });
} else {
  console.log('Location not provided. Guessing location...');

  location().then(function(location) {
    console.log('Location guess: ' + location.city + '. Fetching current temerature...');
    return weather(location.city);
  }).then(function(currentWeather) {
      console.log(currentWeather);
  }).catch(function(error) {
      console.log(error);
  });
}
