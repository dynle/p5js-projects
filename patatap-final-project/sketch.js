let sample = [];
let animation = [];
let num;
const maxAnim = 6;

let input, button_play, button_stop, songName, source, song;
let currStatus = { flag: false, message: "" };

async function playBtnHandler() {
    if (!song) {
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
    } else {
        window.alert("Stop the song first!");
    }
}

function stopBtnHandler() {
    if (song) {
        song.stop();
        song = null;
        currStatus = { flag: false, message: "" };
    } else {
        window.alert("No song playing now");
    }

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

    input = createInput().attribute("placeholder", "Type Song + Singer");
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