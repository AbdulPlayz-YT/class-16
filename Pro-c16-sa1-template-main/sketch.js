
var box1, box2, box3;

function setup() {
  createCanvas(600, 400);
  box1 = new Box ();
  box2 = new Box ();
  box3 = new Box ();
}

function draw() {
  background(220);
  box1.show();
  box2.show();
  box3.show();

  box1.setVelocity (3);
  box2.setVelocity (-3);
  box3.setVelocity (2);
}

