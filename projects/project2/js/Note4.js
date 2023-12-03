class Note4 {

    // Creating dimensions of the objects
    constructor() {
        // Adding word strings to the Note4 screen
        this.Note4String = "Dear Evelyn,\n\n I know after all this it is wrong for me to write to you. All the pain I caused you,\n all because of my feelings for him.\n I know I lied to you and I know when you treated me so right, I treated you the worst I could.\n You deserve better.\n You deserve someone who will love you and who will see you the way I see you.\n As someone who is kind, intelligent and so unbelievably caring.\n I really do love you, you know, I loved you as much as I could love anyone,\n but it is never enough.\n I do miss you and care about you, and I always will reserve part of my heart for you.\n\n Sincerely,\n Her ";
        this.Note4String2 = "(Press Any Key to Go Back to the Title)";
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
        textSize(32);
        fill(0);
        textAlign(LEFT, CENTER);
        text(this.Note4String, width / 80, height / 2);
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        text(this.Note4String2, width / 2, 570);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {
        // Changes state to Title when any key is pressed
        currentState = new Title();
    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}