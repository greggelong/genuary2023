let turn = 60.9 // turning angle controled by mouseX

let bitreenum=0
let tritreenum=0
let srink = 0.66
let theta=0

let sunny;
let cnv;
let output;
let output2


function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth-cnv.width)/2
  let cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy);  
   
  angleMode(DEGREES)

  output = createDiv('this is some text');
  output.style('font-size', '18px');
  output.position(windowWidth/4, 10);

  output2 = createDiv('this is some text');
  output2.style('font-size', '18px');
  output2.position(windowWidth/4, 32);
  frameRate(20)
}

function draw(){
  background(0)
  //print(sin(theta))
  turn =  map(sin(theta),-1,1,12,160,0.1)
  suny = map(sin(theta),-1,1,0,height+200)
  let shine = map(sin(theta),-1,1,255,50)
  background(shine/5)
  //number =728// map(mouseY,0,height,8,728)
  strokeWeight(1)
  stroke(0)
  fill(178,197,178,shine)
  ellipse(width/2,suny,200,200)
  output.html("tri-tree, trinary number: "+tritreenum.toString(3)+" :0 left, 1 right, 2 middle")
  output2.html("bi-tree, binary number: "+bitreenum.toString(2)+" :0 left, 1 right")
  doTree(width/4,tritreenum,3,color(107,142,78,shine));
  doTree(width-width/4,bitreenum,2, color(60,81,72,shine));

  bitreenum = bitreenum%256
  tritreenum =tritreenum%728
  theta=theta%360
  bitreenum++
  tritreenum++
  theta++
  //noLoop
  
}

function doTree(p, n,base,clr){  // position, number, base, color
   
  //number = 80// 26, 80, 242, 728, 2186
  for (let i =0; i<n;i++){
    let instr = i.toString(base);
    turtle(instr,clr,p)
  }
  
}


function turtle(inString, clr,p){
  
  stroke(clr)
  ///let turn = 30; make global
  //let ang =90;
  let instr = inString.split(""); // split
  let sz = 150;
  let x = p;
  let y = height
 // let  x1= x+sz*cos(ang)  // x1 = x + amount * cos (theta)
  //let y1 = y-sz*sin(ang)
  let x1 = x
  let y1 = y -sz*1.5; //trunk lenght
  strokeWeight(sz/9)
  //stroke(255,0,255)
  line(x, y, x1,y1);
  x=x1
  y=y1
  let ang =90
  for (let i =1; i<instr.length;i++){
    if(instr[i] == "1"){
      // turn right
      
      ang -= turn
      //stroke(255,0,0)
      
    }
    else if (instr[i] == "0"){
      // turn left
    
      ang += turn
     // stroke(0,255,0)
    }
    else if (instr[i]=="2"){
       ang = (ang*2 -ang) 
    //  stroke(0,0,255)
             }
    // move forward/
    sz =sz*srink
    x1= x+sz*cos(ang)  // x1 = x + amount * cos (theta)
    y1 = y-sz*sin(ang)  // y1 =y + amount * sin (theta)
    strokeWeight(sz/9)
    line(x, y, x1,y1);
    x=x1
    y=y1
  }
  
}


function keyPressed() {
   if (key === 'g') {
    saveGif('bitriplants', 18);
  }
  if (key === 's') {
    saveCanvas('intersect2', 'jpg');
  }
}
