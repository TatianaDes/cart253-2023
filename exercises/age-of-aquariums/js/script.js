/**
 * Play Time
 * Tatiana Désormeaux
 * 
 * Use the fish aquarium for the dog random movements, make the user another dog and when the dogs come close to the user, they run away/around
 */

"use strict";

let dog = {
    x: 0,
    y: 0,
    size: 100
  }

let school = [];
let schoolSize = 4;

function preload() {

}


function setup() {
    createCanvas(600, 600);

    // Make the fish have random positions and clean up the code
    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFish(random(0, width), random(0, height));
    }
}

// Creating the fish object for all the fish
function createFish(x, y) {
    let fish = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

function draw() {
    background(0);

    moveDog();
    displayDog();

    // Calling the fuctions for all the fish in a clean way
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    }
}

// Move dog with the mouse
function moveDog() {
    dog.x = mouseX;
    dog.y = mouseY;
}

// Move fish randomly
function moveFish(fish) {
    let change = random(0, 1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }

// Position is being added onto the velocity of fish
fish.x = fish.x + fish.vx;
fish.y = fish.y + fish.vy;

// Constrain the fish to the width and height of the canvas
fish.x = constrain(fish.x, 0, width);
fish.y = constrain(fish.y, 0, height);
}

// Display the dog
function displayDog() {
    push();
    fill(255);
    ellipse(dog.x, dog.y, dog.size);
    pop(); 
    }

// Display the fish
function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}