/**
 * Love Actually
 * Tatiana Désormeaux
 * 
 * Making a simulation about the difficulties of finding love, like losing the opportunity of love, finding love, and just accepting that that person was not the right one.
 * But in the end love must be mutual, both sides need to put equal effort.
 */

"use strict";
let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let rectangle = {
    x: 50,
    y: 60,
    size: 5,
};

let state = `title`; // Can be: title, simulation, love, sadness, acceptance

/**
 * Description of preload
*/
function preload() {

}

function setup() {
    createCanvas(500, 500);
    
  setupCircles();
}


    function setupCircles() {
    // Position circles separated from one another
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;
    

}

function draw() {
    background(0);

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

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
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

function circleAvoid() {
    // Making circle2 avoid the cursor
    let dx = circle2.x - mouseX;
    let dy = circle2.y - mouseY;

if (dx < 0) {
    circle2.vx = -circle2.speed;
}
else if (dx > 0) {
    circle2.vx = circle2.speed;
}

if (dy < 0) {
    circle2.vy = -circle2.speed;
}
else if (dy > 0) {
    circle2.vy = circle2.speed;
}
}

function checkOffscreen() {
  // Check if the circles have gone offscreen
    if (isOffscreen(circle1) || isOffscreen(circle2)) {
    state = `sadness`;
  }
}

function isOffscreen(circle) {
    // Realization of when the circles are actually offscreen
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        return true;
    }
    else {
        return false;
    }
}

function checkOverlap() {
 // Check if the circles overlap
 let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
 if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
 }
}

function hitsSecretPoint() {
    // Check if circle2 hits the top left corner on the screen for another state
    let d = dist(circle2.x, circle2.y, rectangle.x, rectangle.y);
    if (d < circle2.size/2 + rectangle.size/2) {
        state = `acceptance`;
    }
}

function display() {
    // Display the circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
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

