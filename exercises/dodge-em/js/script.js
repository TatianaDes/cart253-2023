/**
 * E2: Dodge Em
 * Tatiana Désoremaux
 * 
 * A simulation where the user is to avoid the book that is trying to catch up to them. It is about the struggle of work catching up to you when you are not always on the ball getting it done.
 */

"use strict";

let bookImage;


let school = {
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
};

/**
 * Description of preload
*/
function preload() {
    bookImage = loadImage("assets/images/R.jpg");
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
    // Made the background an image from "15 Beautifully Messy Bookshelves" by BookBub
    background(bookImage, 0, 0);

    // Covid 19 movement using  the mouse buttons to follow the cursor
    if (mouseX < school.x) {
        school.ax = -school.acceleration;
    }
    else {
        school.ax = school.acceleration;
    }

    if (mouseY < school.y) {
        school.ay = -school.acceleration;
    }
    else {
        school.ay = school.acceleration;
    }

    // Velocity is being added onto the acceleration of covid 19
    school.vx = school.vx + school.ax;
    school.vx = constrain(school.vx, -school.maxSpeed, school.maxSpeed);
    school.vy = school.vy + school.ay;
    school.vy = constrain(school.vy, -school.maxSpeed, school.maxSpeed);

    // Position is being added onto the velocity of covid 19
    school.x = school.x + school.vx;
    school.y = school.y + school.vy;

    // Check for catching school
    let d = dist(user.x, user.y, school.x, school.y);
    if (d < school.size/2 + user.size/2) {
        noLoop();
    }

    // Display covid 19 by making it change shades with the mouse and change size as program continues
    school.fill = map(mouseX, 0, width, 0, 255);
    fill(school.fill);
    school.size = school.size + 1;
    rectMode(CENTER);
    rect(school.x, school.y, school.size);
    

    // Display user while also changing colour from green to blue with mouse
    if (mouseX < width/3) {
        fill(100,147,47);
    }
    else {
        fill(32,92,102);
    }

    ellipse(user.x, user.y, user.size);

}

// User movement by pressing different places on the screen
function mousePressed() {
    user.x = mouseX;
    user.y = mouseY;
    }