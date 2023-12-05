//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Note5 {

    // Creating dimensions of the objects
    constructor() {
        // Adding word strings to the Note5 screen
        this.Note5String = "Dear Her,\n\n Why do I still long for you, after everything that you have done.\n You made me feel like nothing, nothing at all.\n Even when I gave you so many chances, each time he treated you wrong,\n you crawled back to me,\n and then each time he was treated you right, you left me.\n I am not a toy, I do not deserve to be played with.\n And you never cared to understand that.\n I am trying to move on and all you have ever done is stay in the past\n and hope that I do too. We no longer have a reason to keep this,\n whatever it is, going. You hurt me countless times and I never got a single,\n I am sorry.\n I do not deserve this. I truly do hope you have a wonderful future,\n I hope you treat him well and that you care about yourself the way I cared about you,\n unconditionally.\n Please do take care of yourself for me.\n Goodbye Mara.\n\n Sincerely,\n Evelyn ";
        this.Note5String2 = "(Press Any Key to Go Back to the Title)";
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(106, 142, 218);

        // Calls the displayNote5 function
        this.displayNote5();
    }

    // Displaying the Note5 and placing everything
    displayNote5() {
        push();
        textSize(22);
        fill(0);
        textAlign(LEFT, CENTER);
        textFont('Homemade Apple');
        text(this.Note5String, width / 80, height / 2);
        pop();
        push();
        textSize(20);
        fill(49, 52, 68);
        textAlign(CENTER, CENTER);
        textFont('Cormorant');
        text(this.Note5String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the mousePressed function to work
    keyPressed() {
        // Changes state to Title when any key is pressed
        currentState = new Title();
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}