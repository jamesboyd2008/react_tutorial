const config = require('./webpack.config.js');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const port = parseInt(process.env.PORT) || 3000;

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(express.static('public'));
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

// app.get('/var/folders/*', function (req, res) {
//   res.sendFile(path.resolve(__dirname));
// });

// this shouldn't work b/c it will download to the bottom of the browser ...
// app.get('/download', function(req, res){
//   res.download(pathToFile, 'fileNameForEndUser.pdf', function(err) {
//     if (!err) {
//       fs.unlink(path);
//     }
//   });
// });

// use sessions!

// /files/* is accessed via req.params[0]
// but here we name it :file
app.get('/files/:file(*)', function(req, res, next){
  var file = req.params.file;
  var path = __dirname + '/files/' + file;

  res.download(path, function(err){
    if (!err) return; // file sent
    if (err && err.status !== 404) return next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  });
});

// app.get('profilepic/:email*', function (req, res) {
//   let email = req.params.email
//   res.sendFile(path.resolve(__dirname));
//   send the buffer? either that or convert it to something else here.
// });

app.get('*', function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'index.html')));
  res.end();
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  return next();
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
