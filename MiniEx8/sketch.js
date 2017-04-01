// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM

// MiniEx changes by Rikke Badsberg

var tree = [];
var leaves = [];
var count = 0;
var numberOfBranches = 7;
var colorFactor = 0;
var leavesFall = 0;

function setup() {
    createCanvas(800, 600);
    frameRate(25);
    colorFactor = random(150, 255);
    //create the root of the tree at the middle of the canvas
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 180);
    var root = new Branch(a, b);
    tree[0] = root;
}

function draw() {
    background(51);
    growTree();

    //show the tree with all its branches
    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
        //tree[i].jitter();
    }

    //show the leaves
    for (var i = 0; i < leaves.length; i++) {
        fill(50,colorFactor,100,100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 10, 10);
        if (leavesFall == 1) {
            leaves[i].y += random(0, 2); //make the leaves fall
        }
    }
}

function mousePressed()
{
    leavesFall = 1;
}

function growTree()
{
    //create new branches
    if (count < numberOfBranches) {
        for (var i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished) {
                tree.push(tree[i].branch(random(0.9, 1.1))); //left branch
                tree.push(tree[i].branch(random(-0.9, -1.1))); //right branch

                //I addded a possibility of a third branch
                var thirdBranch = random(5);
                if (thirdBranch < 1.5) {
                    tree.push(tree[i].branch(random(-0.5, 0.5))); //it is placed in the middle of the left and right branch + randomness
                }
            }
            tree[i].finished = true;
        }
        count++;

        //grow leaves
        if (count === numberOfBranches) {
            for (var i = 0; i < tree.length; i++) {
                if (!tree[i].finished) {
                    var leaf = tree[i].end.copy();
                    leaves.push(leaf);
                }
            }
        }
    }
}