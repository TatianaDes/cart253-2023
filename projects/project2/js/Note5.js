class Note5 {
    constructor() {
        this.Note5String = "Dear Her,\n\n Why do I still long for you, after everything that you have done.\n You made me feel like nothing, nothing at all.\n Even when I gave you so many chances, each time he treated you wrong, you crawled back to me,\n and then each time he was treated you right,\n you left me. I am not a toy, I do not deserve to be played with. And you never cared to understand that.\n I am trying to move on and all you have ever done is stay in the past and hope that I do too.\n We no longer have a reason to keep this,\n whatever it is, going. You hurt me countless times and I never got a single, I am sorry.\n I do not deserve this. I truly do hope you have a wonderful future,\n I hope you treat him well and that you care about yourself the way I cared about you, unconditionally.\n Please do take care of yourself for me.\n Goodbye Mara.\n\n Sincerely,\n Evelyn ";
        this.Note5String2 = "(Press Any Key to Go Back to the Title)";
    }

    draw() {
        background(236, 204, 74);

        this.displayNote5();
    }

    displayNote5() {
        push();
        textSize(27);
        fill(0);
        textAlign(LEFT, CENTER);
        text(this.Note5String, width / 80, height / 2);
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        text(this.Note5String2, width / 2, 570);
        pop();
    }

    mousePressed() {
        currentState = new Title();
    }

    keyPressed() {

    }

    keyReleased() {

    }
}