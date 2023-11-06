class Note {

    // Creating the look of the paddle
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
    }

    // Displaying the paddle and all its colours and shapes
    display() {
        push();
        fill(255, 237, 71);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.size);
        pop();
    }
}