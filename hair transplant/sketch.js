let canvasWidth = 500;
let canvasHeight = 700;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(60);
    background(105, 203, 227);
    chac();
}

function draw() {
    let hairLocation = createVector(
        random(width / 4 + 10, (width * 3) / 4 - 10),
        random(height / 2.05, height / 1.8)
    );
    let hairLength = random(40, 50);
    transplantingHair(hairLocation, hairLength);
}

function chac() {
    let faceWidth = width / 2;
    let faceHeight = height / 1.6;
    shape(faceWidth, faceHeight);
    eyes(faceWidth, faceHeight);
    nose(faceWidth, faceHeight);
    mouth(faceWidth, faceHeight);
}

function shape(faceWidth, faceHeight) {
    fill(246, 216, 182);
    noStroke();
    circle(faceWidth, faceHeight, canvasWidth / 2);
    triangle(
        width / 2,
        height / 1.5,
        width / 4,
        canvasHeight,
        (width * 3) / 4,
        canvasHeight
    );
}

function eyes(faceWidth, faceHeight) {
    fill(0);
    ellipse(faceWidth + 40, faceHeight - 15, 20, 40);
    ellipse(faceWidth - 40, faceHeight - 15, 20, 40);
}

function mouth(faceWidth, faceHeight) {
    arc(faceWidth, faceHeight + 50, 50, 10, 0, PI, PIE);
}

function nose(faceWidth, faceHeight) {
    arc(faceWidth, faceHeight + 20, 10, 10, 0, PI, OPEN);
}

function transplantingHair(hairLocation, hairLength) {
    stroke(random(0, 30));
    strokeWeight(3);
    line(
        hairLocation.x,
        hairLocation.y,
        hairLocation.x,
        hairLocation.y - hairLength
    );
}
