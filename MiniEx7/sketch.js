var button;
var clicks = 1;
var inputFields = [];
var paragraph;

function setup() {
    button = createButton('--');
    button.position(50, 20);
    button.mousePressed(adding);
}

function adding() {

    //console.log(clicks);
    if (clicks <= 15) {
        var b = createButton('__');
        b.position(50, clicks * 25);
        b.mousePressed(addingText);
        var i = createInput('');
        i.size(clicks * 10 + random(0, 80));
        i.position(80, clicks * 25);
        append(inputFields, i);
        clicks++;
        button.position(50, (clicks) * 25);
    }
}

function addingText() {
    console.log("Adding text " + inputFields.length);

    var t = "";
    for (var i = 0; i < inputFields.length; i++) {
       t += inputFields[i].value;
    }
    
    paragraph = createP(t);
    paragraph.position(200, 50);
    console.log(t);
}

