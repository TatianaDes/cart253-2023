class Platform {

    // Creating the dimensions of the platform
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    // Displaying the platform
    display() {
        push();
        fill(36, 76, 25);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}