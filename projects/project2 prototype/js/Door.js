class Door {

    constructor(x, y, w, h, size) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = size;
    }

    display() {

        push();
        noStroke();
        fill(80, 58, 31);
        rectMode(CENTER);
        rect(this.x, this.y - 3, this.w + 10, this.h + 7);
        pop();

        push();
        noStroke();
        fill(99, 68, 16);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();

        push();
        fill(0);
        noStroke();
        ellipse(this.x + 15, this.y, this.size);
        pop();
    }
}