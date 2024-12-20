


 function setup() {
 // put setup code here
  createCanvas(1300, 1300);
  background('#F9E29C');
  
  let a = createButton('A');
      a.position(50, 50);
  let b = createButton('B');
      b.position(100, 50);
  let c = createButton('C');
      c.position(150, 50);
  let d = createButton('D');
      d.position(200, 50);
  let e = createButton('E');
      e.position(250, 50);
  let f = createButton('F');
      f.position(300, 50);
  let g = createButton('G');
      g.position(350, 50);
  let h = createButton('H');
      h.position(400, 50);
  let i = createButton('I');
      i.position(450, 50);
  let j = createButton('J');
      j.position(500, 50);
  
  let k = createButton('K');
      k.position(50, 100);
  let l = createButton('L');
      l.position(100, 100);
  let m = createButton('M');
      m.position(150, 100);
  let n = createButton('N');
      n.position(200, 100);
  let o = createButton('O');
      o.position(250, 100);
  let p = createButton('P');
      p.position(300, 100);
  let q = createButton('Q');
      q.position(350, 100);
  let r = createButton('R');
      r.position(400, 100);
  let s = createButton('S');
     s.position(450, 100);
  let t = createButton('T');
      t.position(500, 100);
  let u = createButton('U');
      u.position(50, 150);
  let v = createButton('v');
     v.position(100, 150);
  let w = createButton('W');
      w.position(150, 150);
  let x = createButton('X');
      x.position(200, 150);
  let y = createButton('Y');
      y.position(250, 150);
  let z = createButton('Z');
      z.position(300, 150); 
  
  fill ('red');
  stroke ('green');
  strokeWeight(15);

}
  
function draw() {
  circle(30, 30, 10);
}

function mousePressed() {
  stroke ('brightyellow');
  strokeWeight(5);
}

function mouseReleased() {
  stroke('purple');
  fille (lightblue);

  function mouseClicked() {
    fill('pink');
    strokeWeight(10);
  }
}
