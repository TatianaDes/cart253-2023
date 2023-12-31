//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class Note2 {

    // Creating dimensions of the objects
    constructor() {
        // Adding word strings to the Note2 screen
        this.Note2String = `Dear Evelyn,\n\n I know I said I really liked you, I know I kissed your hands,\n and I know I said yes to being with you. I love you, I really do.\n I love the way you love me, because you really love me.\n I remember being excited to talk about you to my family,\n I told everyone.\n But when they asked who you were to me... I froze.\n You are who I wanted... Right?\n\n Sincerely,\n Her`;
        this.Note2String2 = `(Press the Space Bar to Go to Level 3)`;
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(216, 186, 67);

        // Calls the displayNote2 function
        this.displayNote2();
    }

    // Displaying the Note2 and placing everything
    displayNote2() {
        push();
        textSize(35);
        fill(0);
        textAlign(LEFT, CENTER);
        // Font from Google Fonts
        // p5js.org for how to add fonts to p5
        textFont('Homemade Apple');
        text(this.Note2String, width / 80, height / 2);
        pop();
        push();
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        // Font from Google Fonts
        // p5js.org for how to add fonts to p5
        textFont('Cormorant');
        text(this.Note2String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Credit to Pippin Bar for the video "5.6. Keyboard input" for teaching me how to use keycodes.
        if (keyCode === 32) {
            // Changes state to Level3 when any key is pressed
            currentState = new Level3();
        }
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}