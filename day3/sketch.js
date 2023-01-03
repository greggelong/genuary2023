let grid = [];
let nextGrid = [];
let cnv;
let gsz = 200;
let sz = 3;
let img;


function preload(){
   img = loadImage('gregL7.jpg')
}

function setup() {
  cnv = createCanvas(600, 600);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  
  cnv.position(cx, cy);
  img.resize(600,600)
  img.filter(GRAY)
  image(img,0,0)
  makeGrid();
  //showGrid();
  //update();
  //showGrid();
  frameRate(3)
  noStroke();
}

function draw(){
  showGrid();
  updateGrid();
  if (frameCount% 12==0){
    makeGrid()
  }
}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
      //print(img.get(i*sz,j*sz))
      
      if(img.get(i*sz,j*sz)[0] >127){
        
       // print("hello")
        grid[j][i] = 1
      } else{
        grid[j][i] = 0
        
      }
    }
  }

  for (let j = 0; j < gsz; j++) {
    nextGrid[j] = [];
    for (let i = 0; i < gsz; i++) {
      nextGrid[j][i] = grid[j][i];
    }
  }
}

function updateGrid() {
  // if a cell is alive and has BOTH  an east west neighbor it dies
  // if a cell is dead and has EITHER north south neighbor it comes alive
  for (let j = 1; j < gsz - 1; j++) {
    for (let i = 1; i < gsz - 1; i++) {
      //check east west of alive cell
      if (grid[j][i] == 1) {
        if (grid[j][i - 1] == 1 && grid[j][i + 1] == 1) {
          //dies
          nextGrid[j][i] = 0;
        } else {
          // else it lives
          nextGrid[j][i] = 1;
        }
      } else {
        // cell is dead
        // check north and south
        if (grid[j + 1][i] == 1 || grid[j - 1][i] == 1) {
          //comes to life
          nextGrid[j][i] = 1;
        } else {
          // stays dead
          nextGrid[j][i] = 0;
        }
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
    let clr = color(random(30,255),random(30,255),random(30,255))
    for (let i = 0; i < gsz; i++) {
      if (grid[j][i] == 1) {
        fill(clr); // fill(117,200,174);
      } else {
        fill(90,61,43);
      }
      rect(i * sz, j * sz, sz, sz);
    }
  }
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 's') {
    saveGif('glitchbig6.gif',8);
  }
}
