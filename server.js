
const fetch = require('node-fetch');
const config = require('./config/config')
const express = require('express');
const app = express();


app.get('/api/posts/:date', async (req, res) => {
  // valid Date format : YYYY-MM-DD
  await fetch('https://api.producthunt.com/v1/posts?day='+req.params.date, config)
    .then(response => response.json())
    .then(json => res.send(json))
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);