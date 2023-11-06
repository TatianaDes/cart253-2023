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
}


function draw() {
    background(183, 252, 238);

    push();
    player.move();
    player.display();
    pop();

    push();
    platform.display();
    pop();

    push();
    platform2.display();
    pop();

    push();
    platform3.display();
    pop();

    push();
    platform4.display();
    pop();

    push();
    door.display();
    pop();
}

function keyPressed() {
    player.keyPressed(keyCode);
}

function keyReleased() {
    player.keyReleased(keyCode);
}