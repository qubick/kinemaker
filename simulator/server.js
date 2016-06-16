// var cam = require("./cam.js")
// var http = require('http')
var THREE = require('three')

var express = require('express')
var app     = express();
var path    = require('path');

// var __dirname = 'views'
app.use(sendViewMiddleWare)
app.get('/', function(req, res){
  res.sendView('index.html')
  // res.sendFile(path.join('./views/index.html'))
});

function sendViewMiddleWare(req, res, next){
  res.sendView = function(view){
    return res.sendFile(__dirname + '/views/' + view)
  }
  next()
}
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
