let bob;

let sliderK;
let sliderRL;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bob = new Bob(windowWidth / 2 , windowHeight / 2);
  
  sliderK = createSlider(0, 0.01, 0.001, 0.001);
  sliderK.position(-60, 58);
  sliderK.style('transform', 'rotate(90deg)');
  
  sliderRL = createSlider(10, windowHeight, 50, 1);
  sliderRL.position(-60 + sliderRL.height + 1, 58);
  sliderRL.style('transform', 'rotate(90deg)');
}

function draw() {
  background(0);
  bob.k = sliderK.value();
  bob.rL = sliderRL.value();
  bob.draw();
  
  if(mouseIsPressed && mouseX > windowWidth / 4) { bob.y = mouseY; bob.vY = 0; bob.vX = 0; }
}
  
function keyPressed() {
    if(keyCode == UP_ARROW) bob.vX = 0.5;
  }
