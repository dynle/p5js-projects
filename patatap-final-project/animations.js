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
