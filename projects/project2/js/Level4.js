class Level4 {

    // Creating dimensions of the objects
    constructor() {
        this.player = new Player({
            x: 60,
            y: 300,
            w: 30,
            h: 80,
            red: 168,
            green: 107,
            blue: 28,
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
            red: 53,
            green: 44,
            blue: 34,
            leftKey: 65,
            rightKey: 68,
            upKey: 87,
            downKey: 83,
        });

        this.house = new House({
            x: 700,
            y: 500,
            w: 50,
            h: 80,
            red: 44,
            green: 25,
            blue: 88,
            doorKnobSize: 8,
        });
        this.house2 = new House({
            x: 200,
            y: 150,
            w: 50,
            h: 80,
            red: 36,
            green: 124,
            blue: 62,
            doorKnobSize: 8,
        });
        this.house3 = new House({
            x: 1200,
            y: 300,
            w: 50,
            h: 80,
            red: 20,
            green: 88,
            blue: 98,
            doorKnobSize: 8,
        });
    }


    // Displays the objects
    draw() {
        background(187, 195, 64);

        this.checkEndings(this.player2, this.creature);

        // Draws the house with all its functions
        push();
        this.house.display();
        pop();

        // Draws the house2 with all its functions
        push();
        this.house2.display();
        pop();

        // Draws the house3 with all its functions
        push();
        this.house3.display();
        pop();

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
        // Making the player2 bark when pressed on
        let i = dist(mouseX, mouseY, this.player2.x, this.player2.y);
        if (i < this.player2.w / 2) {
            barkSFX.play();
        }
        //Making everything mousePressed() in the House class be called
        this.house.mousePressed();
        this.house2.mousePressed();
        this.house3.mousePressed();

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