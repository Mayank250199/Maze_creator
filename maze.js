let x = 0;
let y = 0;
let spacing = 20;

function setup(){
  createCanvas(600,600);
  background(0);
}

function draw(){
  stroke(500);
  if (random(1) < 0.4){
  line(x,y,x+spacing,y+spacing);
} else {
  line(x,y+spacing,x+spacing,y);
}
x = x + spacing;
if(x > width){
  x=0;
  y = y + spacing;
}
}
