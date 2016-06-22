var loader = new THREE.STLLoader();

//should load file browser first
var filename = "./assets/slotted_disk.stl" //this is temporal
var stlLoader = function(filename){
  loader.load(filename, function ( geometry ) {
  	var material = new THREE.MeshPhongMaterial(
                    { color: 0xff5533,
                      specular: 0x111111,
                      shininess: 200 } );
  	var mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, - 0.25, 0.6 );
  	mesh.rotation.set( 0, - Math.PI / 2, 0 );
  	mesh.scale.set( 0.5, 0.5, 0.5 );
  	mesh.castShadow = true;
  	mesh.receiveShadow = true;
  	scene.add( mesh );
  } );
}


module.exports.stlLoader = stlLoader
