class Player {

    // Creating dimensions of the player
    constructor(x, y, w, h, leftKey, rightKey, upKey, downKey) {
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
        fill(243, 156, 25);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }

    // Starts the player when the arrow keys are pressed
    keyPressed(keyCode) {
        if (keyCode === /*LEFT_ARROW*/ this.leftKey) {
            this.vx = -this.speed;
        }
        else if (keyCode === /*RIGHT_ARROW*/ this.rightKey) {
            this.vx = this.speed;
        }

        if (keyCode === /*UP_ARROW*/ this.upKey) {
            this.vy = -this.speed;
        }
        else if (keyCode === /*DOWN_ARROW*/ this.downKey) {
            this.vy = this.speed;
        }
    }

    // Stops the player when the arrow keys are released
    keyReleased(keyCode) {
        if (keyCode === /*LEFT_ARROW*/ this.leftKey && this.vx < 0) {
            this.vx = 0;
        }
        else if (keyCode === /*RIGHT_ARROW*/ this.rightKey && this.vx > 0) {
            this.vx = 0;
        }

        if (keyCode === /*UP_ARROW*/ this.upKey && this.vy < 0) {
            this.vy = 0;
        }
        else if (keyCode === /*DOWN_ARROW*/ this.downKey && this.vy > 0) {
            this.vy = 0
        }
    }
}