let sample = [];
let animation = [];
let num;
const maxAnim = 6;

let input, button_play, button_stop, songName, source, song;
let currStatus = { flag: false, message: "" };

async function playBtnHandler() {
    currStatus = { flag: false, message: "Loading..." };
    songName = input.value();
    input.value("");
    let audioUrl = await fetch(FETCH_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ query: songName + " song lyrics " }),
    });

    audioUrl = await audioUrl.json();

    if (audioUrl.data) {
        source = audioUrl.data;

        song = createAudio(source);
        song.play();

        currStatus = { flag: true, message: "Playing..." };
    } else {
        currStatus = { flag: true, message: "Song not found" };
    }
}

function stopBtnHandler() {
    song.stop();
    song = null;
    currStatus = {flag:false, message: ""};
}

function preload() {
    sample[0] = loadSound("./se01.wav");
    sample[1] = loadSound("./se02.wav");
    sample[2] = loadSound("./se03.wav");
    sample[3] = loadSound("./se04.wav");
    sample[4] = loadSound("./se05.wav");
    sample[5] = loadSound("./se06.wav");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    input = createInput().attribute('placeholder','Type Song + Singer');
    input.size(200);
    input.position(0, 0);

    button_play = createButton("Play");
    button_play.position(input.x + input.width, 0);
    button_play.mousePressed(playBtnHandler);

    button_stop = createButton("Stop");
    button_stop.position(input.x + input.width, input.height);
    button_stop.mousePressed(stopBtnHandler);
}

function draw() {
    background(0);

    // if (!currStatus.flag) {
    //     textSize(32);
    //     fill(255);
    //     text(currStatus.message, 0, 100);
    // }

    textSize(32);
    fill(255);
    text(currStatus.message, 0, 100);

    if (animation.length > 0) {
        for (let i = 0; i < animation.length; i++) {
            animation[i].draw();
        }
    }
}

function keyTyped() {
    if (song) {
        if (key == "a") {
            sample[0].play();
            animation.push(new Anim_a());
        } else if (key == "s") {
            sample[1].play();
            animation.push(new Anim_s());
        } else if (key == "d") {
            sample[2].play();
            animation.push(new Anim_d());
        } else if (key == "f") {
            sample[3].play();
            animation.push(new Anim_f());
        } else if (key == "g") {
            sample[4].play();
            animation.push(new Anim_g());
        } else if (key == "h") {
            sample[5].play();
            animation.push(new Anim_h());
        }
        if (animation.length > maxAnim) {
            animation.splice(1, 1);
        }
    }
}

// Animation A
class Anim_a {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.diameter = 0;
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(0, 127, 255, this.alpha);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        this.diameter += 10;
        this.alpha *= 0.99;
    }
}

// Animation S
class Anim_s {
    constructor() {
        this.width = 0;
        this.speed = 80;
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(255, 0, 0, this.alpha);
        rectMode(CORNER);
        rect(0, 0, this.width, height);
        this.width += this.speed;
        this.alpha *= 0.99;
    }
}

// Animation D
class Anim_d {
    constructor() {
        this.rotate = 0;
        this.size = width;
        this.speed = 5;
    }
    draw() {
        push();
        fill(255, 255, 0);
        noStroke();
        translate(width / 2, height / 2);
        rotate(radians(this.rotate));
        rectMode(CENTER);
        rect(0, 0, this.size, this.size);
        pop();
        this.rotate += this.speed;
        this.size *= 0.95;
    }
}

// Animation F
class Anim_f {
    constructor() {
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(0, 255, 255, this.alpha);
        rect(0, 0, width, height);
        this.alpha -= 5;
    }
}

// Animation G
class Anim_g {
    constructor() {
        this.posy = height + 50;
    }
    draw() {
        noStroke();
        fill(255);
        rect(0, this.posy - 50, width, 50);
        rect(0, height - this.posy, width, 50);
        this.posy *= 0.9;
    }
}

// Animation H
class Anim_h {
    constructor() {
        this.width = width;
        this.height = height;
    }
    draw() {
        stroke(255);
        strokeWeight(20);
        noFill();
        rectMode(CENTER);
        rect(width / 2, height / 2, this.width, this.height);
        this.width *= 0.7;
        this.height *= 0.7;
        rectMode(CORNER);
        strokeWeight(1);
    }
}
