class Level3 {

    // Creating dimensions of the objects
    constructor() {
        // Calling all the variables from the classes
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

        // An array to store the individual food
        this.foods = [];
        // How much food there is
        this.numFoods = 4;

        // Create our food by counting up to the number of the food
        for (let i = 0; i < this.numFoods; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(30, 50);
            let red = random(90, 120);
            let green = random(60, 150);
            let blue = random(50, 150);

            // Create a new food
            let food = new Food(x, y, size, red, green, blue);
            // Add the food to the array of foods
            this.foods.push(food);

        }

        // Creating the stranger array and size
        this.strangers = [];
        this.strangerSize = 50;

        // Creating the stranger array with all its variables
        for (let i = 0; i < this.strangerSize; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let red = random(50, 70);
            let green = random(80, 150);
            let blue = random(40, 80);

            // Calling the Stranger class
            let stranger = new Stranger(x, y, red, green, blue);
            this.strangers.push(stranger);
        }
    }

    // draw() displays the background and calls the functions that need to be drawn
    draw() {
        background(99, 135, 56);

        // Draws the checkEndings function for the food
        this.checkEndings(this.foods);

        // Loop through all the food in the array and display them
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

        // Draws the stranger array with all its functions
        for (let i = 0; i < this.strangers.length; i++) {
            this.strangers[i].move();
            // this.strangers[i].bounce();
            this.strangers[i].display();
        }

    }

    // Creates the checkEnding function and what it does
    checkEndings() {
        // Checks if all the food is eaten, then `Note3` state occurs
        this.allFoodEaten = true;
        for (let i = 0; i < this.foods.length; i++) {
            if (!this.foods[i].eaten) {
                this.allFoodEaten = false;
                break;
            }
        }

        // Checks if all food is actually eaten and starts the ending
        if (this.allFoodEaten) {
            currentState = new Note3();
        }
    }

    // Calls the mousePressed function to work
    mousePressed() {
        // Making the player2 bark when pressed on
        let i = dist(mouseX, mouseY, this.player2.x, this.player2.y);
        if (i < this.player2.w / 2) {
            barkSFX.play();
        }
    }

    // Calls the keyPressed function to work
    keyPressed(keyCode) {
        // Allows the keycodes for both players to work
        this.player.keyPressed(keyCode);
        this.player2.keyPressed(keyCode);
    }

    // Calls the keyReleased function to work
    keyReleased(keyCode) {
        // Allows the keycodes for both players to work
        this.player.keyReleased(keyCode);
        this.player2.keyReleased(keyCode);
    }
}
