class Paddle {

    // Creating the look of the paddle
    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2;

    }

    // Mkaing the paddle able to move only on the x-axis
    move() {
        this.x = mouseX;
    }

    // Displaying the paddle and all its colours and shapes
    display() {
        push();
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}