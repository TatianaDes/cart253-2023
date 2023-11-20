class Note2 {
    constructor() {
        this.Note1String = "Dear Evelyn,/n/n I know I said I really liked you, I know I kissed your hands, and I know I said yes to being with you. I love you, I really do./n I love the way you love me, because you really love me./n I remember being excited to talk about you to my family, I told everyone./n But when they asked who you were to me... I froze. You are who I wanted... Right?/n/n Sincerely, Her";
        this.Note1String2 = "(Press Any Key to Go to Level 3)";
    }

    draw() {
        background(236, 204, 74);

        this.displayNote2();
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
        // currentState = new Level3();
    }

    keyReleased() {

    }
}