let vecLocation = [];
let vecVelocity = [];
let grass = [];
let colors = [];
let count = 0;
const NUM = 500;

function setup() {
    createCanvas(800, 800);
    frameRate(60);
    for (let i = 0; i < NUM; i++) {
        vecLocation[i] = createVector(random(width), random(height));
        vecVelocity[i] = createVector(random(-8, 8), random(-8, 8));
        colors[i] = createVector(random(255), random(255), random(255));
    }
}

function draw() {
    background("#17183C");
    noStroke();

    for (let i = 0; i < NUM; i++) {
        fill(colors[i].x, colors[i].y, colors[i].z, 150);
        ellipse(
            vecLocation[i].x,
            vecLocation[i].y,
            random(18, 22),
            random(18, 22)
        );
        vecLocation[i].add(vecVelocity[i]);
        if (vecLocation[i].x > width || vecLocation[i].x < 0) {
            vecVelocity[i].x *= -1;
        }
        if (vecLocation[i].y > height || vecLocation[i].y < 0) {
            vecVelocity[i].y *= -1;
        }
        if (
            vecLocation[i].x > (width * 3) / 8 &&
            vecLocation[i].x < (width * 5) / 8 &&
            vecLocation[i].y > (height * 3) / 8 &&
            vecLocation[i].y < (height * 5) / 8
        ) {
            vecVelocity[i].x = 0;
            vecVelocity[i].y = 0;
            count++;
        }
        if (count == 30) {
            vecVelocity[i].x = random(-8, 8);
            vecVelocity[i].y = random(-8, 8);
            count = 0;
        }
    }
}
