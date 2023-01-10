let cnv;

let clrs;

function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.width) / 2;
  cnv.position(cx, cy);

  frameRate(1);
  angleMode(DEGREES);
  clrs = [


    color(255,165,0),
    
    color(255,165,0),
    
    color(255,165,0),
    color(0,0,255),
    color(0,0,255),
    color(0,0,255),
    color(0,0,255),
    color(255,0,0)
  ];
}

function draw() {
  background(255,229,153);
  //maketri();
  makerect();
  makeBlocks();
  push()
  scale(0.3)
  makerect()
  makeBlocks()
  makeline()
  makeline()
  makeline()
  
  pop()
  makeline();
  makeline();
  makeline();
  makeline();
   push()
  translate(width-width/3,height-height/3)
  scale(0.4)
  makerect()
  makeBlocks()
  makeline()
  makeline()
  makeline()
  
  pop()
   push()
  translate(40,height-height/3)
  scale(0.4)
  makerect()
  makeBlocks()
  makeline()
  makeline()
  makeline()
  
  pop()
  
   

   push()
  translate(605,40)
  scale(0.2)
  makerect()
  makeBlocks()
  makeline()
  makeline()
  makeline()
  
  pop()
}

function makearc() {
  noStroke();
  push();
  translate(random(width), random(height));
  rotate(random(360));
  fill(random(clrs));
  let sz = random(150, 350);

  arc(0, 0, sz, sz, 180, 360, PIE);
  pop();
}

function maketri() {
  noStroke();
  fill(255, 255, 0);
  triangle(
    random(width),
    random(height),
    random(width),
    random(height),
    random(width),
    random(height)
  );
}

function makeline() {
  push()
  translate(width/2,height/2)
  rotate(random(360))
  stroke(random(clrs));
  strokeWeight(10);
  let x = random(-300,300)
  let y = random(-300, 300)
  let len = random(300,800)
  line(x,y,x+len,y+len)
  pop()
}

function makeBlocks() {
  // 5 bblocks
  noStroke()
  let off = 20;
  push();

  translate(width / 2, height / 2);
  rotate(45);
  let x1 = random(-300, -100);
  let y1 = random(-300, -200);
  for (let i = 0; i < 5; i++) {
    let l = 100 + random(400);
    let w = 20 + random(60);
    clr = random(clrs);
    fill(clr);
    rect(x1 + off, y1, w, l);

    off += w * random(1, 2);
  }
  pop();
}

function makerect() {
  push();
  noStroke();
  translate(width / 2, height / 2);
  rotate(random(30, 60));

  let x1 = random(-300, -100);

  let y1 = random(-300, 30);

  fill(0);
  rect(x1, y1, 500, 300);
  pop();
}

function keyPressed() {
  if (key === 'g') {
   saveGif('suprem.gif', 15);
 }
 if (key === 's') {
   saveCanvas('suprem', 'jpg');
 }
}