/**
 * Longing
 * Tatiana Désormeaux
 * 
 * The prototype for a puzzle/platform game where a woman and her dog go on an adventure, finding notes and unlocking doors to unravel the truth.
 */

"use strict";

let player;

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player(200, 200, 30, 80);
}


function draw() {
    background(183, 252, 238);

    player.move();
    player.display();
}

function keyPressed() {
    player.keyPressed(keyCode);
}

function keyReleased() {
    player.keyReleased(keyCode);
}