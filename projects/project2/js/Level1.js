class Level1 {

    // Creating dimensions of the objects
    constructor() {
        this.player = new Player({
            x: 60,
            y: 300,
            w: 30,
            h: 80,
            red: 243,
            green: 156,
            blue: 25,
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
            red: 109,
            green: 82,
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
            red: 113,
            green: 61,
            blue: 244,
            doorKnobSize: 8,
        });
        this.house2 = new House({
            x: 200,
            y: 150,
            w: 50,
            h: 80,
            red: 43,
            green: 165,
            blue: 79,
            doorKnobSize: 8,
        });
        this.house3 = new House({
            x: 1200,
            y: 300,
            w: 50,
            h: 80,
            red: 28,
            green: 123,
            blue: 138,
            doorKnobSize: 8,
        });
        this.creature = new Creature({
            x: 1000,
            y: 100,
            w: 30,
            h: 60
        });
    }


    // Displays the objects
    draw() {
        background(186, 239, 158);

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

        // Draws the creature with all its functions
        push();
        this.creature.move(this.player);
        this.creature.checkSides();
        this.creature.display();
        pop();
    }

    checkEndings() {
        let d = dist(this.player2.x, this.player2.y, this.creature.x, this.creature.y);
        if (d < this.player2.size / 2 + this.creature.size / 2) {
            currentState = new Note1();
        }
    }

    mousePressed() {
        //Making everything mousePressed() in the House class be called
        house.mousePressed();
        house2.mousePressed();
        house3.mousePressed();
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