// exports.cam = function(){
// var Cam = function(){
// var loader = require('../btnFunctions.js')
var dcamHorizon = new THREE.Group()
    ,dcamVert = new THREE.Group()

var geometryCylinder = new THREE.CylinderGeometry(5,5,120,20)
    ,geometryCube = new THREE.BoxGeometry(30,30,30)
    ,geometryOuterBox = new THREE.BoxGeometry(50,50,50)
    ,geometryPad  = new THREE.CylinderGeometry(12,12,5,20)
    ,geometryRod  = new THREE.CylinderGeometry(5,5,30,20)
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
    ,padTop   = new THREE.Mesh(geometryPad, material)
    ,padLeft  = new THREE.Mesh(geometryPad, material)
    ,padRight = new THREE.Mesh(geometryPad, material)
    ,rod   = new THREE.Mesh(geometryRod, material)
    ,cube3 = new THREE.Mesh(geometryCube, material)
    // ,gear  = loader('../assets/test.stl')

shaft.rotation.z += Math.PI/2
var bboxShaft = new THREE.Box3().setFromObject(shaft)
    ,bboxBox  = new THREE.Box3().setFromObject(box)

// console.log(box.min, box.max, box.size())
cube1.position.x += bboxShaft.size().x/2
cube2.position.x -= bboxShaft.size().x/2

rod.rotation.y += Math.PI/2
rod.position.y += bboxBox.size().y/2 + 10

padLeft.rotation.z += Math.PI/2
padLeft.position.x -= bboxBox.size().x/2 - 5 //pad thickness
padLeft.position.y -= bboxBox.size().y/2 - 15

padRight.rotation.z += Math.PI/2
padRight.position.x += bboxBox.size().x/2 - 5
padRight.position.y += bboxBox.size().y/2 - 15

padTop.scale.set(2, 1, 2)
padTop.position.y += bboxBox.size().y/2 - 5

cube3.position.y += bboxShaft.size().y + bboxBox.size().y
dcamHorizon.add(cube1)
          .add(shaft)
          .add(cube2)
          .add(padLeft)
          .add(padRight)

dcamVert.add(padTop)
        .add(rod)
        .add(cube3)
// };


// if ( 'undefined' !== typeof exports
//     && 'undefined' !== typeof module ) {
// 	module.exports = Cam;
// }
