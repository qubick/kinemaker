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
  gui.add(text, 'message');
  gui.add(text, 'speed', -5, 5);
  gui.add(text, 'displayOutline');
  gui.add(text, 'explode');
};
