/**
 * The Right Dog For You
 * Tatiana Désormeaux
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let petstoreImage;

let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let state = `title`; // Can be: title, simulation, love, sadness, acceptance

/**
 * Description of preload
*/
function preload() {
    petstoreImage = loadImage("assets/images/pet-shop-interior.avif");

}

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(petstoreImage, 0, 0);

    // Setting up all the different states
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `love`) {
        love();
    }
    else if (state === `sadness`) {
        sadness();
    }
    else if (state === `acceptance`) {
        acceptance();
    }
}

function title() {
    // Title state
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text(`LOVE?`, width/2, height/2);
    pop();
}

function simulation() {
    // Simulation state
    move();
    handleInput();
    circleAvoid();
    checkOffscreen();
    checkOverlap();
    hitsSecretPoint();
    display();
}

function love() {
    // Love state
    push();
    textSize(64);
    fill(200, 150, 150);
    textAlign(CENTER, CENTER);
    text(`LOVE!`, width/2, height/2);
    pop();
}

function sadness() {
    // Sadness state
    push();
    textSize(64);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(`:(`, width/2, height/2);
    pop();
}

function acceptance() {
    // Acceptance state
    push();
    textSize(30);
    fill(150, 255, 150);
    textAlign(CENTER, CENTER);
    text(`It's okay, they were not the one.`, width/2, height/2);
    pop();
}

function move() {
    // Move the circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;
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

function hitsSecretPoint() {
    // Check if circle1 hits the top left corner on the screen for another state
    let d = dist(circle1.x, circle1.y, rectangle.x, rectangle.y);
    if (d < circle1.size/2 + rectangle.size/2) {
        state = `acceptance`;
    }
}

function display() {
    // Display the circles
    ellipse(circle1.x, circle1.y, circle1.size);
    // Display the rectangle
    push();
    fill(255,232,73);
    rect(rectangle.x, rectangle.y, rectangle.size);
    pop();
}

function mousePressed() {
    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}
