class Platform {

    // Creating the look of the paddle
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    // Displaying the paddle and all its colours and shapes
    display() {
        push();
        fill(36, 76, 25);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}