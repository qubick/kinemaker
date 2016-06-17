// var THREE = require(three);

var size = 1
var observerMode = true

// function init(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(150, window.innerWidth/window.innerHeight, 0.1, 1000);
  // camera.position.set(size*1.9, size*1.4, size*1.8);

  camera.position.x += 0 //+= mouseX * 0.05;
  camera.position.x = Math.max( Math.min( camera.position.x, 2000 ), -2000 );
  // camera.lookAt( scene.position );
  camera.lookAt(new THREE.Vector3(0,0,0));
  scene.add(camera);

  //add background bottom grid
  var grid = new THREE.GridHelper(size*5, size/2);
  grid.position.y = -0.5*size;
  grid.material.opacity = 0.25;
  grid.material.transparent = true;
  scene.add(grid);

  //ground
  // var plane = new THREE.Mesh(
	// new THREE.PlaneBufferGeometry( 40, 40 ),
	// new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
  // );
  // plane.rotation.x = -Math.PI/2;
  // plane.position.y = -0.5;
  // scene.add( plane );
  // plane.receiveShadow = true;

  //add scene ambient light
  scene.add(new THREE.AmbientLight(0x000000));
  var ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);
  var light = new THREE.DirectionalLight(0xFFFFFF, 0.2);
  light.position.set(4*size, 4*size, 7*size);
  scene.add(light);
  var light2 = new THREE.DirectionalLight(0xFFFFFF, 0.2);
  light2.position.set(-7*size, -4*size, -4*size);
  scene.add(light2);

  var headLight = new THREE.PointLight(0xFFFFFF, 0.25);
  scene.add(headLight);
  spotlight = light;

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });
  renderer.setClearColor(0xeeeeee);
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  // document.getElementById('viewport').appendChild( renderer.domElement );

  // controls = new THREE.OrbitControls( camera, renderer.domElement );
  // controls.damping = 0.2;
  // controls.addEventListener( 'change', render );
  // controls.rotateSpeed = 0.3
  // controls.zoomSpeed = 0.3
  // controls.panSpeed = 0.3

  // var renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // document.addEventListener('mousedown', onDocumentMouseDown, false)
  document.addEventListener('mousemove', onDocumentMouseMove, false)
  // document.addEventListener('mouseup', onDocumentMouseUp, false)
  // document.addEventListener('dblclick', onDocumentDoubleClick, false)
  // document.addEventListener('touchstart', onDocumentTouchStart, false)

  // window.addEventListener('resize', onWindowResize, false);

  // if(selection == cam)
  scene.add(box, horizontal);

  camera.position.z = 5;
//}

render()


function render() {
  requestAnimationFrame( render );

  horizontal.rotation.x += 0.05

  renderer.render( scene, camera );
  if(!observerMode)
    renderer.domElement.addEventListener('mousemove', onMouseMove)
}


// function render(){
//   requestAnimationFrame(render);
//   renderer.render(scene, camera);
// }
