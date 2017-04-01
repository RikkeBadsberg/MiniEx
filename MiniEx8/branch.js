function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.jitter = function () {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
    }

    this.show = function () {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = function (direction) {
        var randomRotation = random(3, 8);
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate((PI * direction) / randomRotation);
        dir.mult(0.67); //multiply the vector with 0.67 to shrink the length of the branch
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    }

    //Shiffman was "lazy" and had a method for each branch, called branchA and branchB
    //this.branchB = function () {
    //    var randomRotation = random(3, 8);
    //    var dir = p5.Vector.sub(this.end, this.begin);
    //    dir.rotate(-PI / randomRotation);
    //    dir.mult(0.67);
    //    var newEnd = p5.Vector.add(this.end, dir);
    //    var b = new Branch(this.end, newEnd);
    //    return b;
    //}
}