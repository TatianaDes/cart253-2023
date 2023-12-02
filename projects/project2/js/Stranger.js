class Stranger {

    constructor(x, y, red, green, blue) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.r = red;
        this.g = green;
        this.b = blue;
        this.speed = 3;
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
    }

    move() {
        let change = random(0, 1);
        if (change < 0.05) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    display() {
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    mousePressed() {

    }

    keyPressed() {

    }

    keyReleased() {

    }
}

