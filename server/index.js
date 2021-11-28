const express = require('express');
const app = require('express')();
const cors = require('cors');
const { getWeatherData } = require('./apiFunctions');

const PORT = 1774;

app.use(express.json());
app.use(cors());

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
