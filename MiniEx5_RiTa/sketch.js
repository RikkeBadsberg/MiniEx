var sentences;
var ritaWords;
var lexicon;
var myFont;
var selectedLine = 0;

function preload() {
    sentences = loadStrings("data/lyrics.txt");
    myFont = loadFont("data/Quicksand-Regular.otf");  //load font
}

function setup() {
    createCanvas(900, 600);
    //connect to the RiTa lexicon
    lexicon = new RiLexicon();
    ritaWords = [];
    for (var i = 0; i < sentences.length; i++) {
        ritaWords[i] = procesRita(sentences[i]);
    }
}

function draw() {
    textFont(myFont);
    background(50);
    showText();
    showChar(sentences[0]);
}

function procesRita(textString) {
    var output = "";
    var rs = new RiString(textString);

    rs.analyze();
    var words = rs.words();
    var pos = rs.pos();

    var method = random(0, 5);
    console.log(method);

    //choose randomly between RiTa features to use
    if (method < 1) {
        //Phonemes
        var phonemes = rs.get(RiTa.PHONEMES);
        output = phonemes;
    }
    else if (method < 2) {
        //pos
        output = pos;
    }
    else if (method < 3) {
        //rhymes
        output = '';
        for (var i = 0; i < words.length; i++) {
            var rhyme = lexicon.rhymes(words[i]); //finds and store a word that rhymes with the input word
            output += rhyme[0]; //adds the rhyming word to the output line
            output += ' '; //adds a space after the word
        }
    }
    else {
        //a random word
        output = '';
        for (var i = 0; i < words.length; i++) {
            output += lexicon.randomWord(pos[i]);
            output += ' '; //adds a space after the word
        }
    }
    return output;
}

function showText() {
    for (var i = 0; i < sentences.length; i++) {

        textSize(24);
        textAlign(LEFT, TOP)

        var line = "";
        if (i == selectedLine) {
            fill(0, 255, 000);
            line = sentences[i]
        }
        else {
            fill(0, random(150, 200), 255);
            line = ritaWords[i];
        }
        text(line, 150, 150 + i * 30);
    }
}

function showChar(textLine) {
    var charWidth = 0;
    for (var i = 0; i < textLine.length; i++) {
        fill(0, 200, random(255));
        textSize(40);

        text(textLine[i], charWidth + 100, 50);
        charWidth += textWidth(textLine[i]) + 10;
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        if (selectedLine == 0) {
            selectedLine = sentences.length - 1;
        }
        else {
            selectedLine -= 1;
        }
    }

    if (keyCode == DOWN_ARROW) {
        if (selectedLine == (sentences.length - 1)) {
            selectedLine = 0;
        }
        else {
            selectedLine += 1;
        }
    }
}