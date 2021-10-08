function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    noStroke();
    fill(255, 205, 90);
    arc(width/2,height/2,300,300,QUARTER_PI,-45);
    for(var i=0;i<3;i++){
        ellipse(width/1.5+i*80,height/2,40,40);
    }
    fill(46, 43, 71);
    ellipse(width/2.2, height/2.5, 50, 50);
}