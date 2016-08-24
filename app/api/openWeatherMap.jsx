var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bf5c4111f04f9d54d64b1b65514ebcf0&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    // ${} syntax is query strings--part of ES6
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
      return axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(res) {
        throw new Error(res.data.message);
    })
  }

}
