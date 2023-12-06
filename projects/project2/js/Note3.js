//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class Note3 {

    // Creating dimensions of the objects
    constructor() {
        // Adding word strings to the Note3 screen
        this.Note3String = `Dear Evelyn,\n\n I know I hurt you that day, I do not know what I was thinking.\n My feelings were so mixed up, and he was there, and you were there\n and I could not understand what my feelings were trying to tell me.\n I did not want this to happen, I want to be with you, truly.\n I took some time to think about my feelings\n and I want to be with you. You are who I want.\n I am going to call him today to clear it up with him.\n\n Sincerely,\n Her`;
        this.Note3String2 = `(Press the Space Bar to Go to Level 4)`;
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(181, 137, 72);

        // Calls the displayNote3 function
        this.displayNote3();
    }

    // Displaying the Note3 and placing everything
    displayNote3() {
        push();
        textSize(34);
        fill(0);
        textAlign(LEFT, CENTER);
        // Font from Google Fonts
        // p5js.org for how to add fonts to p5
        textFont('Homemade Apple');
        text(this.Note3String, width / 80, height / 2);
        pop();
        push();
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        // Font from Google Fonts
        // p5js.org for how to add fonts to p5
        textFont('Cormorant');
        text(this.Note3String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Credit to Pippin Bar for the video "5.6. Keyboard input" for teaching me how to use keycodes.
        if (keyCode === 32) {
            // Changes state to Level4 when any key is pressed
            currentState = new Level4();
        }
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}