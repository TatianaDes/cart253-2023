class Creature {

    // Creating dimensions of the creature
    constructor({ x, y, w, h }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = 40;

        this.acceleration = 1;
        this.maxSpeed = 2;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }

    // Gives movement to the creature
    move(player) {
        // Make the creature scared of the player
        let a = dist(player.x, player.y, this.x, this.y);
        // if (a < player.size / 2 + this.size / 2) {
        if (player.x < this.x) {
            this.ax = this.acceleration;
        }
        else {
            this.ax = -this.acceleration;
        }

        if (player.y < this.y) {
            this.ay = this.acceleration;
        }
        else {
            this.ay = -this.acceleration;
        }
        // }

        // Allows for movement with acceleration and velocity to make the movement stay at a certain speed
        this.vx = this.vx + this.ax;
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = this.vy + this.ay;
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        // Allows the creature to move
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

    }

    // Constrains the creature from the borders of the canvas
    checkSides() {
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    // Displays the creature
    display() {
        push();
        noStroke();
        fill(20, 36, 74);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}