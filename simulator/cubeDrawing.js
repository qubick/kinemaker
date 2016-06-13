var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometryCyli = new THREE.CylinderGeometry(1,1,3,100)
    ,geometryCube = new THREE.BoxGeometry(2,2,2);
// radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ) {
// var geometry = new THREE.BoxGeometry(1,1,2);
var material = new THREE.MeshBasicMaterial({color:0xffffff});
var geometryCyli = new THREE.Mesh(geometryCyli, material)
    ,geometryCube = new THREE.Mesh(geometryCube,  material);


var box = new THREE.Box3().setFromObject(geometryCube)
console.log(box.min, box.max, box.size())
geometryCube.position.y += box.size().y

//how to create one object with cyilnder + cube at the same time??
scene.add(geometryCyli, geometryCube);
// scene.add(geometryCube);

camera.position.z = 5;

// function render(){
//   requestAnimationFrame(render);
//   renderer.render(scene, camera);
// }

function render() {
  requestAnimationFrame( render );

        // cube.rotation.x += 0.1;
        // cube.translateZ(0.1);
        // cube.rotation.z += 0.1;

        geometryCube.rotation.y += 0.1
        geometryCyli.rotation.y += 0.1
  renderer.render( scene, camera );
}


render();
