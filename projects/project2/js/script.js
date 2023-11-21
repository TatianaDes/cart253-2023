/**
 * Longing
 * Tatiana Désormeaux
 * 
 * Adding elements of sound to Project 2 "Longing"
 */

"use strict";

let currentState;

// let barkSFX;

// preload() creates the images I wish to put in my program
function preload() {
    // barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(1350, 600);

    currentState = new Note2();

    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);

    // Allows audio to start
    userStartAudio();
}

// draw() displays all the different states and their functions
function draw() {

    currentState.draw();
}

function mousePressed() {
    // // Making the player2 bark when pressed on
    // let i = dist(mouseX, mouseY, player2.x, player2.y);
    // if (i < player2.w / 2) {
    //     barkSFX.play();
    // }
}

function keyPressed() {
    currentState.keyPressed(keyCode);
}

function keyReleased() {
    currentState.keyReleased(keyCode);
}
