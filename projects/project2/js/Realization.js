class Realization {

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
    move(player, player2) {
        let player2Distance = dist(player2.x, player2.y, this.x, this.y);
        let player2Acceleration = map(player2Distance, 0, 400, 0, this.acceleration);
        if (player2.x < this.x) {
            this.ax += player2Acceleration;
        }
        else {
            this.ax -= player2Acceleration;
        }

        if (player2.y < this.y) {
            this.ay += player2Acceleration;
        }
        else {
            this.ay -= player2Acceleration;
        }

        let playerDistance = dist(player.x, player.y, this.x, this.y);
        let playerAcceleration = map(playerDistance, 0, 400, -this.acceleration, 0);
        if (player2.x < this.x) {
            this.ax += playerAcceleration;
        }
        else {
            this.ax -= playerAcceleration;
        }

        if (player2.y < this.y) {
            this.ay += playerAcceleration;
        }
        else {
            this.ay -= playerAcceleration;
        }


        this.ax = constrain(this.ax, -this.acceleration, this.acceleration);
        this.ay = constrain(this.ay, -this.acceleration, this.acceleration);

        this.vx += this.ax;
        this.vy += this.ay;

        // Allows for movement with acceleration and velocity to make the movement stay at a certain speed
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
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