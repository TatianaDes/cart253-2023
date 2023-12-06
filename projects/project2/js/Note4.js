//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and following along his guidelines.
class Note4 {

    // Creating dimensions of the objects
    constructor() {
        // Adding word strings to the Note4 screen
        this.Note4String = `Dear Evelyn,\n\n I know after all this it is wrong for me to write to you.\n All the pain I caused you, all because of my feelings for him.\n I know I lied to you and I know when you treated me so right,\n I treated you the worst I could. You deserve better.\n You deserve someone who will love you\n and who will see you the way I see you.\n As someone who is kind, intelligent and so unbelievably caring.\n I really do love you, you know,\n I love you as much as I can love anyone,\n but it is never enough.\n I do miss you and care about you,\n and I always will reserve part of my heart for you.\n\n Sincerely,\n Her`;
        this.Note4String2 = `(Press Any Key to Go Back to the Title)`;
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(151, 113, 56);

        // Calls the displayNote4 function
        this.displayNote4();
    }

    // Displaying the Note4 and placing everything
    displayNote4() {
        push();
        textSize(26);
        fill(0);
        textAlign(LEFT, CENTER);
        // Font from Google Fonts
        // p5js.org for how to add fonts to p5
        textFont('Homemade Apple');
        text(this.Note4String, width / 80, height / 2);
        pop();
        push();
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        // Font from Google Fonts
        // p5js.org for how to add fonts to p5
        textFont('Cormorant');
        text(this.Note4String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Changes state to Level4 when any key is pressed
        currentState = new Level4();
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}