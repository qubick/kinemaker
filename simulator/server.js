var THREE   = require('three');
var ejs     = require('ejs');
var express = require('express');
var app     = express();
var path    = require('path');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/libs', express.static(path.join(__dirname, 'libs')));
app.use('/js', express.static(path.join(__dirname, 'js')));


app.set('views', path.join(__dirname, '/views'));


// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);

module.exports = app
