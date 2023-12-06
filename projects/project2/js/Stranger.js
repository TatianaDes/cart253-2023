//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class Stranger {

    // Creating dimensions of stranger
    constructor(x, y, red, green, blue) {
        // Creating all the variables for the class
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

    //Credit to Pippin Barr for the video "7.2. Introducing arrays" for showing me how to make the movement for the stranger.
    // Gives movement to stranger
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

    // Displays the stranger
    display() {
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.size);
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

