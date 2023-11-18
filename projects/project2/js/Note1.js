class Note1 {
    constructor() {
        this.Note1String = "Dear Evelyn,\n\n I remember the first time you held me in your arms.\n I remember looking up at you as you held me, I remember the warmth, and feeling at peace.\n I felt happy, for the first time I knew I felt happy.\n I remember looking up as you stared down at me while holding me, you looked so beautiful.\n That was a really great day.\n Wasn't it?\n\n Sincerely,\n Her";
        this.Note1String2 = "(Press Any Key to Go to Level 2)";
    }

    draw() {
        background(236, 204, 74);

        this.displayNote1();
    }

    displayNote1() {
        push();
        textSize(32);
        fill(0);
        textAlign(LEFT, CENTER);
        text(this.Note1String, width / 80, height / 2);
        textSize(20);
        fill(102, 107, 131);
        textAlign(CENTER, CENTER);
        text(this.Note1String2, width / 2, 570);
        pop();
    }

    mousePressed() {

    }

    keyPressed() {
        currentState = new Level2();
    }

    keyReleased() {

    }
}
