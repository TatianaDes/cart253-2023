class Note4 {
    constructor() {
        this.Note4String = "Dear Evelyn,\n\n I know after all this it is wrong for me to write to you. All the pain I caused you,\n all because of my feelings for him.\n I know I lied to you and I know when you treated me so right, I treated you the worst I could.\n You deserve better.\n You deserve someone who will love you and who will see you the way I see you.\n As someone who is kind, intelligent and so unbelievably caring.\n I really do love you, you know, I loved you as much as I could love anyone,\n but it is never enough.\n I do miss you and care about you, and I always will reserve part of my heart for you.\n\n Sincerely,\n Her ";
        this.Note4String2 = "(Press Any Key to Go Back to the Title)";
    }

    draw() {
        background(236, 204, 74);

        this.displayNote4();
    }

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

    mousePressed() {

    }

    keyPressed() {
        currentState = new Title();
    }

    keyReleased() {

    }
}