class Player {

    // Creating dimensions of the player
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 5;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }

    // Gives movement to the player
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    checkSides() {
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    // Displays the player
    display() {
        push();
        noStroke();
        fill(243, 156, 25);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }

    // Starts the player when the arrow keys are pressed
    keyPressed(keyCode) {
        if (keyCode === LEFT_ARROW) {
            this.vx = -this.speed;
        }
        else if (keyCode === RIGHT_ARROW) {
            this.vx = this.speed;
        }

        if (keyCode === UP_ARROW) {
            this.vy = -this.speed;
        }
        else if (keyCode === DOWN_ARROW) {
            this.vy = this.speed;
        }
    }

    // Stops the player when the arrow keys are released
    keyReleased(keyCode) {
        if (keyCode === LEFT_ARROW && this.vx < 0) {
            this.vx = 0;
        }
        else if (keyCode === RIGHT_ARROW && this.vx > 0) {
            this.vx = 0;
        }

        if (keyCode === UP_ARROW && this.vy < 0) {
            this.vy = 0;
        }
        else if (keyCode === DOWN_ARROW && this.vy > 0) {
            this.vy = 0
        }
    }
}