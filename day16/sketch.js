// using rotate and scale function
// to do the reflection across x and y
// the https://p5js.org/examples/interaction-kaleidoscope.html  example
// in p5 shows it well

let symmetry = 6;
let angle = 360 / symmetry;
let img;
let x = 0;
let sz = 50;
let theta = 0;
let cnv



function setup() {
  cnv =createCanvas(800, 800);
  let cx = (windowWidth-cnv.width)/2
  let cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy)

  angleMode(DEGREES);
  background(0);
  img= createCapture(VIDEO)
  img.hide()
  img.size(150,150)
 // plotmirror();
  //imageMode(CENTER);
  frameRate(10)
  
}

function draw() {
  //background(0)
  
  plotmirror();
 // print(theta)
  x += sz;
  x=x%400
  
  
}
  
function plotmirror() {
  push();
 translate(width / 2, height / 2);

  for (let i = 0; i < symmetry; i++) {
    rotate(angle);
    tint(255,255-(x/2))
    image(img, -x, -x, x / 2, x / 2);
    push();
    scale(1, -1);
    image(img, -x, -x, x / 2, x / 2);
    pop();
  }
  pop();
}


function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 'g') {
    saveGif('reflection.gif', 15);
  }
  if (key === 's') {
    saveCanvas('reflection', 'jpg');
  }
  
}