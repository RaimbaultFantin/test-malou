const fetch = require('node-fetch');
const config = require('./config/config')
const express = require('express');
const app = express();

app.get('/api/posts/:date', (req, res) => {
  // valid Date format : YYYY-MM-DD
  fetch('https://api.producthunt.com/v1/posts?day=' + req.params.date, config)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.error(err))
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);