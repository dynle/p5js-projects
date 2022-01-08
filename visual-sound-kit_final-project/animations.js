// Animation A
class Anim_a {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = 2;
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(242, 233, 78, this.alpha);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        this.diameter *= 15;
        this.alpha *= 0.9;
    }
}

// Animation S
class Anim_s {
    constructor() {
        this.width = 0;
        this.speed1 = 80;
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(255, 0, 0, this.alpha);
        rectMode(CORNER);
        rect(0, 0, this.width, height);
        this.width += this.speed1;
        this.alpha *= 0.97;
    }
}

// Animation D
class Anim_d {
    constructor() {
        this.rotate = 0;
        this.size = width;
        this.speed1 = 5;
    }
    draw() {
        push();
        fill(150, 230, 179);
        noStroke();
        translate(width / 2, height / 2);
        rotate(radians(this.rotate));
        rectMode(CENTER);
        rect(0, 0, this.size, this.size);
        pop();
        this.rotate += this.speed1;
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
        fill(86, 134, 30, this.alpha);
        rect(0, 0, width, height);
        this.alpha -= 5;
    }
}

// Animation Q
class Anim_q {
    constructor() {
        this.posy = height + 50;
    }
    draw() {
        noStroke();
        fill(163, 217, 255);
        rect(0, this.posy - 50, width, 50);
        rect(0, height - this.posy, width, 50);
        this.posy *= 0.9;
    }
}

// Animation W
class Anim_w {
    constructor() {
        this.width = width;
        this.height = height;
        this.alpha = 255;
    }
    draw() {
        stroke(126, 107, 143, this.alpha);
        strokeWeight(20);
        noFill();
        rectMode(CENTER);
        rect(width / 2, height / 2, this.width, this.height);
        this.width *= 0.7;
        this.height *= 0.7;
        this.alpha *= 0.9;
        rectMode(CORNER);
        strokeWeight(1);
    }
}

// Animation E
class Anim_e {
    constructor() {
        this.posy = height + 50;
    }
    draw() {
        noStroke();
        fill(127, 255, 212);
        rect(this.posy - 50, 0, 50, height);
        rect(width - this.posy, 0, 50, height);
        // rect(width - this.posy, 0, 50, height);
        this.posy *= 0.9;
    }
}

// Animation R
class Anim_r {
    constructor() {
        this.radius = 500;
        this.circle_radius = 400;
        this.angle1 = 0;
        this.angle2 = 90;
        this.angle3 = 180;
        this.speed = 0.15;
        this.centerX = windowWidth / 2;
        this.centerY = windowHeight / 2;
        this.alpha = 255;
    }
    draw() {
        fill(224, 122, 95, this.alpha);

        var x1 = this.centerX + this.radius * cos(this.angle1);
        var y1 = this.centerY + this.radius * sin(this.angle1);
        ellipse(x1, y1, this.circle_radius, this.circle_radius);
        this.angle1 += this.speed;

        var x2 = this.centerX + this.radius * cos(this.angle2);
        var y2 = this.centerY + this.radius * sin(this.angle2);
        ellipse(x2, y2, this.circle_radius, this.circle_radius);
        this.angle2 += this.speed;

        var x3 = this.centerX + this.radius * cos(this.angle3);
        var y3 = this.centerY + this.radius * sin(this.angle3);
        ellipse(x3, y3, this.circle_radius, this.circle_radius);
        this.angle3 += this.speed;

        this.radius *= 0.97;
        this.alpha *= 0.92;
        this.circle_radius *= 0.99;
    }
}

// Animation Z
class Anim_z {
    constructor() {
        this.speed1 = 30;
        this.speed2 = -30;
        this.lineX1 = width / 2;
        this.lineY1 = height / 2;
        this.lineX2 = width / 2;
        this.lineY2 = height / 2;
        this.lineX3 = width / 2;
        this.lineY3 = height / 2;
        this.lineX4 = width / 2;
        this.lineY4 = height / 2;
        this.alpha = 255;
    }
    draw() {
        stroke(252, 163, 18, this.alpha);
        strokeWeight(20);
        line(this.lineX1, this.lineY1, this.lineX1 + 300, this.lineY1 + 300);
        this.lineX1 = this.lineX1 + this.speed1;
        this.lineY1 = this.lineY1 + this.speed1;

        line(this.lineX2, this.lineY2, this.lineX2 - 300, this.lineY2 - 300);
        this.lineX2 = this.lineX2 + this.speed2;
        this.lineY2 = this.lineY2 + this.speed2;

        line(this.lineX3, this.lineY3, this.lineX3 + 300, this.lineY3 - 300);
        this.lineX3 = this.lineX3 + this.speed1;
        this.lineY3 = this.lineY3 + this.speed2;

        line(this.lineX4, this.lineY4, this.lineX4 - 300, this.lineY4 + 300);
        this.lineX4 = this.lineX4 + this.speed2;
        this.lineY4 = this.lineY4 + this.speed1;

        this.speed1 *= 0.8;
        this.speed2 *= 0.8;

        this.alpha *= 0.9;
    }
}

// Animation X
class Anim_x {
    constructor() {
        this.xspacing = 10;
        this.w = width + 16;
        this.theta = 0.0;
        this.amplitude = 75.0;
        this.period = 300.0;
        this.dx = (TWO_PI / this.period) * this.xspacing;
        this.yvalues = new Array(floor(this.w / this.xspacing));
        this.alpha = 255;
    }
    draw() {
        this.theta += 0.9;
        var x = this.theta;
        for (var i = 0; i < this.yvalues.length; i++) {
            this.yvalues[i] = sin(x) * this.amplitude;
            x += this.dx;
        }

        noStroke();
        fill(225, 113, 240, this.alpha);
        for (var x = 0; x < this.yvalues.length; x++) {
            ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 10, 200);
        }
        this.alpha *= 0.92;
    }
}

// Animation C
class Anim_c {
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
        ellipse(0, 0, this.diameter, this.diameter);
        ellipse(width, 0, this.diameter, this.diameter);
        ellipse(0, height, this.diameter, this.diameter);
        ellipse(width, height, this.diameter, this.diameter);
        this.diameter += 10;
        this.alpha *= 0.97;
    }
}

// Animation V
class Anim_v {
    constructor() {
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(255, 255, 255, this.alpha);
        rect(0, 0, width, height);
        this.alpha -= 5;
    }
}
