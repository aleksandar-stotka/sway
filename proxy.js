const express = require('express');
const request = require('request');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/proxy/:url', (req, res) => {
  const url = `https://${req.params.url}`;
  request(url).pipe(res);
});

app.listen(3001, () => {
  console.log('Proxy server running on port 3001');
});
