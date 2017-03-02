function setup() {    
    createCanvas(900, 600);
    frameRate(10);
}


function draw() {

    //var mappedX = map(mouseX, 0, width, 100, 255);
    //var mappedY = map(mouseY, 0, width, 100, 255);
    //print(mappedX);
    drawGrid(50, 50);
}

function drawGrid(elementWidth, elementHeight)
{
    var mappedX = map(mouseX, 0, width, 100, 255);
    var mappedY = map(mouseY, 0, width, 10, 255);
    noStroke();

    for (var i = 0; i < width; i += mappedY)
    {
        for(var t = 0; t < height; t += mappedY)
        {
            //fill(0, random(220, 255), 0);
            fill(0, random(100, mappedX), 0);
            ellipse(i, t, mappedY, mappedY);
        }
    }
}
