//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Level4 {

    // Creating dimensions of the objects
    constructor() {
        // Calling all the variables from the classes
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
        //Credit to Pippin Barr for showing me how to make a second player using the same Player class.
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

        //Credit to Pippin Barr for showing me how to make multiple houses using the same House class.
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

        //Credit to  Mathilde Davan for showing me how to add arrays into my classes
        // An array to store the individual flowers
        this.flowers = [];
        // How many flowers in the garden
        this.numFlowers = 10;

        // Create our flowers by counting up to the number of the flowers
        for (let i = 0; i < this.numFlowers; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(30, 50);
            let stemLength = random(50, 100);
            let petalColor = {
                r: random(154, 170),
                g: random(84, 140),
                b: random(45, 56)
            }
            // Create a new flower
            let flower = new Flower(x, y, size, stemLength, petalColor);
            // Add the flower to the array of flowers
            this.flowers.push(flower);
        }

        // An array to store the individual food
        this.foods = [];
        // How much food there is
        this.numFoods = 4;

        // Create our food by counting up to the number of the food
        for (let i = 0; i < this.numFoods; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(20, 40);
            let red = random(89, 120);
            let green = random(8, 49);
            let blue = random(8, 49);

            // Create a new food
            let food = new Food(x, y, size, red, green, blue);
            // Add the food to the array of food
            this.foods.push(food);
        }

        // Create the realization class and its variables
        this.realization = new Realization({
            x: 1000,
            y: 100,
            w: 60,
            h: 100
        });
    }

    // draw() displays the background and calls the functions that need to be drawn
    draw() {
        background(187, 195, 64);

        // Draws the checkEndings function for the player, realization, and food
        this.checkEndings(this.player, this.realization, this.foods);

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

        // Loop through all the flowers in the array and display them
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            if (flower.alive) {
                flower.shrink();
                flower.display();
            }
        }

        // Loop through all the food in the array and display them
        for (let i = 0; i < this.foods.length; i++) {
            this.foods[i].display();
            this.foods[i].checkFood(this.player);
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

        // Draws realization with all its functions
        push();
        this.realization.move(this.player, this.player2);
        this.realization.checkSides();
        this.realization.display();
        pop();
    }

    // Credit to Pippin Barr for the video of the activity, "5.8. Looking for Love" to see how this code is done.
    // Creates the checkEnding function and what it does
    checkEndings() {
        // Checks the distance between realization and the player and when overlaped "Note4" state occurs
        let d = dist(this.player.x, this.player.y, this.realization.x, this.realization.y);
        if (d < this.player.size / 2 + this.realization.size / 2) {
            currentState = new Note4();
        }

        //Credit to Pippin Barr for showing us how to make an ending when all the flowers die for the exercise "Juggle Garden," but I used it for a food array instead.
        // Checks if all the food is eaten, then `Note5` state occurs
        this.allFoodEaten = true;
        for (let i = 0; i < this.foods.length; i++) {
            if (!this.foods[i].eaten) {
                this.allFoodEaten = false;
                break;
            }
        }

        // Checks if all food is actually eaten and starts the ending
        if (this.allFoodEaten) {
            currentState = new Note5();
        }
    }

    //Credit to Pippin Barr and Mathilde Davan for helping me with how to add sound effects to my code and make notes able to be played.
    //Credit to Pippin Barr for the video "10.1. Reintroducing p5.sound," for the dog barking sound effect. 
    // Calls the mousePressed function to work
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