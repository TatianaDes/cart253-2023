/**
 * Longing
 * Tatiana Désormeaux
 * 
 * The prototype for a puzzle/platform game where a woman and her dog go on an adventure, finding notes and unlocking doors to unravel the truth.
 */

"use strict";

let player;
// let player2;

let creature;

let state = `title`; // Can be: title, simulation, .....

// preload() creates the images I wish to put in my program
function preload() {

}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create the player inside the main script
    player = new Player(200, 200, 30, 80);

    // player2 = new Player({
    //     x: 20,
    //     y: 200,
    //     w: 30,
    //     h: 80,
    //     leftKey: 65,
    //     rightKey: 68,
    //     upKey: 87,
    //     downKey: 83
    // });

    creature = new Creature(40, 531, 30, 80);
}

// draw() displays all the different states and their functions
function draw() {
    // Setting up all the different states
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }

    function title() {
        // Title state
        push();
        background(3, 59, 10);
        textSize(60);
        fill(25, 187, 100);
        textAlign(CENTER, CENTER);
        text(`Longing`, width / 2, height / 2);
        textSize(20);
        fill(90, 176, 57);
        text(`(Press Any Key to Start)`, width / 2, 350);
        textSize(15);
        fill(176, 129, 57);
        text(`Use the left and right arrow keys to move and jump with the spacebar.`, 350, 570);
        pop();
    }

    function simulation() {
        // Simulation state
        background(38, 90, 11);

        // Draws the player with all its functions
        push();
        player.move();
        player.display();
        pop();

        // push();
        // player2.move();
        // player2.display();
        // pop();

        push();
        creature.move(player);
        creature.checkSides();
        creature.display();
        pop();
    }
}

function checkEndings() {

}

function keyPressed() {
    // Moves player with pressed keys
    player.keyPressed(keyCode);
    // player2.keyPressed(keyCode);

    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}

function keyReleased() {
    // Stops player with keys released
    player.keyReleased(keyCode);
    // player2.keyReleased(keyCode);
}
