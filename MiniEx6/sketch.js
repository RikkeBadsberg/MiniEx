var r = 0;
var status = "up";

function setup() {
    createCanvas(windowWidth, windowHeight);   
    noFill();
}

function draw() {
    background(0,0,0,r); //black background
    //background(0);

    //Rule 1: grid
    for (var xcor = 0; xcor < width - 50; xcor += 150) {
        for (var ycor = 0; ycor < height - 50; ycor += 150) {
            drawSomething(xcor, ycor);
        }
    }

    //Rule 2: increase and decrease at a certain speed
    if (status == "up") {
        r += 0.01;   //the speed of the size change   
    } else {
        r -= 0.01;
    }

    //Rule 3: if it reaches certain size, change the direction
    if (r > 25) {    //until r reaches a certain number, reset the status
        status = "down";
    } else if (r < 0) {
        status = "up";
    }
    console.log(r);
}

function drawSomething(x, y) {   
    stroke(255, 50);
    //Rule 4: The colors are determined by the x and y values and have a low opacity
    fill(x - y, y - x, x * y, 2);
    ellipse(x + 50, y + 25, 80 * r, 50 * r);
    ellipse(x + 25, y + 50, 50 * r, 80 * r);

}
