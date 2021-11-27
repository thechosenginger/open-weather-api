const express = require('express');
const app = require('express')();
const cors = require('cors');

const PORT = 1337 || process.env.PORT;

app.usse(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
