class House {

    // Creating dimensions of the house
    constructor({ x, y, w, h, red, green, blue, doorKnobSize }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = red;
        this.g = green;
        this.b = blue;
        this.doorKnobSize = doorKnobSize;
        this.notes = [`F4`, `C5`, `F3`, `F4`, `F4`, `A5`, `C4`, `C5`];
        this.interval;

        this.synth = new p5.PolySynth();
    }

    // Displays the house
    display() {
        // Displaying the walls
        push();
        noStroke();
        // fill(113, 61, 244);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y - 23.5, this.w + 80, this.h + 50);
        pop();

        // Displaying the door frame
        push();
        noStroke();
        // fill(65, 13, 197);
        fill(this.r - 50, this.g - 50, this.b - 50);
        rectMode(CENTER);
        rect(this.x, this.y - 3, this.w + 10, this.h + 7);
        pop();

        // Displaying the door
        push();
        noStroke();
        // fill(131, 112, 244);
        fill(this.r + 50, this.g + 50, this.b + 50);
        rectMode(CENTER);
        rect(this.x, this.y + 1, this.w, this.h);
        pop();

        // Displaying the door knob
        push();
        fill(0);
        noStroke();
        ellipse(this.x + 15, this.y, this.doorKnobSize);
        pop();
    }

    mousePressed() {
        // Allows the music to start randomly by pressing the mouse
        if (mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2) {
            if (this.interval === undefined) {
                this.interval = setInterval(this.playRandomNote(), 500);
            }
            else {
                clearInterval(this.interval);
                this.interval = undefined;
            }
        }
    }

    // Chooses a random note in the notes array
    playRandomNote() {
        let note = random(this.notes);
        this.synth.play(note, 1, 0, 1);
    }
}