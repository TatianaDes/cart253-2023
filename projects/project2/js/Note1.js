//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Note1 {

    // Creating a Note1 with all its variables
    constructor() {
        // Adding word strings to the Note1 screen
        this.Note1String = "Dear Evelyn,\n\n I remember the first time you held me in your arms.\n I remember looking up at you as you held me,\n I remember the warmth, and feeling at peace.\n I felt happy, for the first time I knew I felt happy.\n I remember looking up as you stared down at me while holding me,\n you looked so beautiful.\n That was a really great day.\n Wasn't it?\n\n Sincerely,\n Her";
        this.Note1String2 = "(Press Any Key to Go to Level 2)";
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(236, 204, 74);

        // Calls the displayNote1 function
        this.displayNote1();
    }

    // Displaying the Note1 and placing everything
    displayNote1() {
        push();
        textSize(33);
        fill(0);
        textAlign(LEFT, CENTER);
        textFont('Homemade Apple');
        text(this.Note1String, width / 80, height / 2);
        pop();
        push();
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        textFont('Cormorant');
        text(this.Note1String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Changes state to Level2 when any key is pressed
        currentState = new Level2();
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}
