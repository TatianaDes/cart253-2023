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
    size: 40
  }

let school = [];
let schoolSize = 4;

let food = [];
let foodSize = 0;

function preload() {

}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // Make the fish have random positions and clean up the code
    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFish(random(0, width), random(0, height));
    }

    for (let i = 0; i < foodSize; i++) {
        food[i] = createDogFood(random(0, width), random(0, height));
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
        ax: 0,
        ay: 0,
        acceleration: 0.1,
        maxSpeed: 2
    };
    return fish;
}

// Creating the dogFood object for all the dog food
function createDogFood(x, y) {
    let dogFood = {
        x: x,
        y: y,
        size: 20,
        eaten: false
    };
    return dogFood;
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

    // Calling the functions for all the fish in a clean way
    for (let i = 0; i < food.length; i++) {
        displayFood(food[i]);
    }
    

}



// Move dog with the mouse
function moveDog() {
    dog.x = mouseX;
    dog.y = mouseY;
}

// Make the fish run away from the dog
function moveFish(fish) {
    if (mouseX < fish.x) {
        fish.ax = fish.acceleration;
    }
    else {
        fish.ax = -fish.acceleration;
    }

    if (mouseY < fish.y) {
        fish.ay = fish.acceleration;
    }
    else {
        fish.ay = -fish.acceleration;
    }

    /* Trying to see if I can make the fish scared of the dog but attracted to the food
    if (food.x < fish.x) {
        fish.ax = -fish.acceleration;
    }
    else {
        fish.ax = fish.acceleration;
    }

    if (food.y < fish.y) {
        fish.ay = -fish.acceleration;
    }
    else {
        fish.ay = fish.acceleration;
    }
    */

    fish.vx = fish.vx + fish.ax;
    fish.vx = constrain(fish.vx, -fish.maxSpeed, fish.maxSpeed);
    fish.vy = fish.vy + fish.ay;
    fish.vy = constrain(fish.vy, -fish.maxSpeed, fish.maxSpeed);

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

// Display the food
function displayFood(food) {
    push();
    fill(255);
    ellipse(food.x, food.y, food.size);
    pop();
}

// Make dogFood be placed by clicking the mouse
function mousePressed() {
    let dogFood = createDogFood(mouseX, mouseY);
    food.push(dogFood);
}