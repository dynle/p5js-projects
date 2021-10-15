function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);
    let size1;
    let position_x;
    let position_y;
    for(let i=0;i<500;i++){
        size1=random(60,100);
        noStroke();
        fill(25, 129, 142,210);
        position_x=random(windowWidth)
        position_y=random(windowHeight)
        if(position_x<windowWidth/8 || position_x>windowWidth*7/8 || position_y<windowWidth/10 || position_y>windowWidth*9/10){
            size1/=random(1,5);
        }
        ellipse(position_x, position_y, size1, size1);
    }
    let size2;
    for(let i=0;i<200;i++){
        size2=random(50,100);
        noStroke();
        fill(86, 191, 203,180);
        ellipse(random(windowWidth/6,windowWidth*5/6), random(windowWidth/10,windowWidth*9/10), size2, size2);
    }
}

function draw() {
}