class Star {

    constructor(_x, _y, _z) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }


    draw() {
        this.z -= speed;
        if (this.z < 1) {
            Cluster[Cluster.indexOf(this)] = new Star(random(-window.innerWidth, window.innerWidth), random(-window.innerHeight, window.innerHeight), window.innerWidth);
        }


        this.r = map(this.z, window.innerWidth, 0, 1, 20);
        this.nz = this.z;



        fill(255);
        stroke(255);
        line(map(this.x / this.z, 0, 1, 0, window.innerWidth), map(this.y / this.z, 0, 1, 0, window.innerHeight), map(this.x / this.nz, 0, 1, 0, window.innerWidth), map(this.y / this.nz, 0, 1, 0, window.innerHeight));
        ellipse(map(this.x / this.z, 0, 1, 0, window.innerWidth), map(this.y / this.z, 0, 1, 0, window.innerHeight), this.r);
    }
}

let Cluster = [];
let speed = 10;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < 800; i++) {
        Cluster[i] = new Star(random(-window.innerWidth, window.innerWidth), random(-window.innerHeight, window.innerHeight), Math.floor(random() * window.innerHeight));
    }
    speedSlider = createSlider(0, 100, 1);
    speedSlider.position(10, 10);
    speedSlider.style('width', '80px');
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    Cluster.forEach(element => {
        element.draw();
    });
    speed = speedSlider.value()
}