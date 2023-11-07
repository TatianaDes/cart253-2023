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

    // Moves player by pressing the arrow keys
    keyPressed(keyCode) {
        if (keyCode === LEFT_ARROW) {
            this.vx = -this.speed;
        }
        else if (keyCode === RIGHT_ARROW) {
            this.vx = this.speed;
        }
    }

    // Stops player by releasing the arrow keys
    keyReleased(keyCode) {
        if (keyCode === LEFT_ARROW && this.vx < 0) {
            this.vx = 0;
        }
        else if (keyCode === RIGHT_ARROW && this.vx > 0) {
            this.vx = 0;
        }
        else if (keyCode === 32) {
            this.grounded = false;
            this.vy = -30;
        }
    }
}