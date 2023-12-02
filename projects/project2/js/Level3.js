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

        // An array to store the individual flowers
        this.foods = [];
        // How many flowers in the garden
        this.numFoods = 4;

        // Create our flowers by counting up to the number of the flowers
        for (let i = 0; i < this.numFoods; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(30, 50);
            let red = random(90, 120);
            let green = random(60, 150);
            let blue = random(50, 150);

            // Create a new flower
            let food = new Food(x, y, size, red, green, blue);
            // Add the flower to the array of flowers
            this.foods.push(food);

        }

        // // F-minor
        // this.notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

        // The strangers
        this.strangers = [];
        this.strangerSize = 50;

        for (let i = 0; i < this.strangerSize; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let red = random(50, 70);
            let green = random(80, 150);
            let blue = random(40, 80);
            // let note = random(this.notes);

            let stranger = new Stranger(x, y, red, green, blue, /*note*/);
            this.strangers.push(stranger);
        }
    }

    // Displays the objects
    draw() {

        background(99, 135, 56);

        this.checkEndings(this.foods);

        // Loop through all the flowers in the array and display them
        for (let i = 0; i < this.foods.length; i++) {
            this.foods[i].display();
            this.foods[i].checkFood(this.player);
            this.foods[i].checkFood(this.player2);
        }

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

        for (let i = 0; i < this.strangers.length; i++) {
            this.strangers[i].move();
            // this.strangers[i].bounce();
            this.strangers[i].display();
        }

    }

    checkEndings() {
        // Checks if all the flowers have died, then `flowers` state occurs
        this.allFoodEaten = true;
        for (let i = 0; i < this.foods.length; i++) {
            if (!this.foods[i].eaten) {
                this.allFoodEaten = false;
                break;
            }
        }

        // Checks if all flowers are actually dead and starts the ending
        if (this.allFoodEaten) {
            currentState = new Note3();
        }
    }



    mousePressed() {
        // Making the player2 bark when pressed on
        let i = dist(mouseX, mouseY, this.player2.x, this.player2.y);
        if (i < this.player2.w / 2) {
            barkSFX.play();
        }

        // this.createStranger(mouseX, mouseY);
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
