// var THREE = require(three);

var size = 1
var observerMode = true
var delta = 0.3
var test = 'jumper'
animate()


function animate(){
  requestAnimationFrame( animate );

  scene.add(vertical);

  if(test === "cam"){
    scene.add(box, horizontal);

    horizontal.rotation.x += 0.05
    vertical.position.y += delta

    if((vertical.position.y > 10) || (vertical.position.y< -10))
    delta *= -1
  }

  else if(test === "jumper"){

    scene.add(box, right, left);

    right.rotation.x += 0.05
    left.rotation.x -= 0.05
    vertical.rotation.y += 0.05
  }
  render()
}
