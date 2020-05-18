var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/jupiter', function (req, res) {
  res.send('Hello Jupiter!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/neptune', function (req, res) {
  res.send('Hello Neptune!\n');
});

app.listen(8088, function () {
  console.log('Example app listening on port 8088!');
});

