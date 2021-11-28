const axios = require('axios');

const getWeatherData = (params, callback) => {
  const { zipcode, appid, units } = params;
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${appid}&units=${units}`)
    .then((response) => {
      const { name, weather, main } = response.data;
      const dataObj = {
        city: name,
        conditions: weather[0].description,
        high_temp: main.temp_max,
        low_temp: main.temp_min,
      };
      callback(null, dataObj);
    })
    .catch((err) => {
      console.log('error retrieving weather data from the api', err);
      callback(err, null);
    });
};

module.exports = {
  getWeatherData,
};
