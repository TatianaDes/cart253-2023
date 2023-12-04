//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Player {

    // Creating dimensions of the player
    constructor({ x, y, w, h, red, green, blue, leftKey, rightKey, upKey, downKey }) {
        // Creating all the variables for the class
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = 40;

        this.speed = 5;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;

        this.r = red;
        this.g = green;
        this.b = blue;

        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.upKey = upKey;
        this.downKey = downKey;
    }

    //Credit to Pippin Barr for the video from the activity "7.5. Object-Oriented Programming activity" for showing me the code for making an object or player able to pollinate or grow something when passed over.
    // Making the player able to pollinate the flowers
    tryToPollinate(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.size / 2 + flower.size / 2 + flower.petalThickness) {
            flower.pollinate();
        }
    }

    // Gives movement to the player
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    // Displays the player
    display() {
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    //Credit to Pippin Barr for the video " 5.6. Keyboard input" for showing me the code for how to make users move with the arrow keys and WASD keys.
    // Starts the player when the arrow keys are pressed
    keyPressed(keyCode) {
        if (keyCode === this.leftKey) {
            this.vx = -this.speed;
        }
        else if (keyCode === this.rightKey) {
            this.vx = this.speed;
        }

        if (keyCode === this.upKey) {
            this.vy = -this.speed;
        }
        else if (keyCode === this.downKey) {
            this.vy = this.speed;
        }
    }

    // Stops the player when the arrow keys are released
    keyReleased(keyCode) {
        if (keyCode === this.leftKey && this.vx < 0) {
            this.vx = 0;
        }
        else if (keyCode === this.rightKey && this.vx > 0) {
            this.vx = 0;
        }

        if (keyCode === this.upKey && this.vy < 0) {
            this.vy = 0;
        }
        else if (keyCode === this.downKey && this.vy > 0) {
            this.vy = 0
        }
    }
}