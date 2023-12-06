//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class Creature {

    // Creating dimensions of the creature
    constructor({ x, y, w, h }) {
        // Creating all the variables for the class
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

    //Credit to Pippin Barr for the explaining to me this code that he wrote and showing me how to make the creature only move due to proximity and based on when player is in proximity. 
    //Credit to Pippin Barr for the video " 4.7. Movement," for the creature to run away from the player. 
    // Gives movement to the creature
    move(player) {

        // Assume no acceleration
        let playerAcceleration = {
            x: 0,
            y: 0
        }

        let playerDistance = dist(player.x, player.y, this.x, this.y);
        // Only apply acceleration if the player2 is within range
        if (playerDistance < 300) {
            let acceleration = map(playerDistance, 0, 400, 0, this.acceleration);
            if (player.x < this.x) {
                playerAcceleration.x = acceleration;
            }
            else {
                playerAcceleration.x = -acceleration;
            }

            if (player.y < this.y) {
                playerAcceleration.y = acceleration;
            }
            else {
                playerAcceleration.y = -acceleration;
            }
        }

        // Apply the acceleration
        this.ax = playerAcceleration.x;
        this.ay = playerAcceleration.y;

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
        fill(20, 36, 74);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
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