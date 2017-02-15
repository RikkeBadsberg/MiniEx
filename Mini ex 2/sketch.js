var clicks = 0;
var mousePressed = 0;
var eyeSize =1;

function setup() {
    createCanvas(900, 600);
    //console.log("Hello World");
}

//https://p5js.org/reference/#/p5/keyCode

//Draw basic shapes
/*function draw() {
    background(124, 185, 232);
    
    if (mouseIsPressed)
    {
        if (mousePressed == 0) {
            mousePressed = 1;
            //print("Mouse pressed down");
        }
           
        //Ellipse
        fill(0, 185, 232);
        stroke(153, 255, 153);
        strokeWeight(10);
        ellipse(200, 220, 200, 100);
    }
    else
    {
        //print("Mouse released");
        if (mousePressed == 1) {
            mousePressed = 0;
            //print("Mouse released - click!");
            clicks++; //= clicks + 1;
            print("Clicks: " + clicks);
        }
        //Rectangle
        stroke(0, 208, 181);
        strokeWeight(5);
        fill(200, 0, 232);
        rect(40, 60, 50, 50);
    }  

    //point
    stroke(255, 51, 153);
    point(20, 20);

    //line
    stroke(255, 51, 153);
    line(35, 35, 400, 450);

    //quad
    stroke(255, 51, 153);
    fill(207, 0, 96);
    quad(150, 250, 250, 255, 370, 380, 100, 430);

    //triangle
    stroke(255, 255, 102);
    fill(245, 131, 69);
    triangle(450, 150, 450, 255, 670, 180);
}*/

//Draw circle and square on mouse
function draw() {
    background(124, 185, 232);


    //draw the circle inside the canvas
    

    fill(0, 185, 232);
    if (mouseX > 50 && mouseY > 50 && mouseX < width - 50 && mouseY < height - 50) {
        //head
        stroke(153, 255, 153);
        strokeWeight(5);
        ellipse(mouseX, mouseY, 100, 100);

        //eyes
        if (eyeSize > 40) {
            var r = random(0, 255);
            //print(r);
            fill(r);
        }
        else {
            fill(0);
        }
        
        ellipse(mouseX - 20, mouseY - 5, eyeSize, eyeSize);
        ellipse(mouseX + 20, mouseY - 5, eyeSize, eyeSize);

        //mouth
        
    }



    if (mouseIsPressed) {

        if (eyeSize > 0 && eyeSize < 150 ) {
            eyeSize++;
        }
        
        
        


        print(eyeSize);
        if (mousePressed == 0) {
            mousePressed = 1;
        }
    }
    else {
        if (mousePressed == 1) {
            mousePressed = 0;
            clicks++; 
            print("Clicks: " + clicks);
        }
    }

    //Text
    /*textSize(24);
    fill(153, 255, 153);
    strokeWeight(1);
    text("Clicks! " + clicks, 20, 30);*/
}