/**
 * Activity 02: Draw an Alien
 * Tatiana Désormeaux
 * 
 * Drawing an alien in JavaScript using all the basic knowledge we have learned thus far. 
 * 
 * Currently draws body, head, and face of an alien.
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Draws an alien on the canvas
*/
function setup() {

    createCanvas(640, 480);

    background(252, 3, 127);

    // Draw the body
    noStroke();
    fill(150);
    ellipse(320, 480, 300, 400);

    // Draw the head
    fill(120);
    ellipse(320, 240, 400, 250);

    // Draw the eyes
    fill(0);
    ellipse(230, 240, 80, 180);
    ellipse(410, 240, 80, 180);

    // Draw the nostrills
    ellipse(300, 310, 10, 10);
    ellipse(340, 310, 10, 10);

    // Draw the mouth
    stroke(200, 0, 0);
    strokeWeight(3);
    rectMode(CENTER);
    rect(320, 340, 125, 25);
}


/**
 * Does nothing
*/
function draw() {

}