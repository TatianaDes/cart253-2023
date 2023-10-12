/**
 * The Right Dog For You
 * Tatiana Désormeaux
 * 
 * This is a simulation about a pet store and about finding the right fit dog for you, you can go over each type of dog to find out what breed it is as well as a bit of a description of the dog.
 */

"use strict";

let petstoreImage;
let shibaImage;
let goldenImage;
let pugImage;
let cashierImage;

let circle1 = {
    x: 250,
    y: 450,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 3,
};

let state = `title`; // Can be: title, simulation, 

/**
 * Description of preload
*/
function preload() {
    petstoreImage = loadImage("assets/images/pet-shop-interior.avif");
    shibaImage = loadImage("assets/images/shiba.png");
    goldenImage = loadImage("assets/images/goldenretriever.png");
    pugImage = loadImage("assets/images/pug.png");
    cashierImage = loadImage("assets/images/cashier.png");

}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    // Setting up all the different states
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
}

function title() {
    // Title state
    push();
    background(0);
    textSize(30);
    fill(255,181,48);
    textAlign(CENTER, CENTER);
    text(`Welcome to Our Humble Pet Store!`, width/2, height/2);
    pop();
}

function simulation() {
    // Simulation state
    push();
    background(petstoreImage, 0, 0);
    move();
    handleInput();
    display();
    pop();
}

function move() {
    // Move the circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    // Constrains circle1 from passing any border of the screen
    circle1.x = constrain(circle1.x, 0, width);
    circle1.y = constrain(circle1.y, 0, height);
}

function handleInput() {
    // Make circle1 move using the arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        circle1.vx = -circle1.speed; 
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        circle1.vx = circle1.speed;
    }
    else {
        circle1.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
        circle1.vy = -circle1.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        circle1.vy = circle1.speed;
    }
    else {

        circle1.vy = 0;
    }
}

function display() {
    // Display the circles
    ellipse(circle1.x, circle1.y, circle1.size);
    // Display the shiba image from "Prompt Hunt"
    image(shibaImage, 60, 335, 120, 120);
    // Display the golden retriever image from "PNGTree"
    image(goldenImage, 340, 370, 170, 170);
    // Display the pug image from "FreePik"
    image(pugImage, 285, 58, 120, 120);
    // Display the cashier image from "Adobe Stock"
    image(cashierImage, 135, 140, 260, 170);

}

function mousePressed() {
    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}
