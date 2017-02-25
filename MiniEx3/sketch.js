var rotation = 1;
var spacePresses = 0;
var translatePosX = 450;
var translatePosY = 200;
var moveSpeed = 30;

function setup() {
    createCanvas(900, 600);
    frameRate(12);
}

function draw() {
    drawThrobber();
}

function drawThrobber() {
    push();
    //background
    fill(10, 99); //the color and the opacity 
    rect(0, 0, width, height);

    //Draw thropper
    translate(translatePosX, translatePosY);
    var cir = 360 / 9 * (frameCount % 9); //degree of each ellipse' move
    rotate(radians(rotation * cir)); //rotate the ellipse 
    noStroke();

    var r1 = random(255);
    var r2 = random(255);
    var r3 = random(255);

    if (spacePresses == 0) {
        fill(255, r2, 0);
        ellipse(30, 50, 22, 22);
    }
    else if (spacePresses == 1) {
        fill(r1, 0, 255);
        triangle(30, 30, 70, 70, -50, 50);
    }
    else if (spacePresses == 2) {
        fill(r1, 255, 0);
        rect(30, 50, 22, 22);
    }
    else {
        spacePresses = 0;
    }    
    pop();

    textSize(24);
    fill(255, 255, 255);
    text("Interact with space and arrow keys.", 250, 50);
}

function keyPressed() {
    if (keyCode == 32) {
        
        spacePresses++;
        console.log("spacePresses = " + spacePresses);
        if (rotation == 1) {
            rotation = -1;
        }
        else {
            rotation = 1;
        }
    }

    if (keyCode == UP_ARROW) {
        translatePosY -= moveSpeed;
    }

    if (keyCode == DOWN_ARROW) {
        translatePosY += moveSpeed;
    }

    if (keyCode == LEFT_ARROW) {
        translatePosX -= moveSpeed;
    }

    if (keyCode == RIGHT_ARROW) {
        translatePosX += moveSpeed;
    }
}