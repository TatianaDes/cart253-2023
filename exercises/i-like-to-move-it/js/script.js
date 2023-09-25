/**
 * Excercise 1: I Like to Move It
 * Tatiana Désormeaux
 * 
 * Practicing how to make different shapes, colours, sizes, movement, and constraints to make a nice looking design.
 */

"use strict";

let bg = {
    r: 0,
    g: 0,
    b: 0
};
let circle1 = {
    x: 0,
    y: 450,
    size: 100,
    fill: 255,
};
let circle2 = {
    x: 500,
    y: 50,
    size: 100,
    fill: 255,
};
let circle3 = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: 255,
};
let rect1 = {
    x: 250,
    y: 250,
    width: 300,
    height: 300 
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
createCanvas(500, 500);
    noStroke();
    circle3.x = width/2;
    circle3.y = height/2;
}


/**
 * Description of draw()
*/
function draw() {
    //Background
background(bg.r, bg.g, bg.b);
bg.b = bg.b + 1;
    
    //Rectangle center
    fill(166, 169, 229);
    rectMode(CENTER);
    rect(width/2, height/2, rect1.width, rect1.height);

    //Center circle
    circle3.fill = map(mouseX, 0, width, 0, 255);
    circle3.size = circle3.size + 2;
    circle3.size = constrain(circle3.size, 0, 285);
    ellipse(circle3.x, circle3.y, circle3.size);

    //Left circle
    circle1.size = map(mouseY, 0, height, 10, 95);
    circle1.x = circle1.x + 2;
    circle1.x = constrain(circle1.x, 0, width);
    fill(235, 228, 156);
    ellipse(circle1.x, circle1.y, circle1.size);

    //Right circle
    circle2.size = map(mouseY, 0, height, 10, 95);
    circle2.x = circle2.x + -2;
    circle2.x = constrain(circle2.x, 0, width);
    fill(237, 134, 248);
    ellipse(circle2.x, circle2.y, circle2.size);

}