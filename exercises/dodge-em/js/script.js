/**
 * E2: Dodge Em
 * Tatiana Désoremaux
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250,
    size: 50,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.25,
    maxSpeed: 5,
    fill: 0

};

let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255
};

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    // Canvas stretches along the whole screen
    createCanvas(windowWidth, windowHeight);

}


/**
 * Description of draw()
*/
function draw() {
    background(255, 0, 0);

    // Covid 19 movement using  the mouse buttons to follow the cursor
    if (mouseX < covid19.x) {
        covid19.ax = -covid19.acceleration;
    }
    else {
        covid19.ax = covid19.acceleration;
    }

    if (mouseY < covid19.y) {
        covid19.ay = -covid19.acceleration;
    }
    else {
        covid19.ay = covid19.acceleration;
    }

    // Velocity is being added onto the acceleration of covid 19
    covid19.vx = covid19.vx + covid19.ax;
    covid19.vx = constrain(covid19.vx, -covid19.maxSpeed, covid19.maxSpeed);
    covid19.vy = covid19.vy + covid19.ay;
    covid19.vy = constrain(covid19.vy, -covid19.maxSpeed, covid19.maxSpeed);

    // Position is being added onto the velocity of covid 19
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    // Check for catching covid19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size/2 + user.size/2) {
        noLoop();
    }

    // Display covid 19 by making it change shades with the mouse and change size as program continues
    covid19.fill = map(mouseX, 0, width, 0, 255);
    fill(covid19.fill);
    covid19.size = covid19.size + 1;
    rectMode(CENTER);
    rect(covid19.x, covid19.y, covid19.size);

    // Display user
    fill(110,155,55);
    ellipse(user.x, user.y, user.size);

}

// User movement by pressing different places on the screen
function mousePressed() {
    user.x = mouseX;
    user.y = mouseY;
    }