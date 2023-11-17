class Player {

    // Creating dimensions of the player
    constructor({ x, y, w, h, red, green, blue, leftKey, rightKey, upKey, downKey }) {
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