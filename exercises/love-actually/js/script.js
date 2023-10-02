/**
 * Love Actually
 * Tatiana Désormeaux
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text(`LOVE?`, width/2, height/2);
    pop();
}

function simulation() {
    move();
    handleInput();
    circleAvoid();
    checkOffscreen();
    checkOverlap();
    display();
}

function love() {
    push();
    textSize(64);
    fill(200, 150, 150);
    textAlign(CENTER, CENTER);
    text(`LOVE!`, width/2, height/2);
    pop();
}

function sadness() {
    push();
    textSize(64);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(`:(`, width/2, height/2);
    pop();
}

function acceptance() {
    push();
    textSize(64);
    fill(150, 200, 150);
    textAlign(CENTER, CENTER);
    text(`It's okay, they were not the one`, width/2, height/2);
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
  // Chech if the circles have gone offscreen
    if (isOffscreen(circle1) || isOffscreen(circle2)) {
    state = `sadness`;
  }
}

function isOffscreen(circle) {
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

function display() {
    // Display the circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}

