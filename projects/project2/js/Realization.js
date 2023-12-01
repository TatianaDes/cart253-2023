class Realization {

    // Creating dimensions of the creature
    constructor({ x, y, w, h }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = 40;

        this.acceleration = 1;
        this.maxAcceleration = 2;
        this.maxSpeed = 3;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }

    // Gives movement to the creature
    move(player, player2) {
        // Main insight: calculate the player-based accelerations
        // first, and only apply them afterwards. That allows for
        // the idea that they might contribute zero acceleration (if out
        // of range for instance)

        // Assume no acceleration
        let player2Acceleration = {
            x: 0,
            y: 0
        };

        let player2Distance = dist(player2.x, player2.y, this.x, this.y);
        // Only apply acceleration if the player2 is within range
        if (player2Distance < 300) {
            let acceleration = map(player2Distance, 0, 400, 0, this.acceleration);
            if (player2.x < this.x) {
                player2Acceleration.x = acceleration;
            }
            else {
                player2Acceleration.x = -acceleration;
            }

            if (player2.y < this.y) {
                player2Acceleration.y = acceleration;
            }
            else {
                player2Acceleration.y = -acceleration;
            }
        }

        // Assume no acceleration
        let playerAcceleration = {
            x: 0,
            y: 0
        }

        let playerDistance = dist(player.x, player.y, this.x, this.y);
        // Only apply acceleration if the player2 is within range
        if (playerDistance < 400) {
            let acceleration = map(playerDistance, 0, 600, 0, this.acceleration);
            if (player.x < this.x) {
                playerAcceleration.x = -acceleration;
            }
            else {
                playerAcceleration.x = acceleration;
            }

            if (player.y < this.y) {
                playerAcceleration.y = -acceleration;
            }
            else {
                playerAcceleration.y = acceleration;
            }
        }

        // Apply the acceleration
        this.ax = playerAcceleration.x + player2Acceleration.x;
        this.ay = playerAcceleration.y + player2Acceleration.y;

        // Apply current acceleration
        this.vx += this.ax;
        this.vy += this.ay;

        // Apply drag
        this.vx *= 0.9;
        this.vy *= 0.9;

        // Allows for movement with acceleration and velocity to make the movement stay at a certain speed
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        // Reduce velocity to 0 if it's close
        if (abs(this.vx) < 0.1) this.vx = 0;
        if (abs(this.vy) < 0.1) this.vy = 0;

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
        fill(153, 22, 22);
        ellipse(this.x, this.y, this.w, this.h);
        pop();
    }

    mousePressed() {

    }

    keyPressed() {

    }

    keyReleased() {

    }
}