class Note5 {
    constructor() {
        this.Note5String = "Dear Evelyn,\n\n I know I hurt you that day, I do not know what I was thinking.\n My feelings were so mixed up, and he was there, and you were there\n and I could not understand what my feelings were trying to tell me.\n I did not want this to happen, I want to be with you, truly.\n I took some time to think about my feelings\n and I want to be with you. You are who I want.\n I am going to call him today to clear it up with him.\n\n Sincerely,\n Her ";
        this.Note5String2 = "(Press Any Key to Go to Level 4)";
    }

    draw() {
        background(236, 204, 74);

        this.displayNote5();
    }

    displayNote3() {
        push();
        textSize(32);
        fill(0);
        textAlign(LEFT, CENTER);
        text(this.Note3String, width / 80, height / 2);
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        text(this.Note3String2, width / 2, 570);
        pop();
    }

    mousePressed() {

    }

    keyPressed() {

    }

    keyReleased() {

    }
}