// exports.cam = function(){
var Cam = function(){
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

};
