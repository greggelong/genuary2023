//https://web.archive.org/web/20130709133744/http://www.carolynrobertsart.com/tessellation.html

//https://www.incredibleart.org/lessons/middle/tessell.htm#:~:text=Tessellations%20and%20fractals%20that%20are,of%20different%20shapes%20of%20complexity.

let img;
let sz = 80;
let offs = 40
let clrs;
let cnv;

function preload() {
  img = loadImage("blacktess.png");
  

}

function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth-cnv.width)/2
  let cy = (windowHeight-cnv.heitht)/2
  img.filter(INVERT) // change from blact to white so the tint takes
  clrs = [
    color(90, 61, 43),
    color(117, 200, 174),
    color(255, 236, 180),
    color(229, 119, 30),
    color(244, 161, 39),
    color(251,46,1),
    color(150,61,151),
    color(97,187,70)
  ];
  frameRate(9)
 
}

function draw() {
  background(255, 255, 0);
  
  for (let j = -1; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let myclr = random(clrs);
      printleaf(i,j,sz, myclr);
    }
  }
  
 // noLoop()
}

function printleaf(x, y, sz, clr) {
  
  
  img.resize(sz+36, sz+36);
  tint(clr);
  image(img, x*sz-offs, y*sz);
}

function keyPressed() {
  if (key === 'g') {
   saveGif('suprem.gif', 15);
 }
 if (key === 's') {
   saveCanvas('suprem', 'jpg');
 }
}