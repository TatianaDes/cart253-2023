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

        this.grounded = false;
        this.gravity = 0.01;
    }

    // Gives movement to the player
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    // Checks if the player overlaps the platform
    checkOverlap(platform) {
        let d = dist(player.x, player.y, platform.x, platform.y);
        if (d < player.size / 2 + platform.size / 2) {
            player.speed = -player.speed
        }
    }

    checkGrounded() {
        if (this.y === windowHeight) {
            this.grounded = true;
        }
        else {
            this.grounded = false;
        }
    }

    jumpGravity() {
        if (this.grounded === true) {
            this.ay = 0;
            this.vy = 0;
        }
        else if (this.grounded === false) {
            this.y += this.vy;
            this.vy += this.ay;
            this.ay += this.gravity;
        }
    }

    checkSides() {
        this.x = constrain(this.x, 0, windowWidth);
        this.y = constrain(this.y, 0, windowHeight);
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