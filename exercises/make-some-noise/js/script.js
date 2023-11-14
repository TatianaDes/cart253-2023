/**
 * Longing (But with Sound)
 * Tatiana Désormeaux
 * 
 * Adding elements of sound to Project 2 "Longing"
 */

"use strict";

// the synth for the 3 notes
let synth1;
let synth2;
let synth3;

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
    createCanvas(1400, 600);

    userStartAudio();

    // create new synth for each circle
    synth1 = new p5.PolySynth();
    synth2 = new p5.PolySynth();
    synth3 = new p5.PolySynth();

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
        // red: 113,
        // green: 61,
        // blue: 244,
        size: 8
    });

    house2 = new House({
        x: 700,
        y: 500,
        w: 50,
        h: 80,
        // red: 43,
        // green: 165,
        // blue: 79,
        size: 8
    });

    house3 = new House({
        x: 700,
        y: 500,
        w: 50,
        h: 80,
        // red: 28,
        // green: 123,
        // blue: 138,
        size: 8
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

        // Draws the house with all its functions
        push();
        house.checkHouse(player);
        house.display();
        pop();

        push();
        house2.checkHouse(player);
        house2.displaySecondHouse();
        pop();

        push();
        house2.checkHouse(player);
        house2.displayThirdHouse();
        pop();
    }
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

    // look at distance between mouse and center of house
    let housedist = dist(mouseX, mouseY, house.x, house.y);
    // if mouse is inside house
    if (housedist < house.size / 2) {
        synth1.play('G2', 0.5, 0, 1.5); // play: the note G2 at volume 0.1, right away (0) for 1.5 seconds
    }


    // look at distance between mouse and center of house2
    let house2dist = dist(mouseX, mouseY, house2.x, house2.y);
    // if mouse is inside house2
    if (house2dist < house2.size / 2) {
        synth2.play(`C4`, .5, 0, 1);
    }

    // look at distance between mouse and center of house3
    let house3dist = dist(mouseX, mouseY, house3.x, house3.y);
    // if mouse is inside house3
    if (house3dist < house3.size / 2) {
        synth3.play(`G3`, .5, 0, 1);
    }


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
