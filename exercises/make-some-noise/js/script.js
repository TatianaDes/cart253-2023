/**
 * Longing (But with Sound)
 * Tatiana Désormeaux
 * 
 * Adding elements of sound to Project 2 "Longing"
 */

"use strict";

let barkSFX;

let player;
let player2;

let creature;

let house;
let house2;
let house3;

let state = `title`; // Can be: title, simulation, note

// preload() creates the images I wish to put in my program
function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(1350, 600);

    userStartAudio();

    // Create the player inside the main script
    player = new Player({
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

    player2 = new Player({
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

    // Create creature in the main script
    creature = new Creature({
        x: 1000,
        y: 100,
        w: 30,
        h: 60
    });

    // Create the house in the main script
    house = new House({
        x: 700,
        y: 500,
        w: 50,
        h: 80,
        red: 113,
        green: 61,
        blue: 244,
        doorKnobSize: 8,
        note: "G4"
    });

    house2 = new House({
        x: 200,
        y: 150,
        w: 50,
        h: 80,
        red: 43,
        green: 165,
        blue: 79,
        doorKnobSize: 8,
        note: "C5"
    });

    house3 = new House({
        x: 1200,
        y: 300,
        w: 50,
        h: 80,
        red: 28,
        green: 123,
        blue: 138,
        doorKnobSize: 8,
        note: "F4"
    });
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
}
function title() {
    // Title state
    push();
    background(15, 29, 60);
    textSize(60);
    fill(241, 239, 91);
    textAlign(CENTER, CENTER);
    text(`Longing`, width / 2, height / 2);
    textSize(20);
    fill(102, 107, 131);
    text(`(Press Any Key to Start)`, width / 2, 350);
    textSize(15);
    fill(255);
    text(`Use the left and right arrow keys and WASD to move and try to catch the creature.`, 1090, 570);
    pop();
}

function simulation() {
    // Simulation state
    background(186, 239, 158);

    checkEndings();

    // Draws the house with all its functions
    push();
    house.display();
    pop();

    push();
    house2.display();
    pop();

    push();
    house3.display();
    pop();

    // Draws the player with all its functions
    push();
    player.move();
    player.display();
    pop();

    push();
    player2.move();
    player2.display();
    pop();

    // Draws the creature with all its functions
    push();
    creature.move(player);
    creature.checkSides();
    creature.display();
    pop();
}

// Checks if the player touches the creature and triggers the `note` state
function checkEndings() {
    let d = dist(player2.x, player2.y, creature.x, creature.y);
    if (d < player2.size / 2 + creature.size / 2) {
        state = `note`;
    }
}


function checkNote() {
    // Note state
    push();
    background(236, 204, 74);
    textSize(32);
    fill(0);
    textAlign(LEFT, CENTER);
    text(`Dear Evelyn,\n\n I remember the first time you held me in your arms.\n I remember looking up at you as you held me, I remember the warmth, and feeling at peace.\n I felt happy, for the first time I knew I felt happy.\n I remember looking up as you stared down at me while holding me, you looked so beautiful.\n That was a really great day.\n Wasn't it?\n\n Sincerely,\n Her`, width / 22, height / 2);
    pop();

    push();
    textSize(32);
    fill(102, 107, 131);
    textAlign(CENTER, CENTER);
    text(`(Refresh Page to Restart)`, width / 2, 570);
    pop();
}

function mousePressed() {
    // setInterval(playRandomNote, 150);

    house.mousePressed();
    house2.mousePressed();
    house3.mousePressed();


    // Making the player2 bark when pressed on
    let i = dist(mouseX, mouseY, player2.x, player2.y);
    if (i < player2.w / 2) {
        barkSFX.play();
    }

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
