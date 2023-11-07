/**
 * Longing
 * Tatiana Désormeaux
 * 
 * The prototype for a puzzle/platform game where a woman and her dog go on an adventure, finding notes and unlocking doors to unravel the truth.
 */

"use strict";

let player;

let platform;
let platform2;
let platform3;
let platform4;

let door;

let note;

let state = `title`; // Can be: title, simulation, note, door

// preload() creates the images I wish to put in my program
function preload() {

}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(600, 600);

    // Create the player inside the main script
    player = new Player(40, 531, 30, 80);

    // Create the platform inside the main script
    platform = new Platform(300, 600, 600, 35);
    platform2 = new Platform(100, 450, 300, 35);
    platform3 = new Platform(600, 300, 500, 35);
    platform4 = new Platform(100, 127, 400, 35);

    // Create the door inside the main script
    door = new Door(50, 70, 50, 80, 8);

    // Create the note inside the main script
    note = new Note(560, 250);
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
        noteCheck();
    }
    else if (state === `door`) {
        doorCheck();
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
        background(176, 249, 224);

        // Draws the player with all its functions
        push();
        player.move();
        player.checkGrounded();
        player.jumpGravity();
        player.checkSides();
        player.display();
        pop();

        // Draws the platform with all its functions
        push();
        platform.display();
        platform2.display();
        platform3.display();
        platform4.display();
        pop();

        // Draws the door with all its functions
        push();
        door.display();
        pop();

        // // Draws the note with all its functions
        push();
        note.display();
        pop();
    }
}

function noteCheck() {
    // Note state
    push();
    background(130, 34, 34);
    textSize(60);
    fill(255, 199, 78);
    textAlign(CENTER, CENTER);
    text(`Oh no! All the flowers are dead.`, width / 2, height / 2);
    textSize(20);
    fill(213, 170, 218);
    text(`(Refresh Page to Restart)`, width / 2, 350);
    pop();
}

function doorCheck() {
    // Door state
    push();
    background(130, 34, 34);
    textSize(60);
    fill(255, 199, 78);
    textAlign(CENTER, CENTER);
    text(`Oh no! All the flowers are dead.`, width / 2, height / 2);
    textSize(20);
    fill(213, 170, 218);
    text(`(Refresh Page to Restart)`, width / 2, 350);
    pop();
}

function checkEndings() {
    // Checks if the player and note overlap and creates the note ending
    let d = dist(player.x, player.y, note.x, note.y);
    if (d < player.size / 2 + note.size / 2) {
        state = `note`;
    }

    // Checks if the player and door overlap and creates the door ending
    let i = dist(player.x, player.y, door.x, door.y);
    if (i < player.size / 2 + door.size / 2) {
        state = `door`;
    }
}

function keyPressed() {
    // Moves player with pressed keys
    player.keyPressed(keyCode);

    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}

function keyReleased() {
    // Stops player with keys released
    player.keyReleased(keyCode);
}
