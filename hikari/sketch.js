const num = 100;
let hikari = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    background(0);

    for (let i = 0; i < num; i++) {
        hikari[i] = new Hikari();
    }
}

function draw() {
    for (let i = 0; i < num; i++) {
        hikari[i].draw();
    }
}

class Hikari {
    constructor() {
        this.position = createVector(random(width), random(height));
    }

    draw() {
        for (let i = 0; i < 20; i++) {
            this.velocity = createVector(random(-5, 5), random(-2, 2));
            this.position.add(this.velocity);

            noStroke();
            fill(random(255), random(255), random(255), 3);
            square(this.position.x, this.position.y, 50);
        }
    }
}
