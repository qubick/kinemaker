// var THREE = require(three);

var size = 1
var observerMode = true
var delta = 0.05
var test = 'dcam'
animate()


function animate(){
  requestAnimationFrame( animate );


  if(test === "cam"){
    scene.add(box, camVert, camHorizon);

    camHorizon.rotation.x += 0.05
    camVert.position.y += delta

    if((camVert.position.y > 10) || (camVert.position.y< -10))
    delta *= -1

  } else if(test === "jumper"){

    scene.add(box, jumperRight, jumperLeft, jumperVert);

    jumperRight.rotation.x += 0.05
    jumperLeft.rotation.x -= 0.05
    jumperVert.rotation.y -= 0.05

  } else if(test === "dcam"){
    scene.add(box, dcamHorizon, dcamVert);

    dcamHorizon.rotation.x += 0.05
    dcamVert.rotation.y += delta
    dcamVert.position.y -= delta*2

    if(dcamVert.rotation.y > Math.PI){
      dcamVert.rotation.y - 2*Math.PI
      delta *= -1
    } else if (dcamVert.rotation.y < 0){
      dcamVert.rotation.y + 2*Math.PI
      delta *= -1
    }
  }
  render()
}
