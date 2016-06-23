var loader = new THREE.STLLoader()
var jumperLeft = new THREE.Group()
    ,jumperRight = new THREE.Group()
    ,jumperVert = new THREE.Group()

var geometryCylinder = new THREE.CylinderGeometry(5,5,50,20)
    ,geometryCube = new THREE.BoxGeometry(30,30,30)
    ,geometryOuterBox = new THREE.BoxGeometry(50,50,50)
    ,geometryPad  = new THREE.CylinderGeometry(15,15,5,20)
    ,geometryRod  = new THREE.CylinderGeometry(5,5,40,20)
// radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ) {
// var geometry = new THREE.BoxGeometry(1,1,2);
// var material = new THREE.MeshBasicMaterial({color:0xffffff});
var material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        wireframe: true
    });
var material2 = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        wireframe: true
    });

var shaftLeft = new THREE.Mesh(geometryCylinder, material2)
    ,shaftRight = new THREE.Mesh(geometryCylinder, material2)
    ,box  = new THREE.Mesh(geometryOuterBox, material)
    ,cube1 = new THREE.Mesh(geometryCube, material2)
    ,cube2 = new THREE.Mesh(geometryCube, material2)
    ,rod   = new THREE.Mesh(geometryRod, material)
    ,cube3 = new THREE.Mesh(geometryCube, material)
    ,gearLeft, gearRight, gearTop; //empty geometry holder for gear

var bboxBox  = new THREE.Box3().setFromObject(box)

loader.load( './assets/involute_gear.stl', function ( geometry ) {

    gearTop = new THREE.Mesh( geometry, material );
    gearTop.rotation.set(Math.PI/2, 0, 0);
		gearTop.scale.set(1.6, 1.6, 1.6 );
    gearTop.position.y = bboxBox.max.y// - gear.position.y;
    jumperVert.add(gearTop)

		// mesh.castShadow = true;
		// mesh.receiveShadow = true;

    gearLeft = new THREE.Mesh( geometry, material2 );
    gearLeft.rotation.set(0, Math.PI/2, 0);
		gearLeft.scale.set(1.6, 1.6, 1.6 );
    gearLeft.position.x = bboxBox.min.x// - gear.position.y;
    jumperLeft.add(gearLeft)

    gearRight = new THREE.Mesh( geometry, material2 );
    gearRight.rotation.set(0, -Math.PI/2, 0);
    gearRight.scale.set(1.6, 1.6, 1.6 );
    gearRight.position.x = bboxBox.max.x// - gear.position.y;
    jumperRight.add(gearRight)
	} );

shaftLeft.rotation.z += Math.PI/2
shaftRight.rotation.z += Math.PI/2

// console.log(box.min, box.max, box.size())
shaftLeft.position.x -= bboxBox.size().x
cube1.position.x -= bboxBox.size().x //= -bboxBox.size()

shaftRight.position.x += bboxBox.size().x
cube2.position.x += bboxBox.size().x //bboxBox.size()

rod.rotation.y += Math.PI/2
rod.position.y = bboxBox.size().y - 5 //don't know why..

cube3.position.y += bboxBox.size().y
jumperLeft.add(cube1)
          .add(shaftLeft)

jumperRight.add(cube2)
          .add(shaftRight)
// horizontal.add(pad)

jumperVert.add(rod)
          .add(cube3)
// vertical.add(gear)
// };
