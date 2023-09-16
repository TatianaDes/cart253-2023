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
    alpha: 200
};
let circle2 = {
    x: 500,
    y: 50,
    size: 100,
    fill: 255,
    alpha: 200
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

}


/**
 * Description of draw()
*/
function draw() {
    //Background
background(bg.r, bg.g, bg.b);
bg.b = bg.b + 1;

    //Left circle
    circle1.x = circle1.x + 2;
    circle1.x = constrain(circle1.x, 0, width);
    fill(circle1, fill, circle1.alpha);
    ellipse(circle1.x, circle1.y, circle1.size);

    //Right circle
    circle2.x = circle2.x + -2;
    circle2.x = constrain(circle2.x, 0, width);
    fill(circle2, fill, circle2.alpha);
    ellipse(circle2.x, circle2.y, circle2.size);

}