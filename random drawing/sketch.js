let vecLocation = [];
let vecVelocity = [];
let colors = [];
let buttonDraw;
let buttonReset;

function setup() {
    createCanvas(windowWidth - 50, windowHeight);
    frameRate(60);

    buttonDraw = createButton("DRAW");
    buttonDraw.position(width / 2 - 80, height - 100);
    buttonDraw.style("font-size", "30px");
    buttonDraw.mousePressed(add);

    buttonReset = createButton("RESET");
    buttonReset.position(width / 2 + 80, height - 100);
    buttonReset.style("font-size", "30px");
    buttonReset.mousePressed(reset);
}

function draw() {
    background(255, 1);
    noStroke();

    for (let i = 0; i < vecLocation.length; i++) {
        fill(colors[i].x, colors[i].y, colors[i].z);
        ellipse(vecLocation[i].x, vecLocation[i].y, 30, 30);
        vecLocation[i].add(vecVelocity[i]);
        if (vecLocation[i].x > width || vecLocation[i].x < 0) {
            vecVelocity[i].x *= -1;
        }
        if (vecLocation[i].y > height || vecLocation[i].y < 0) {
            vecVelocity[i].y *= -1;
        }
    }
}

function add() {
    vecLocation.push(createVector(width / 2, height / 2));
    vecVelocity.push(createVector(random(-8, 8), random(-8, 8)));
    colors.push(createVector(random(255), random(255), random(255)));
}

function reset() {
    vecLocation = [];
    vecVelocity = [];
    colors = [];
    background(255);
}
