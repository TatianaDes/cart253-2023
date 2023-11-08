class House {

    // Creating dimensions of the player
    constructor(x, y, w, h, size) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = size;
    }

    // Displays the player
    display() {
        // Displaying the door
        push();
        noStroke();
        fill(80, 58, 31);
        rectMode(CENTER);
        rect(this.x, this.y - 3, this.w + 10, this.h + 7);
        pop();

        // Displaying the door frame
        push();
        noStroke();
        fill(99, 68, 16);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        pop();

        // Displaying the door knob
        push();
        fill(0);
        noStroke();
        ellipse(this.x + 15, this.y, this.size);
        pop();
    }

}