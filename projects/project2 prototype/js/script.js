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

let state = `title`; // Can be: title, simulation, .....

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player(40, 531, 30, 80);

    // Create the platform inside the main script
    platform = new Platform(690, 600, 1380, 58);
    platform2 = new Platform(250, 450, 500, 35);
    platform3 = new Platform(1050, 300, 750, 35);
    platform4 = new Platform(250, 127, 650, 35);

    door = new Door(100, 70, 50, 80, 8);

    note = new Note(1300, 250);
}


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
        text(`Juggle the Ecosystem`, windowWidth / 2, windowHeight / 2);
        textSize(20);
        fill(90, 176, 57);
        text(`(Press Any Key to Start)`, windowWidth / 2, 350);
        textSize(15);
        fill(176, 129, 57);
        text(`Use the mouse to direct the paddle to catch the bees, and click the mouse to drop the weedkiller and make it harder. If the weedkiller kills 15 flowers, it is game over!`, 800, 570);
        pop();
    }

    function simulation() {
        // Simulation state
        background(176, 249, 224);

        push();
        player.move();
        player.display();
        player.checkOverlap(platform);
        pop();

        push();
        platform.display();
        platform2.display();
        platform3.display();
        platform4.display();
        pop();

        push();
        door.display();
        pop();

        push();
        note.display();
        pop();
    }
}

function noteCheck() {
    // flowers state
    push();
    background(130, 34, 34);
    textSize(60);
    fill(255, 199, 78);
    textAlign(CENTER, CENTER);
    text(`Oh no! All the flowers are dead.`, windowWidth / 2, windowHeight / 2);
    textSize(20);
    fill(213, 170, 218);
    text(`(Refresh Page to Restart)`, windowWidth / 2, 350);
    pop();
}

function doorCheck() {
    // flowers state
    push();
    background(130, 34, 34);
    textSize(60);
    fill(255, 199, 78);
    textAlign(CENTER, CENTER);
    text(`Oh no! All the flowers are dead.`, windowWidth / 2, windowHeight / 2);
    textSize(20);
    fill(213, 170, 218);
    text(`(Refresh Page to Restart)`, windowWidth / 2, 350);
    pop();
}

function checkEndings() {
    let d = dist(player.x, player.y, note.x, note.y);
    if (d < player.size / 2 + note.size / 2) {
        state = `note`;
    }

    let i = dist(player.x, player.y, door.x, door.y);
    if (i < player.size / 2 + door.size / 2) {
        state = `door`;
    }
}

function keyPressed() {
    player.keyPressed(keyCode);

    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}

function keyReleased() {
    player.keyReleased(keyCode);
}
