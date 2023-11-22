class House {

    // Creating dimensions of the house
    constructor({ x, y, w, h, red, green, blue, doorKnobSize, /*note*/ }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = red;
        this.g = green;
        this.b = blue;
        this.doorKnobSize = doorKnobSize;
        // this.note = note;
        this.notes = [`F4`, `C5`, `F3`, `F4`, `F4`, `A5`, `C4`, `C5`];
        this.interval;

        this.synth = new p5.PolySynth();
        this.notesPlayed = 0;
        this.songLength = 10;
    }

    // Displays the house
    display() {
        // Displaying the walls
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y - 23.5, this.w + 80, this.h + 50);
        pop();

        // Displaying the door frame
        push();
        noStroke();
        fill(this.r - 50, this.g - 50, this.b - 50);
        rectMode(CENTER);
        rect(this.x, this.y - 3, this.w + 10, this.h + 7);
        pop();

        // Displaying the door
        push();
        noStroke();
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
        // if (mouseX > this.x - this.w / 2 &&
        //     mouseX < this.x + this.w / 2 &&
        //     mouseY > this.y - this.h / 2 &&
        //     mouseY < this.y + this.h / 2) {
        //     this.synth.play(this.note, 1, 0, 1.5); // play: the note G2 at volume 0.1, right away (0) for 1.5 seconds
        // }

        if (mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2) {
            if (this.interval === undefined) {
                this.interval = setInterval(this.playRandomNote.bind(this), 500);
            }
            // else {
            //     clearInterval(this.interval);
            //     this.interval = undefined;
            // }
        }
    }

    playRandomNote() {
        let note = random(this.notes);
        this.synth.play(note, 1, 0, 1);
        this.notesPlayed++;
        if (this.notesPlayed === this.songLength) {
            clearInterval(this.interval);
            this.interval = undefined;
            this.notesPlayed = 0;
        }
    }
}