const axios = require('axios');

const getWeatherData = (params, callback) => {
  axios
    .get('api.openweathermap.org/data/2.5/weather/', {
      params,
    })
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      console.log('error retrieving weather data from the api', err);
      callback(err, null);
    });
};

module.exports = {
  getWeatherData,
};
