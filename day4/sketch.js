// the lines it draws are can be crossed if the diagonal doesnt have a square

let grid = [];
let gsz = 100; // grid size
let sz = 6; // cell size
let xsp = -1;
let ysp = -1;
let x = 20;
let y = 20;

let clrs;
let myclrindex;
let cnv;

function setup() {
  cnv = createCanvas(600, 600);
  cx = (windowWidth-cnv.width)/2
  cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy);
  background(0);

  noStroke();
  clrs = [
    color(0),
    color(90, 61, 43),
    color(117, 200, 174),
    color(255, 236, 180),
    color(229, 119, 30),
    color(244, 161, 39),
  ];
  myclrindex=1;

  makeGrid();
}

function draw() {
  checkhit();
  moveit();
  showGrid();
}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    //rows
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
      //column
      grid[j][i] = 0;
    }
  }
  grid[y][x] = 1;
}

function showGrid() {
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      if (grid[j][i] == 0) {
        fill(0);
      } else {
        let cellcolor = clrs[grid[j][i]]
        fill(cellcolor);
      }

      rect(i * sz, j * sz, sz, sz); // need to put the x y
    }
  }
}

function moveit() {
  x += xsp;
  y += ysp;
  // check next cell
  if(grid[y][x]>0){
    x = floor(random(5, gsz - 5));
    y = floor(random(5, gsz - 5));
    ysp *= -1;
    xsp *= -1;
    myclrindex= floor(random(1,clrs.length));
    grid[y][x]=myclrindex
    console.log("hit a mountain",x,y)
    
  } else{
  grid[y][x] = myclrindex;
  }
}

function checkhit() {
  // check edges
  if (x === 0 || x === gsz - 1) {
    //-1 because of array starts at zer0
    x = floor(random(5, gsz - 5));

    y = floor(random(5, gsz - 5));
    xsp *= -1;
    myclrindex = floor(random(1,clrs.length));
    grid[y][x]= myclrindex
    console.log("hit left or right!!",x,y)
  
  }

  if (y === 0 || y === gsz - 1) {
    x = floor(random(5, gsz - 5));
    y = floor(random(5, gsz - 5));
    ysp *= -1;
    myclrindex= floor(random(1,clrs.length));
    grid[y][x]=myclrindex
    console.log("hit top or bottom",x,y)
  }
  
 
}




function keyPressed() {
   if (key === 'g') {
    saveGif('intersect2', 15);
  }
  if (key === 's') {
    saveCanvas('intersect2', 'jpg');
  }
}
