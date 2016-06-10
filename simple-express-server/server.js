var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var nums = [
  'ache',
  'doe',
  'teen',
  'char',
  'ponch'
];

app.get('/nums', function(req, res) {
  res.send(nums);
});

app.listen(6069);
