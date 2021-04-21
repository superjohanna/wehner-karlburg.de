class Bob {
  
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  
    this.xO = windowWidth / 2;
    this.yO = 0;
    
    this.k = 0.01;
    this.rL = 500;
    
    this.vX = 0;
    this.vY = 0;
    
    this.sizeX = 50;
    this.sizeY = 50;
  }
  
  update() {
    this.x += this.vX;
    this.y += this.vY;
    
    this.dir = createVector(this.x - this.xO, this.y - this.yO);
    this.cL = this.dir.mag();
    this.dir.normalize();
    this.displacement = this.cL - this.rL;
    this.dir.mult(-this.k * this.displacement);
    this.vX += this.dir.x;
    this.vY += this.dir.y;
    
  }
  
  draw() {
    
    strokeWeight(5);
    stroke(255);
    line(this.xO, this.yO, this.x, this.y);
    
    noStroke();
    ellipse(this.x, this.y, this.sizeX, this.sizeY)
    
    rect(windowWidth / 4, this.rL, 50, 1);
    
    this.update();
  }
  
}