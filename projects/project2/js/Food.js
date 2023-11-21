class Food {
    // Creating the dogFood object for all the dog food
    constructor({ x, y }) {
        x = x;
        y = y;
        size = 100;
        eaten = false;
    };

    // Display the food
    display() {
        if (!this.eaten) {
            push();
            noStroke();
            fill(191, 175, 28);
            ellipse(this.x, this.y, this.size);
            pop();
        }
    }

    mousePressed() {

    }

    keyPressed() {

    }

    keyReleased() {

    }
}