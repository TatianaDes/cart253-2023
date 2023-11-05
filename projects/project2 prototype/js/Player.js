class Player {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 5;
        this.vx = 0;
        this.vy = 0;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    display() {
        push();
        noStroke();
        fill(243, 156, 25);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }

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

    keyReleased(keyCode) {
        if (keyCode === LEFT_ARROW) {
            this.vx = 0;
        }
        else if (keyCode === RIGHT_ARROW) {
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