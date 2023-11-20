class Level3 {

    constructor() {
        this.player = new Player({
            x: 60,
            y: 300,
            w: 30,
            h: 80,
            red: 192,
            green: 121,
            blue: 37,
            leftKey: LEFT_ARROW,
            rightKey: RIGHT_ARROW,
            upKey: UP_ARROW,
            downKey: DOWN_ARROW
        });
        this.player2 = new Player({
            x: 90,
            y: 380,
            w: 50,
            h: 25,
            red: 79,
            green: 59,
            blue: 36,
            leftKey: 65,
            rightKey: 68,
            upKey: 87,
            downKey: 83,
        });
    }

    // Displays the objects
    draw() {
        background(99, 135, 56);

        this.checkEndings(this.flowers);

        // Draws the player with all its functions
        push();
        this.player.move();
        this.player.display();
        pop();

        // Draws the player2 with all its functions
        push();
        this.player2.move();
        this.player2.display();
        pop();
    }

    checkEndings() {

    }

    mousePressed() {

    }

    keyPressed(keyCode) {
        this.player.keyPressed(keyCode);
        this.player2.keyPressed(keyCode);
    }

    keyReleased(keyCode) {
        this.player.keyReleased(keyCode);
        this.player2.keyReleased(keyCode);
    }

}