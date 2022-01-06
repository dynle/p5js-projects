let sample = [];
let animation = [];
let num;
const maxAnim = 6;

let input, button_play, button_stop, song_name, source, song, vol, vol_slider;
let curr_status = { flag: false, message: "" };
let header_height = 50;

async function playBtnHandler() {
    if (!song) {
        curr_status = { flag: false, message: "Loading..." };
        song_name = input.value();
        input.value("");
        let audioUrl = await fetch(FETCH_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({ query: song_name + " song lyrics " }),
        });

        audioUrl = await audioUrl.json();

        if (audioUrl.data) {
            source = audioUrl.data;

            song = createAudio(source);
            song.play();

            curr_status = { flag: true, message: "Playing..." };
        } else {
            curr_status = { flag: false, message: "Song not found" };
        }
    } else {
        window.alert("Stop the song first!");
    }
}

function stopBtnHandler() {
    if (song) {
        song.stop();
        song = null;
        curr_status = { flag: false, message: "" };
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

    // Create an input
    input = createInput().attribute("placeholder", "Type Song + Singer");
    input.size(200);
    input.position(0, 0);

    // Create a play button
    button_play = createButton("Play");
    button_play.position(input.x + input.width, 0);
    button_play.mousePressed(playBtnHandler);

    // Create a stop button
    button_stop = createButton("Stop");
    button_stop.position(input.x + input.width, input.height);
    button_stop.mousePressed(stopBtnHandler);

    // Create a volumn slider
    vol_slider = createSlider(0.0,1.0,1.0,0.1);
    vol_slider.position(input.x + 300, 25);
    vol_slider.style('width','100px');
}

function draw() {
    background(0);

    // Show status on screen
    textSize(20);
    fill(255);
    text(curr_status.message, 0, header_height);

    // Control the volume slider
    text("Volume", input.x + 300, 20);
    if(song){
        vol = vol_slider.value();
        song.volume(vol);
    }

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
