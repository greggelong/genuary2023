/*
"The Recursive Universe" from 1985 by William Poundstone and making a variation of Ulam's coral reefs as described in chapter 8.
This Ulam type CA applies just a single rule while checking the north, south, east, and west neighbors, also called the von Neumann neighborhood. But it also takes into account the generation the cell was born. If the sum of the neighbors divided by the generation = 1 then then that cell is comes alive or redrawn with a color matching its generation. So even older parts of growing coral get recolored or filled in with different colors creating nice variation.


*/


let grid = [];
let nextGrid = [];
let cnv;
let gsz = 160;
let sz = 5;
let gen =1;



function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  
  cnv.position(cx, cy);
  colorMode(HSB,70)
  makeGrid();
  //showGrid();
  //update();
  //showGrid();
  frameRate(15)
  noStroke();
  //saveGif('persianrug2.gif', 15);
}

function draw(){
  showGrid();
  for(let i=0; i<5;i++){ // update multiple times to speed up plotting
  updateGrid();
  gen++
  }
}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
      grid[j][i]=0
    }
  }

  for (let j = 0; j < gsz; j++) {
    nextGrid[j] = [];
    for (let i = 0; i < gsz; i++) {
      nextGrid[j][i] = grid[j][i];
    }
  }
  // place single pixel or mult pixels
  //middle
  grid[80][80]= 1;
  // top left
  grid[20][20]=1
  //top right
  grid[20][140]=1
  //bottom left
  grid[140][20]=1
  //bottom right
  grid[140][140]=1
}

function updateGrid() {
/*
This Ulam type CA applies just a single rule while checking the north, south, east, and west neighbors, also called the von Neumann neighborhood. But it also takes into account the generation the cell was born. If the sum of the neighbors divided by the generation = 1 then then that cell is comes alive or redrawn with a color matching its generation. 


*/
  for (let j = 1; j < gsz - 1; j++) {
    for (let i = 1; i < gsz - 1; i++) {
      //check east west of alive cell
    
   let tn = grid[j+1][i] +grid[j-1][i] +grid[j][i-1] +grid[j][i+1];
    tn = (tn/(gen%360));  // you can use modulo to stop it from growing
    //tn= (tn/(gen%30)); // only grows out 30 generations
   
    if (tn === 1.0){
      
      nextGrid[j][i] = gen+1; // because it came to life in the update
  
      
    }
      }
    }
  
  // copy new grid into old grid

  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      grid[j][i] = nextGrid[j][i];
    }
  }
}

function showGrid() {
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      if (grid[j][i] > 1) {
        fill(grid[j][i]%70, 70, 70); // fill(117,200,174);
      } else {
        fill(0);
      }
      rect(i * sz, j * sz, sz, sz);
    }
  }
}

// this is not working well for gif

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 'g') {
    saveGif('persianrug2.gif', 15);
  }
  if (key === 's') {
    saveCanvas('persianrug', 'jpg');
  }
  
}