// exports.cam = function(){
// var Cam = function(){
var cam = new THREE.Group()

  var geometryCylinder = new THREE.CylinderGeometry(1,1,10,100)
      ,geometryCube = new THREE.BoxGeometry(3,3,3)
      ,geometryPad  = new THREE.CylinderGeometry(1,1,0.5,100)
  // radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ) {
  // var geometry = new THREE.BoxGeometry(1,1,2);
  // var material = new THREE.MeshBasicMaterial({color:0xffffff});
  var material = new THREE.MeshBasicMaterial({
          color: 0x00ffff,
          wireframe: true
      });
  var shaft = new THREE.Mesh(geometryCylinder, material)
      ,cube1 = new THREE.Mesh(geometryCube,  material)
      ,cube2 = new THREE.Mesh(geometryCube,  material)
      ,pad   = new THREE.Mesh(geometryCylinder,  material)

  shaft.rotation.z += Math.PI/2
  var box = new THREE.Box3().setFromObject(shaft)

  console.log(box.min, box.max, box.size())
  cube1.position.x += box.size().x/2
  cube2.position.x -= box.size().x/2


  cam.add(cube1)
  cam.add(shaft)
  cam.add(cube2)
  // cam.add(pad)

// };


// if ( 'undefined' !== typeof exports
//     && 'undefined' !== typeof module ) {
// 	module.exports = Cam;
// }
