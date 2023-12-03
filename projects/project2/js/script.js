/**
 * Longing
 * Tatiana Désormeaux
 * 
 * Adding elements of sound to Project 2 "Longing"
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

    // Stating what class should be called when starting the program
    currentState = new Level4();

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
