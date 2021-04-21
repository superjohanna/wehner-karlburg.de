let origin;
let len;
let g;
let f;
let bob;
let angle;

let aAcc;
let aVel;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  len = createSlider(0, height, 200, 1);
  len.style('transform', 'rotate(90deg)');
  len.position(-60, 57);
  
  g = createSlider(0, 1, 0.01, 0.01);
  g.style('transform', 'rotate(90deg)');
  g.position(-45, 57);
  
  f = createSlider(0, 1, 0.02, 0.01);
  f.style('transform', 'rotate(90deg)');
  f.position(-30, 57);
  
  origin = createVector(width/2, 0);
  bob = new Bob();
  angle = 0.5;
  
  aVel = 0;
  
}

function draw() {
  background(255);
    
  line(origin.x, origin.y, bob.x, bob.y);
  fill(255);
  ellipse(bob.x, bob.y, bob.h, bob.w);
  
  
  bob.x = origin.x + len.value() * sin(angle);
  bob.y = origin.y + len.value() * cos(angle);
  
  
   
  aAcc = -g.value() * sin(angle);
  
  angle += aVel;
  aVel += aAcc;
  
  aVel *= 1 - f.value();
  
  
   
}



function Bob() {
  this.x = width/2;
  this.y = 0;
  
  this.h = 32;
  this.w = 32;
  
}