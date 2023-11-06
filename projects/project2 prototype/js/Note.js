class Note {

    // Creating the dimensions of the note
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
    }

    // Displaying the note
    display() {
        push();
        fill(255, 237, 71);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.size);
        pop();
    }
}