class Platform {

    // Creating the look of the paddle
    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height / 2;

    }

    // Displaying the paddle and all its colours and shapes
    display() {
        push();
        fill(36, 76, 25);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}