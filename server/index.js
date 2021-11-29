const express = require('express');
const app = require('express')();
const cors = require('cors');
const { getWeatherData } = require('./apiFunctions');

const PORT = 1774 || process.env.PORT;

/**
 * TODO:
 *  - is their a db to check valid zip codes
 *    - could load the below csv file into a db to validate the zip code upon submittal
 *    - https://www.unitedstateszipcodes.org/zip-code-database/
 *  - should i add an interface or user input for ease of testing?
 *  -
 */

app.use(express.json());
app.use(cors());

/**
  127.0.0.1:1774/local?zipcode=786664&apikey=d6e58ff519f14d27b44b1920f9a3830e&units=imperial
  127.0.0.1:1774/local
  3 params
    zipcode
    apikey
    units
 */

app.get('/local', (req, res) => {
  const params = {
    zipcode: req.query.zipcode,
    appid: req.query.apikey,
    units: 'imperial',
  };
  getWeatherData(params, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// module.exports = app;
