//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Level2 {

    // Creating dimensions of the objects
    constructor() {
        // Calling all the variables from the classes
        // Creating the variables from the Player class
        this.player = new Player({
            x: 60,
            y: 300,
            w: 30,
            h: 80,
            red: 233,
            green: 98,
            blue: 0,
            leftKey: UP_ARROW,
            rightKey: DOWN_ARROW,
            upKey: LEFT_ARROW,
            downKey: RIGHT_ARROW
        });
        //Credit to Pippin Barr for showing me how to make a second player using the same Player class.
        // Creating the variables from the Player class for the second player
        this.player2 = new Player({
            x: 90,
            y: 380,
            w: 50,
            h: 25,
            red: 96,
            green: 57,
            blue: 28,
            leftKey: 83,
            rightKey: 87,
            upKey: 68,
            downKey: 65
        });

        //Credit to  Mathilde Davan for showing me how to add arrays into my classes
        // An array to store the individual flowers
        this.flowers = [];
        // How many flowers in the garden
        this.numFlowers = 30;

        // Create our flowers by counting up to the number of the flowers
        for (let i = 0; i < this.numFlowers; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(50, 80);
            let stemLength = random(50, 100);
            let petalColor = {
                r: random(50, 150),
                g: random(50, 150),
                b: random(50, 150)
            }
            // Create a new flower
            let flower = new Flower(x, y, size, stemLength, petalColor);
            // Add the flower to the array of flowers
            this.flowers.push(flower);
        }
    }

    // draw() displays the background and calls the functions that need to be drawn 
    draw() {
        background(116, 191, 70);

        // Draws the checkEndings function for the flowers
        this.checkEndings(this.flowers);

        // Loop through all the flowers in the array and display them
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            if (flower.alive) {
                flower.shrink();
                this.player.tryToPollinate(flower);
                this.player2.tryToPollinate(flower);
                flower.display();
            }
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
    }

    //Credit to Pippin Barr for showing us how to make an ending when all the flowers die for the exercise "Juggle Garden." 
    // Creates the checkEnding function and what it does
    checkEndings() {
        // Checks if all the flowers have died, then `flowers` state occurs
        this.allFlowersDead = true;
        for (let i = 0; i < this.flowers.length; i++) {
            if (this.flowers[i].alive) {
                this.allFlowersDead = false;
                break;
            }
        }

        // Checks if all flowers are actually dead and starts the ending
        if (this.allFlowersDead) {
            currentState = new Note2();
        }
    }

    //Credit to Pippin Barr and Mathilde Davan for helping me with how to add sound effects to my code.
    //Credit to Pippin Barr for the video "10.1. Reintroducing p5.sound," for the dog barking sound effect. 
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
