//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Note2 {

    // Creating dimensions of the objects
    constructor() {
        // Adding word strings to the Note2 screen
        this.Note2String = "Dear Evelyn,\n\n I know I said I really liked you, I know I kissed your hands,\n and I know I said yes to being with you. I love you, I really do.\n I love the way you love me, because you really love me.\n I remember being excited to talk about you to my family, I told everyone.\n But when they asked who you were to me... I froze. You are who I wanted... Right?\n\n Sincerely, Her";
        this.Note2String2 = "(Press Any Key to Go to Level 3)";
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
        textSize(32);
        fill(0);
        textAlign(LEFT, CENTER);
        text(this.Note2String, width / 80, height / 2);
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        text(this.Note2String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Changes state to Level3 when any key is pressed
        currentState = new Level3();
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}