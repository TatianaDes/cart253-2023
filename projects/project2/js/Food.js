class Food {

    // Creating dimensions of food
    constructor(x, y, size, red, green, blue) {
        // Creating all the variables for the class
        this.x = x;
        this.y = y;
        this.size = size;
        this.r = red;
        this.g = green;
        this.b = blue;
        this.eaten = false;
    };

    // Displays the food
    display() {
        // Check if the food is still available to be eaten
        if (!this.eaten) {
            // Display the food as its position and with its size
            push();
            noStroke();
            fill(this.r, this.g, this.b);
            ellipse(this.x, this.y, this.size);
            pop();
        }
    }

    // Checks if the user overlaps the food object and eats it if so
    checkFood(player) {
        if (!this.eaten) {
            let d = dist(player.x, player.y, this.x, this.y);
            if (d < player.size / 2 + this.size / 2) {
                this.eaten = true;
            }
        }
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {

    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}