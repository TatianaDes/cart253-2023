/**
 * Longing
 * Tatiana Désormeaux
 * 
 * The prototype for a puzzle/platform game where a woman and her dog go on an adventure, finding notes and unlocking doors to unravel the truth.
 */

"use strict";

let player;
let player2;

let creature;

let house;

let state = `title`; // Can be: title, simulation, .....

// preload() creates the images I wish to put in my program
function preload() {

}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create the player inside the main script
    player = new Player({
        x: 50,
        y: 550,
        w: 30,
        h: 80,
        leftKey: LEFT_ARROW,
        rightKey: RIGHT_ARROW,
        upKey: UP_ARROW,
        downKey: DOWN_ARROW
    });

    player2 = new Player({
        x: 20,
        y: 200,
        w: 30,
        h: 80,
        leftKey: 65,
        rightKey: 68,
        upKey: 87,
        downKey: 83
    });

    creature = new Creature(1000, 100, 30, 80);

    house = new House(50, 70, 50, 80, 8);
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
    else if (state === `note`) {
        checkNote();
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
        background(186, 239, 158);

        checkEndings();

        // Draws the player with all its functions
        push();
        player.move();
        player.display();
        pop();

        push();
        player2.move();
        player2.display();
        pop();

        push();
        creature.move(player);
        creature.checkSides();
        creature.display();
        pop();

        push();
        house.display();
        pop();
    }
}

function checkEndings() {
    let d = dist(player.x, player.y, creature.x, creature.y);
    if (d < player.size / 2 + creature.size / 2) {
        state = `note`;
    }
}

function checkNote() {
    push();
    background(236, 204, 74);
    textSize(32);
    fill(0);
    textAlign(LEFT, CENTER);
    text(`Dear Evelyn,\n I remember the first time you held me in your arms.\n I remember looking up at you as you held me, I remember the warmth, and feeling at peace.\n I felt happy, for the first time I knew I felt happy.\n I remember looking up as you stared down at me while holding me, you looked so beautiful.\n That was a really great day. Wasn't it?\n Sincerely,\n Her`, width / 50, height / 2);
    pop();
}

function keyPressed() {
    // Moves player with pressed keys
    player.keyPressed(keyCode);
    player2.keyPressed(keyCode);

    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}

function keyReleased() {
    // Stops player with keys released
    player.keyReleased(keyCode);
    player2.keyReleased(keyCode);
}
