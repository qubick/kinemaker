// var cam = require("./cam.js")
// var http = require('http')
var THREE   = require('three');
var ejs     = require('ejs');
var express = require('express');
var app     = express();
var path    = require('path');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/libs', express.static(path.join(__dirname, 'libs')));
app.use('/js', express.static(path.join(__dirname, 'js')));


app.set('views', path.join(__dirname, '/views'));


// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);


// const PORT = 3000
//
// function handleRequest(req, res){
// 	console.log(req.method)
//
// 	if(req.method == "POST"){
// 		console.log('post')
// 		res.end('eneded up post')
// 	}
//
// 	if(req.method == "GET"){
// 		console.log('get')
//
// 		/*req.on('data', function(data){
//
// 		})*/
// 		res.end('endded up get')
// 	}
// }
//
// var server = http.createServer(handleRequest)
// server.listen(PORT, function(){
// 	console.log("Server listening on: http://localhost: %s", PORT)
// })

module.exports = app
