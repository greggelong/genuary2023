 
let words =["Act",	"Answer",	"Approve",	"Arrange", "Break",	"Build","Buy",	"Coach", "Color",	"Cough",	"Create",	"Complete", "Drink",	"Eat",	"Edit",	"Enter", "Exit",	"Imitate",	"Invent",	"Jump", "Laugh", "Lie",	"Listen",	"Paint", "Plan"	,"Play"	,"Read"	,"Replace","Run",	"Scream",	"See",	"Shop", "Shout",	"Sing",	"Skip",	"Sleep","Sneeze",	"Solve",	"Study",	"Teach", "Touch",	"Turn",	"Walk",	"Win","Write",	"Whistle",	"Yank",	"Zip", "Juggle", "Sew", "Dance", "Mop", "Play Piano", "Speak German", "Speak Japanese", "Speak French", "Work Smart", "Walk Backwards", "Do Yoga", "Rest", "Scuba", "Hieroglyphics","Speak Spanish", "Keep Hedgehogs", "Photography","Philosophy", "Change","Accept Death","Secrets", "Keep Quiet", "Astronomy", "Math","Logic","Accept Death","Accept Death","Accept Death","Accept Death","Accept Death","Accept Death","Accept Death", "Accept Death", "Accept Death" ,"Accept Death" ,"Accept Death" ,"Accept Death", "Accept Death" ,"Accept Death" ,"Accept Death" ,"Accept Death","Accept Death","Accept Death","Accept Death","Accept Death", "Accept Death", "Accept Death" ,"Accept Death" ,"Accept Death" ,"Accept Death", "Accept Death" ,"Accept Death" ,"Accept Death" ,"Accept Death"  ]

let cnv;

function setup() {
  cnv= createCanvas(800, 800);
  let cx = (windowWidth-cnv.width)/2
  let cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy)
  
  
  background(127)
  
  frameRate(8)
}

function draw() {
  
  background(127,40)
  fill(0);
  for(let i=0;i<5;i++){
  textSize(random(12,100))
  text(random(words),random(width-350),random(height))
  }
}

function keyPressed() {
  if (key === 'g') {
   saveGif('learn.gif', 15);
 }
 if (key === 's') {
   saveCanvas('tessa', 'jpg');
 }
}