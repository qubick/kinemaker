var THREE = require(three);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(150, window.innerWidth/window.innerHeight, 0.1, 1000);
// var camera = new THREE.PerspectiveCamera(150, 600,400)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var geometryCyli = new THREE.CylinderGeometry(1,1,10,100)
    ,geometryCube = new THREE.BoxGeometry(3,3,3);
// radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ) {
// var geometry = new THREE.BoxGeometry(1,1,2);
var material = new THREE.MeshBasicMaterial({color:0xffffff});
var geometryCyli = new THREE.Mesh(geometryCyli, material)
    ,cube1 = new THREE.Mesh(geometryCube,  material)
    ,cube2 = new THREE.Mesh(geometryCube,  material)
    ,pad   = new THREE.Mesh(geometryCyli,  material)

var box = new THREE.Box3().setFromObject(geometryCyli)

console.log(box.min, box.max, box.size())
cube1.position.y += box.size().y/2
cube2.position.y -= box.size().y/2

//how to create one object with cyilnder + cube at the same time??
scene.add(cube1);
// scene.add(geometryCube);

camera.position.z = 5;


render()


function render() {
  THREE.requestAnimationFrame( render );

  // cube.rotation.x += 0.1;
  // cube.translateZ(0.1);
  // cube.rotation.z += 0.1;

  cube1.rotation.y += 0.1
  geometryCyli.rotation.y += 0.1
  cube2.rotation.y += 0.1

  renderer.render( scene, camera );
}


// function render(){
//   requestAnimationFrame(render);
//   renderer.render(scene, camera);
// }
