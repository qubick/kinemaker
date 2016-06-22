// var gui = new DAT.GUI({
//     height : 5 * 32 - 1
// });

var FizzyText = function() {
  this.message = 'dat.gui';
  this.speed = 0.8;
  this.displayOutline = false;
  this.explode = function() { };
  // Define render logic ...
};

window.onload = function() {
  var text = new FizzyText();
  var gui = new DAT.GUI();
  // gui.add(text, 'message');
  gui.add(text, 'speed', -5, 5)
  //   .onFinishedChange(function(e){
  //   console.log("done changing: ", e)
  // });
  gui.add(text, 'displayOutline');
  gui.add(text, 'explode');

  // gui.add(text, 'position');
  // gui.add(params, 'interation').onFinishChange(function(){
  //     // refresh based on the new value of params.interation
  // });

  // create btn manually
  // var btn = document.createElement("LoadSTL")
  // var t   = document.createTextNode("Load STL")
  // btn.appendChild(t)
  // document.body.appendChild(btn)
};
