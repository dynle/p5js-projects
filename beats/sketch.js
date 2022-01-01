let sound, amp, bgcolor, filter;

function preload() {
    sound = loadSound("./Evan_Schaeffer-Aqueduct.mp3");
    filter = new p5.LowPass();
    sound.disconnect();
    sound.connect(filter);
    bgcolor = 255;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bgcolor);
    if (sound.isPlaying()) {
        bgcolor = 0;
        amp.setInput(sound);
        let rms = amp.getLevel();
        noStroke();
        let diameterCenter = map(rms, 0, 0.3, 0, width);
        for (let i = 0; i < 2; i++) {
            fill(
                random(map(rms, 0, 0.3, 0, 255)),
                random(map(rms, 0, 0.3, 0, 255)),
                random(map(rms, 0, 0.3, 0, 255))
            );
            circle(width / 2, height / 2, random(diameterCenter));
            circle(0, 0, random(diameterCenter));
            circle(width, 0, random(diameterCenter));
            circle(0, height, random(diameterCenter));
            circle(width, height, random(diameterCenter));
            diameterCenter /= 2;
        }
    } else {
        bgcolor = 255;
        text("CLICK", width / 2, height / 2);
    }

    let freq = map(mouseX, 0, width, 10, 20000);
    let res = map(mouseY, 0, height, 40, 1);
    filter.set(freq, res);
}

function mousePressed() {
    if (sound.isPlaying()) {
        sound.stop();
    } else {
        sound.play();
        amp = new p5.Amplitude();
    }
}
