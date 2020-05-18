var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

<<<<<<< HEAD
app.get('/jupiter', function (req, res) {
  res.send('Hello Jupiter!\n');
});

=======
>>>>>>> 02f923411332b0f0db2c66b48b4860a784b72a42
app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

<<<<<<< HEAD
app.get('/neptune', function (req, res) {
  res.send('Hello Neptune!\n');
});
=======
>>>>>>> 02f923411332b0f0db2c66b48b4860a784b72a42

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

