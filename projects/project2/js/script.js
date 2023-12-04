/**
 * Longing
 * Tatiana Désormeaux
 * 
 * A program about longing for love from someone that does not reciprocate the same feelings.
 * 
 * //Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
 */

"use strict";

// Stating the currentState variable
let currentState;

// Stating the barkSFX variable
let barkSFX;


// preload() creates the images I wish to put in my program
function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(1350, 600);

    // Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
    // Stating what class should be called when starting the program
    currentState = new Title();

    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);

    // Allows audio to start
    userStartAudio();
}

// draw() displays all the different states and their functions
function draw() {

    // Drawing the current state
    currentState.draw();
}

// Calls the mousePressed function to work
function mousePressed() {
    // Allows all mousePressed functions to work in the program
    currentState.mousePressed();
}

// Calls the keyPressed function to work
function keyPressed() {
    // Allows all keyPressed functions to work in the program
    currentState.keyPressed(keyCode);
}

// Calls the keyReleased function to work
function keyReleased() {
    // Allows all keyReleased functions to work in the program
    currentState.keyReleased(keyCode);
}
