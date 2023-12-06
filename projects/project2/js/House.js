//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class House {

    //Credit to Pippin Barr for the video "10.3. p5.PolySynth" for showing me the code for making an array of notes that are played.
    // Creating dimensions of the house
    constructor({ x, y, w, h, red, green, blue, doorKnobSize, notes }) {
        // Creating all the variables for the class
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = red;
        this.g = green;
        this.b = blue;
        this.doorKnobSize = doorKnobSize;
        this.notes = notes;
        this.interval;

        //Credit to Mathilde Davan for showing me how to make the notes only play 10 times before stopping.
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

    //Credit to Pippin Barr for showing me how to allow the notes to actually play in a class by adding the ".bind(this)" to call the interval again.
    // Calls the mousePressed function to work
    mousePressed() {
        // Allows the house to be pressed anywhere for the music to start playing and calls the playRandomNote() function
        if (mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2) {
            if (this.interval === undefined) {
                this.interval = setInterval(this.playRandomNote.bind(this), 500);
            }
        }
    }

    // Calls all the variables to play the notes and make them play at random
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

    // Calls the keyPressed function to work
    keyPressed() {

    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}