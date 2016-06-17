var controlMode = false

var radious = 1600

var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  //this should be adjusted by clipping
  camera.position.set(size*1.9+mouse.x, size*1.4, size*1.8+mouse.y);
}

function onDocumentMouseMove( event ) {
  //
}

function onDocumentMouseUp (event) {
  isDragging = true

  var deltaMove = {
          x: event.offsetX-previousMousePosition.x,
          y: event.offsetY-previousMousePosition.y
      };

  event.preventDefault();

    if ( isDragging ) {

        theta = - ( ( event.clientX - previousMousePosition.x ) * 0.5 )
                + deltaMove.x;
        phi = ( ( event.clientY - previousMousePosition.y ) * 0.5 )
              + deltaMove.y;

        phi = Math.min( 180, Math.max( 0, phi ) );

        camera.position.x = radious * Math.sin( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
        camera.position.y = radious * Math.sin( phi * Math.PI / 360 );
        camera.position.z = radious * Math.cos( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
        camera.updateMatrix();

    }

    mouse3D = projector.unprojectVector(
        new THREE.Vector3(
            ( event.clientX / renderer.domElement.width ) * 2 - 1,
            - ( event.clientY / renderer.domElement.height ) * 2 + 1,
            0.5
        ),
        camera
    );
    ray.direction = mouse3D.subSelf( camera.position ).normalize();
//   isDragging = true
// // $(renderer.domElement).on('mousedown', function(e) {
// //     isDragging = true;
// // })
//   // .on('mousemove', function(e) {
//     //console.log(e);
//     var deltaMove = {
//         x: event.offsetX-previousMousePosition.x,
//         y: event.offsetY-previousMousePosition.y
//     };
//
//     if(isDragging) {
//
//         var deltaRotationQuaternion = new THREE.Quaternion()
//             .setFromEuler(new THREE.Euler(
//                 toRadians(deltaMove.y * 1),
//                 toRadians(deltaMove.x * 1),
//                 0,
//                 'XYZ'
//             ));
//
//         cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
//     }
//
    previousMousePosition = {
        x: event.offsetX,
        y: event.offsetY
    };
// // });
}


function toRadians(angle) {
	return angle * (Math.PI / 180);
}

function toDegrees(angle) {
	return angle * (180 / Math.PI);
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2,
	windowHalfY = window.innerHeight / 2,
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	effect.setSize( window.innerWidth, window.innerHeight );
}
