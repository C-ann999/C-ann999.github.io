var r = random(0, 100);
var g = random(0, 300);
var b = random(0, 200);




function setup() {
 // put setup code here
  createCanvas(1000,1000);
  background('red');
}

function draw() {
  // put drawing code here
  noStroke();
  fill(255, 180, 255);
  ellipse(500, 500, 503, 403);

  fill(r, g, b);
  ellipse(500, 500, 500, 400);

  fill(200, 225, 220);
  ellipse(600, 400, 50, 50);
  ellipse(650, 450, 45, 46);
  ellipse(640, 400, 15, 15);
  ellipse(650, 415, 15, 13);
  ellipse(625, 375, 10, 10);
  ellipse(645, 390, 5, 5);
}


function mousePressed (){
  r = random(0, 100);
  g = random(0, 300);
  b = random(0, 200);
}
