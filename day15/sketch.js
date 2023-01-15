
//The grid is an 2d array of angles. The brightness of the cell is mapped to the sine of the angle in that cell. Then the angle of each cell is incremented by a small random velocity, so the original pattern slowly disappears.

let grid = [];
let nextGrid = [];  // not using this one
let cnv;
let gsz = 60;
let sz = 20;

function setup() {
  cnv = createCanvas(600, 600);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  makeGrid();
  //showGrid();
  //update();
  //showGrid();
  //frameRate(5)
  noStroke();
  angleMode(DEGREES)
  frameRate(15)
}

function draw(){
  background(0)
  showGrid();
}

function makeGrid() {
  let c = floor(random(3))
  
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
     
      if (c === 0) grid[j][i]= ((j)*40)%360
      else if (c === 1) grid[j][i]= ((i)*40)%360
      
      else if (c === 2) grid[j][i]= ((i+j)*40)%360
      
    }
  }
}
 
 
function showGrid() {
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
    
        let a = map(sin(grid[j][i]),-1,1,0,255)
  
        fill(0,255,0,a)
      rect(i * sz, j * sz, sz, sz);
      // increace  angle in by 1 or random 0,3 or velocity
      grid[j][i]+=floor(random(0,6))
     // print(grid[j][i])
      if(grid[j][i]>360) grid[j][i] =0
      //grid[j][i] = grid[j[i]]%360
    }
  }
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 's') {
    makeGrid()
    saveGif('sine5.gif', 20);
  }
}
