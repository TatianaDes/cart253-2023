/**
 * Longing
 * Tatiana Désormeaux
 * 
 * The prototype for a puzzle/platform game where a woman and her dog go on an adventure, finding notes and unlocking doors to unravel the truth.
 */

"use strict";

let player;

let platform;

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player(40, 531, 30, 80);

    // Create the paddle inside the main script
    platform = new Platform(2800, 40);
}


function draw() {
    background(183, 252, 238);

    player.move();
    player.display();

    push();
    platform.display();
    pop();
}

function keyPressed() {
    player.keyPressed(keyCode);
}

function keyReleased() {
    player.keyReleased(keyCode);
}