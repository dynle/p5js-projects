let bubble = [];

function preload(){
    img = loadImage('./t84e_yqkq_120404.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    img.resize(width,height);

    let photoCredit = createA('https://www.vecteezy.com/', 'Vecteezy.com');
    photoCredit.position(width-100, height-50);
}

function draw() {
    background(img);
    for (let i = 0; i < bubble.length; i++) {
        bubble[i].move();
        bubble[i].display();
    }
}

function mouseDragged() {
    bubble.push(
        new Bubble(
            random(10, 30),
            createVector(mouseX, mouseY)
        )
    );
}

class Bubble {
    constructor(diameter, position) {
        this.diameter = diameter;
        this.position = position;
    }
    move() {
        this.position.x = this.position.x + random(-5,5);
        this.position.y = this.position.y - 3;
    }
    display() {
        noStroke();
        fill(255, 127);
        let currentDiameter = this.diameter * (this.position.y * 0.01);
        circle(this.position.x, this.position.y, currentDiameter);
    }
}
