var eyeSize = 1;
var minimizeEyes = 0;

function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(eyeSize * 2, 100, eyeSize * 10);

    fill(0, 185, 232);
    //Draw the head inside the canvas incluing a border of 80 pixels
    if (mouseX > 80 && mouseY > 80 && mouseX < width - 80 && mouseY < height - 80) {
        //head
        stroke(153, 255, 153);
        strokeWeight(5);
        ellipse(mouseX, mouseY, 100, 100);

        //eyes
        if (eyeSize > 40) {         //give random color when the eyesize is bigger than 40 pixels
            var r1 = random(0, 255);
            var r2 = random(0, 255);
            var r3 = random(0, 255);
            fill(r1, r2, r3);
        }
        else {
            fill(0);
        }
        ellipse(mouseX - 20, mouseY - 5, eyeSize, eyeSize);
        ellipse(mouseX + 20, mouseY - 5, eyeSize, eyeSize);
    }

    //decide if the mouse press should increase or decrease the eye size
    if (eyeSize >= 100) {
        minimizeEyes = 1;
    }
    if (eyeSize <= 1) {
        minimizeEyes = 0;
    }
    
    //The mouse press change the eye size
    if (mouseIsPressed) {
        //increase eye size
        if (minimizeEyes == 0) {
            eyeSize++;
        }

        //decrease eye size
        if (minimizeEyes == 1) {
            eyeSize--;
        }
    }
}