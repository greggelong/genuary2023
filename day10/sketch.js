let monoSynth;
let notes = ["C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5"];
let notestring;
let note;
let count = 0;
let seed;
let cnv;
let y = 0;
let sz = 40;
let x = 240

function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx,cy)

  background(126);
  stroke(255)

  monoSynth = new p5.MonoSynth();
  frameRate(4);
  seed = floor(random(256));
  textSize(sz-3);
  textAlign(LEFT,TOP )
}
function draw() {
  //print(seed);
  getnotestring(seed);
  
  // show bits and number
  noStroke()
  fill(0)
  text(seed,240-sz*2,y)
  stroke(255)
  
  for (let i = 0; i < 8; i++) {
    if (notestring[i] == 1) {
      fill(0);
    } else {
      fill(127);
    }

    rect(i * sz + 240, y, sz, sz);
  }
  
  
 // print(notestring);

  if (notestring[count] === 1) {
    note = notes[count];
   // print(seed, count, notes[count]);

    playSynth();
  } else {
    note = "C3";
    playSynth();
  }
  // playing note
  noFill()
  stroke(255,0,0)
  rect(x,y,sz,sz)
  stroke(255)
  count++;
  x=x+sz
  if (count > 8) {
    count = 0;
    seed = floor(random(256));
    y+=sz;
    x=240
    if (y > height-sz){
      y=0
      background(127)
    }
  }
}

function getnotestring(num) {
  notestring = binConvert(num, 8);
}
function playSynth() {
  userStartAudio();

  //console.log(note);
  // note velocity (volume, from 0 to 1)
  let velocity = 0.5; //random(1,2);
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1 / 8;

  monoSynth.play(note, velocity, time, dur);
  //monoSynth.play(note)
}

function binConvert(a, bitLen) {
  // takes in a decimal and a bit length and returns a list of ones and zeros binary for that number

  let b = a.toString(2); // converts it to binary but leading zeros, not 8 bits eg. 3 = "11"
  let mask = "0".repeat(bitLen); // a mask to get the extra zeros
  let c = mask.slice(0, bitLen - b.length); // slice to get the right number of zeros
  // eg. if b = "11" then c = "000000"
  let binstring = c + b; // binary string so 3 will give 00000011 8 bits

  let binArray = int(binstring.split("")); // is an aray of ints so [0,0,0,0,0,0,1,1]
  return binArray;
}
