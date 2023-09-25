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
    size: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.5,
    maxSpeed: 10,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }

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
    background(0);

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

    // Display covid 19
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size);

    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
}

// User movement
function mousePressed() {
    user.x = mouseX;
    user.y = mouseY;
    }