var hr, min, sec;

var hrAngleMode, minAngleMode, secAngleMode;

function setup() {
  createCanvas(700,500);

  angleMode(DEGREES);
}

function draw(){
  background("black");

  translate(350, 250);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  secAngleMode = map(sec, 0, 60, 0, 360);
  minAngleMode = map(min, 0, 60, 0, 360);
  hrAngleMode = map(hr%12, 0, 12, 0, 360);
  
  push();
  rotate(secAngleMode);
  stroke(0,255,255);
  strokeWeight(8);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(minAngleMode);
  stroke(0,255,0);
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngleMode);
  stroke(255,255,0);
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

  strokeWeight(2);
  stroke(220, 20, 60);
  point(0, 0);

  strokeWeight(10);
  noFill();

  stroke(0,255,255);
  arc(0, 0, 300, 300, 0, secAngleMode);

  stroke(0,255,0);
  arc(0, 0, 280, 280, 0, minAngleMode);

  stroke(255,255,0);
  arc(0, 0, 260, 260, 0, hrAngleMode);
}