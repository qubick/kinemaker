// exports.cam = function(){
// var Cam = function(){
// var loader = require('../btnFunctions.js')
var horizontal = new THREE.Group()
    ,vertical = new THREE.Group()

  var geometryCylinder = new THREE.CylinderGeometry(10,10,120,100)
      ,geometryCube = new THREE.BoxGeometry(30,30,30)
      ,geometryOuterBox = new THREE.BoxGeometry(50,50,50)
      ,geometryPad  = new THREE.CylinderGeometry(15,15,5,100)
      ,geometryRod  = new THREE.CylinderGeometry(10,10,5,100)
  // radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ) {
  // var geometry = new THREE.BoxGeometry(1,1,2);
  // var material = new THREE.MeshBasicMaterial({color:0xffffff});
  var material = new THREE.MeshBasicMaterial({
          color: 0x00ffff,
          wireframe: true
      });

  var shaft = new THREE.Mesh(geometryCylinder, material)
      ,box  = new THREE.Mesh(geometryOuterBox, material)
      ,cube1 = new THREE.Mesh(geometryCube, material)
      ,cube2 = new THREE.Mesh(geometryCube, material)
      ,pad   = new THREE.Mesh(geometryCylinder, material)
      ,rod   = new THREE.Mesh(geometryRod, material)
      // ,gear  = loader('../assets/test.stl')

  shaft.rotation.z += Math.PI/2
  var bbox = new THREE.Box3().setFromObject(shaft)

  // console.log(box.min, box.max, box.size())
  cube1.position.x += bbox.size().x/2
  cube2.position.x -= bbox.size().x/2

  pad.rotation.z += Math.PI/2
  // pad.scale.x = 0.5
  // pad.position.y   += bbox.size().x

  horizontal.add(cube1)
  horizontal.add(shaft)
  horizontal.add(cube2)
  horizontal.add(pad)
  // cam.add(pad)


  vertical.add(rod)
// };


// if ( 'undefined' !== typeof exports
//     && 'undefined' !== typeof module ) {
// 	module.exports = Cam;
// }
