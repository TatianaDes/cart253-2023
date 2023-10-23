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
    size: 50,
    vx: 0,
    vy: 0,
    speed: 3
  }

let litter = [];
let litterSize = 4;

let food = [];
let foodSize = 0;

let state = `title`; // Can be: title, simulation, dog, puppies

function preload() {

}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // Make the puppies have random positions and clean up the code
    for (let i = 0; i < litterSize; i++) {
        litter[i] = createPuppies(random(0, width), random(0, height));
    }

    for (let i = 0; i < foodSize; i++) {
        food[i] = createDogFood(random(0, width), random(0, height));
    }
}

// Creating the puppies object for all the puppies
function createPuppies(x, y) {
    let puppies = {
        x: x,
        y: y,
        size: 40,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        acceleration: 0.1,
        maxSpeed: 2
    };
    return puppies;
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
    // Setting up all the different states
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `dogAte`) {
        dogEat();
    }
    else if (state === `puppiesAte`) {
        puppiesEat();
    }
}

function title() {
    // Title state
    push();
    background(0);
    textSize(60);
    fill(238,159,19);
    textAlign(CENTER, CENTER);
    text(`Play Time!`, windowWidth/2, windowHeight/2);
    textSize(20);
    fill(240,141,63);
    text(`(Press Any Key to Start)`, windowWidth/2, 350);
    textSize(15);
    fill(244,104,84);
    text(`Use the arrow keys to move the dog, and click the mouse to drop the food.`, 1100, 570);
    pop();
}

function simulation() {
    // Simulation state
    push();
    background(0);
    moveDog();
    displayDog();
    checkOverlap();
    // Calling the fuctions for all the puppies in a clean way
    for (let i = 0; i < litter.length; i++) {
        movePuppies(litter[i]);
        displayPuppies(litter[i]);
    }

    // Calling the functions for all the puppies in a clean way
    for (let i = 0; i < food.length; i++) {
        displayFood(food[i]);
    }
    pop();
}

function dogEat() {
    push();
    background(0);
    textSize(60);
    fill(238,159,19);
    textAlign(CENTER, CENTER);
    text(`You Ate!`, windowWidth/2, windowHeight/2);
    text(`But at what cost? Now the puppies are hungry. :(`, windowWidth/2, 350);
    pop();
}

function puppiesEat() {
    push();
    background(0);
    textSize(60);
    fill(238,159,19);
    textAlign(CENTER, CENTER);
    text(`The Puppies Ate!`, windowWidth/2, windowHeight/2);
    text(`Thank you for being kind and letting the puppies eat first! :)`, windowWidth/2, 350);
    pop();
}

   
    

// Move dog with the mouse
function moveDog() {

    // Moving dog
    dog.x = dog.x + dog.vx;
    dog.y = dog.y + dog.vy;

    // Make dog move using the arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        dog.vx = -dog.speed; 
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        dog.vx = dog.speed;
    }
    else {
        dog.vx = 0;
    }
    
    if (keyIsDown(UP_ARROW)) {
        dog.vy = -dog.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        dog.vy = dog.speed;
    }
    else {
    
        dog.vy = 0;
    }
}

// Make the puppies run away from the dog
function movePuppies(puppies) {
    if (mouseX < puppies.x) {
        puppies.ax = puppies.acceleration;
    }
    else {
        puppies.ax = -puppies.acceleration;
    }

    if (mouseY < puppies.y) {
        puppies.ay = puppies.acceleration;
    }
    else {
        puppies.ay = -puppies.acceleration;
    }

    /* Trying to see if I can make the puppies scared of the dog but attracted to the food
    if (food.x < puppies.x) {
        puppies.ax = -puppies.acceleration;
    }
    else {
        puppies.ax = puppies.acceleration;
    }

    if (food.y < puppies.y) {
        puppies.ay = -puppies.acceleration;
    }
    else {
        puppies.ay = puppies.acceleration;
    }
    */

    puppies.vx = puppies.vx + puppies.ax;
    puppies.vx = constrain(puppies.vx, -puppies.maxSpeed, puppies.maxSpeed);
    puppies.vy = puppies.vy + puppies.ay;
    puppies.vy = constrain(puppies.vy, -puppies.maxSpeed, puppies.maxSpeed);

// Position is being added onto the velocity of puppies
puppies.x = puppies.x + puppies.vx;
puppies.y = puppies.y + puppies.vy;

// Constrain the puppies to the width and height of the canvas
puppies.x = constrain(puppies.x, 0, width);
puppies.y = constrain(puppies.y, 0, height);
}


function checkOverlap() {
    // Check if dog and dogFood overlap
    let d = dist(dog.x, dog.y, food.x, food.y);
    if (d < dog.size/2 + food.size/2) {
       state = `dogAte`;
    }
    // Check if puppies and dogFood overlap
    let i = dist(puppies.x, puppies.y, food.x, food.y);
    if (i < puppies.size/2 + food.sizeX/2) {
       state = `puppiesAte`;
    }
}

// Display the dog
function displayDog() {
    push();
    fill(255);
    ellipse(dog.x, dog.y, dog.size);
    pop(); 
    }

// Display the puppies
function displayPuppies(puppies) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(puppies.x, puppies.y, puppies.size);
    pop();
}

// Display the food
function displayFood(food) {
    if (!food.eaten) {
        push();
        fill(255);
        ellipse(food.x, food.y, food.size);
        pop();
    }
}

// Make dogFood be placed by clicking the mouse
function mousePressed() {
    let dogFood = createDogFood(mouseX, mouseY);
    food.push(dogFood);
}

function keyPressed() {
     // When pressing the mouse button, changes the title screen
     if (state === `title`) {
        state = `simulation`;
    }
}