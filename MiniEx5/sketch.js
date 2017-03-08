var words;
var input;
var lexicon;
var myFont;

function preload()
{
    //load strings from textfile
    words = loadStrings("data/lyrics.txt");
    //myFont = loadFont("data/Quicksand-Regular.otf");  //load font
}

function setup() {
    createCanvas(900, 600);
    //connect to the RiTa lexicon
    lexicon = new RiLexicon();

    //createText();
}

function draw() {
    //textFont(myFont);
    background(50);
    showText();
}

/*function createText()
{
    words = [];
    words[0] = "BLa bla0";
    words[1] = "BLa bla1";
    words[2] = "BLa bla2";
    words[3] = "BLa bla3";
    words[4] = "BLa bla4";
    console.log(words);
}*/

function showText()
{
    for (var i = 0; i < words.length; i++) {

        textSize(30);
        fill(0, 200, 255);

        //show text
        text(words[i], 100, 200 + i * 50);
    }
}
