class Level2 {

    constructor() {
        this.player = new Player({
            x: 60,
            y: 300,
            w: 30,
            h: 80,
            red: 233,
            green: 98,
            blue: 0,
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
            red: 96,
            green: 57,
            blue: 28,
            leftKey: 65,
            rightKey: 68,
            upKey: 87,
            downKey: 83,
        });

        // // An array to store the individual flowers
        // this.flowers = [];
        // // How many flowers in the garden
        // this.numFlowers = 30;
        // // How many flowers have died
        // this.flowerDeath = 0;

        // // Create our flowers by counting up to the number of the flowers
        // for (let i = 0; i < this.flower.numFlowers; i++) {
        //     this.x = random(0, width);
        //     this.y = random(0, height / 2);
        //     this.size = random(50, 80);
        //     this.stemLength = random(50, 100);
        //     this.petalColor = {
        //         r: random(100, 255),
        //         g: random(100, 255),
        //         b: random(100, 255)
        //     }
        // // Create a new flower
        // this.flower = new Flower(x, y, size, stemLength, petalColor);
        // // Add the flower to the array of flowers
        // this.flowers.push(this.flower);
        // }
    }

    // Displays the objects
    draw() {
        background(116, 191, 70);

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

        // // Loop through all the flowers in the array and display them
        // for (let i = 0; i < this.flowers.length; i++) {
        //     this.flower = this.flowers[i];
        //     if (this.flower.alive) {
        //         this.flower.shrink();
        //         this.flower.display();
        //     }
        // }
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
