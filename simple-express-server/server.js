var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains and localhost


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var nums = [
  'ache',
  'doe',
  'teen',
  'char',
  'ponch'
];

var ingredients = [{'id': 1, 'text': 'Eye of Newt'},
                   {'id': 2, 'text': 'Stanky Leg'},
                   {'id': 3, 'text': 'Turkey Leg'}];

app.get('/nums', function(req, res) {
  res.send(nums);
});

app.listen(6069);
