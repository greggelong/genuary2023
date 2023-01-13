
let ln = 1
let w = 10
let h = 30
let cnv;


function setup() {
  cnv=createCanvas(800, 900);
  let cx = (windowWidth-cnv.width)/2
  let cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy)
  noFill()
  stroke(0)
  background(201,152,104)
  strokeWeight(3)
  frameRate(1)
  angleMode(DEGREES)
  
}

function draw() {
  background(201,152,104)
  // print row
  
  
  ln= 2
  for(let l= 1; l<16;l+=2){
    
    drawRow()
    ln+=2
  }
  
  /*
  drawRow()
  stroke(0)
  ln+=2
  if (ln >15){
    print(ln,ln*h)
    background(201,152,104)
    ln =1
    
  }
  */
 // noLoop()
}


function drawRow(){
  // go to the row
  push()
  translate(0,ln*h)
  
  stroke(0)
  //rect(10,ln*h,20,20)
  strokeWeight(10)
  
  beginShape()
  
  let roof= random(0,40)
  stroke(random(0,80))
  for(let i = 10; i<80-roof;i+=1){
    let yoff = random(-5, h*2-15)
    
    vertex(i*w,(ln*h)-yoff)
    
  }
  endShape()
  
   beginShape()
 // translate(0,line*sz)
  stroke(201,152,104)
  strokeWeight(18)
   
  for(let i = 10; i<80-roof;i+=1){
    
    let yoff = random(-5,h*2-15)
    vertex(i*w,(ln*h)-yoff)
    //ellipse(i*sz,line*sz,20,20)
  }
  endShape()
  pop()
}


function keyPressed() {
  if (key === 'g') {
   saveGif('papyr.gif', 15);
 }
 if (key === 's') {
   saveCanvas('papyr', 'jpg');
 }
}