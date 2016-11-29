var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains and localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('public'));

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

var derps = [
  'hissy',
  'pissy',
  'supi'
]

app.get('/nums', function(req, res) {
  res.send(nums);
});

app.get('/ingredients', function(req, res) {
  res.send(ingredients);
})

app.get('/file/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});

app.get('*', function(req, res) {
  res.send(derps);
});

app.listen(3000);
