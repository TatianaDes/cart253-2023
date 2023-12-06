//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class Title {

    // Creating a title with all its variables
    constructor() {
        // Adding word strings to the title screen
        this.titleString = `Longing`;
        this.titleString2 = `(Press Any Key to Start)`;
        this.titleString3 = `Use the left and right arrow keys and WASD to move, and try to get all 5 notes.`;
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(15, 29, 60);

        // Calls the displayTitle function
        this.displayTitle();
    }

    // Displaying the title and placing everything
    displayTitle() {
        push();
        textSize(60);
        fill(241, 239, 91);
        textAlign(CENTER, CENTER);
        textFont('Cormorant');
        text(this.titleString, width / 2, height / 2);
        pop();
        push();
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        textFont('Cormorant');
        text(this.titleString2, width / 2, 350);
        textSize(18);
        fill(255);
        text(this.titleString3, 1065, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Changes state to Level1 when any key is pressed
        currentState = new Level1();
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}