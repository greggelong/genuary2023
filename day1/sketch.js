let totalFrames = 120;
let counter = 0;
let sz;
let m = 2;
let cnv;

function setup() {
  cnv = createCanvas(400, 400);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0);
  //frameRate(5)
  colorMode(HSB,totalFrames,300,300)
  sz = 195;
}

function draw() {
  let percent = counter / totalFrames;
  render(percent);
  //print(percent);
  counter++;
  //if(counter == totalFrames){
  // noLoop();
  // }
}

function render(percent) {
  background(0);
  //ellipse(percent*width,height/2,20,20);
  stroke(255);
  noFill();
  strokeWeight(1);
  let angle = percent * TWO_PI;
  translate(width / 2, height / 2);
  makeMult(percent);
  let a = angle*-1
  let x1 = cos(a) * sz;
  let y1 = sin(a) * sz;
  let x2 = cos(a * m) * sz;
  let y2 = sin(a * m) * sz;
  strokeWeight(10)
  stroke(65,300,300);
  line(x1, y1, x2, y2);
  
  let a1 = angle
  let x3 = cos(a1) * sz;
  let y3 = sin(a1) * sz;
  let x4 = cos(a1 * m) * sz;
  let y4 = sin(a1 * m) * sz;
  strokeWeight(10)
  stroke(20, 300, 200);
  line(x3, y3, x4, y4);
}

function makeMult(percent) {
  strokeWeight(1)
  for (let a = 0; a < 360; a += 6) {
    let x1 = cos(radians(a)) * sz;
    let y1 = sin(radians(a)) * sz;
    let x2 = cos(radians(a * m)) * sz;
    let y2 = sin(radians(a * m)) * sz;
    stroke(counter%totalFrames,300,150);
    line(x1, y1, x2, y2);
  }
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  print("bing");
  if (key === "s") {
    const options = {
      units: "frames",
      delay: 0,
    };
    saveGif("cardioid1.gif", totalFrames, options);
  }
}