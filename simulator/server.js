// var cam = require("./cam.js")
var http = require('http')


const PORT = 8080

function handleRequest(req, res){
	console.log(req.method)

	if(req.method == "POST"){
		console.log('post')
		res.end('eneded up post')
	}

	if(req.method == "GET"){
		console.log('get')
		/*req.on('data', function(data){

		})*/
		res.end('endded up get')
	}
}

var server = http.createServer(handleRequest)
server.listen(PORT, function(){
	console.log("Server listening on: http://localhost: %s", PORT)
})

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(150, window.innerWidth/window.innerHeight, 0.1, 1000);
//
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
//
//
// var cam = new Cam()
//     // pad = pad.scaleY(0.9)
//
//
// //how to create one object with cyilnder + cube at the same time??
// scene.add(cam);
// // scene.add(geometryCube);
//
// camera.position.z = 5;
//
// // function render(){
// //   requestAnimationFrame(render);
// //   renderer.render(scene, camera);
// // }
//
// function render() {
//   requestAnimationFrame( render );
//
//   // cube.rotation.x += 0.1;
//   // cube.translateZ(0.1);
//   // cube.rotation.z += 0.1;
//
//   cube1.rotation.y += 0.1
//   geometryCyli.rotation.y += 0.1
//   cube2.rotation.y += 0.1
//
//   renderer.render( scene, camera );
// }
//
//
// render();
