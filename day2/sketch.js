let counter= 0
let sz =20
let cnv
function setup() {
  cnv = createCanvas(600,400);
   let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0)
  textAlign(LEFT,TOP)
  
  for (let j = 0; j <20;j++){
    for(let i =0; i<30; i++){
      counter++
      //print(counter)
      noStroke()
      fill(random(50,255),random(50,255),random(50,255))
      textSize(sz/2)
      text(counter,i*sz,j*sz)
    }
  }
}


function draw(){
  
}


function keyTyped() {
  if (key === 's') {
    saveCanvas('tenMin', 'png');
  }
}