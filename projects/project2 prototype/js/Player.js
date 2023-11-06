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
        if (keyCode === UP_ARROW) {
            this.vy = -this.speed;
        }
        else if (keyCode === DOWN_ARROW) {
            this.vy = this.speed;
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
        if (keyCode === UP_ARROW) {
            this.vy = 0;
        }
        else if (keyCode === DOWN_ARROW) {
            this.vy = 0
        }
    }
}