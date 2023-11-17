class Title {

    constructor() {
        this.titleString = "Longing";
        this.titleString2 = "(Press Any Key to Start)";
        this.titleString3 = "Use the left and right arrow keys and WASD to move and try to catch the creature, and click around to discover.";
    }

    draw() {
        background(15, 29, 60);

        this.displayTitle();
    }

    displayTitle() {
        push();
        textSize(60);
        fill(241, 239, 91);
        textAlign(CENTER, CENTER);
        text(this.titleString, width / 2, height / 2);
        textSize(20);
        fill(102, 107, 131);
        text(this.titleString2, width / 2, 350);
        textSize(15);
        fill(255);
        text(this.titleString3, 955, 570);
        pop();
    }

    mousePressed() {

    }

    keyPressed() {
        currentState = new Level1();
    }
}