// import express
var express = require('express');
// build our express app
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pp_main');
mongoose.Promise = global.Promise;
mongoose.set('debug', true)

var bodyParser = require('body-parser');

// set our port
var port = process.env.PORT || 8080;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
// set up our routers
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/lib'));

app.listen(port, function(event) {
  console.log("Server running on port " + port);
});

module.exports = app;
