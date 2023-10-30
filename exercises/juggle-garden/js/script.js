/**
 * Beautiful Ecosystem
 * Tatiana Désormeaux
 * 
 * Adding onto the garden simulation and making it more user-friendly
 */

"use strict";

let gravityForce = 0.0005;

let paddle;

// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 30,
    // The color of the grass (background)
    grassColor: {
      r: 120,
      g: 180,
      b: 120
    }
  };

// An array of bees
let bees = [];
// How many bees in the garden
let numBees = 5;

let state = `title`; // Can be: title, simulation, bees, pesticide
  
// preload() creates the images I wish to put in my program
function preload() {

}

// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(windowWidth, windowHeight);
  
    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        let x = random(0, width);
        let y = random(0, height/2);
        let size = random(50, 80);
        let stemLength = random(50, 100);
        let petalColor = {
            r: random(100, 255),
            g: random(100, 255),
            b: random(100, 255)
        }
        // Create a new flower
      let flower = new Flower(x, y, size, stemLength, petalColor);
      // Add the flower to the array of flowers
      garden.flowers.push(flower);
    }

      for (let i = 0; i < numBees; i++) {
            let x = random(0, width);
            let y = random(-400, -100);
            let bee = new Bee(x, y);
            bees.push(bee);
        }
    paddle = new Paddle(300, 20);
  }

  // draw()
// Displays our flowers
function draw() {
    // Display the grass
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  
    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
      let flower = garden.flowers[i];
      if (flower.alive) {
      flower.shrink();
      flower.display();
      }
    }

    for (let i = 0; i < bees.length; i++) {
        let bee = bees[i];
        if (bee.alive) {
            bee.gravity(gravityForce);
            bee.shrink();
            bee.move();
            bee.bounce(paddle);
            bee.display();
            

            for (let j = 0; j < garden.flowers.length; j++) {
                let flower = garden.flowers[j];
                if (flower.alive) {
                    bee.tryToPollinate(flower);
                }
            }
        }
    }

    paddle.move();
    paddle.display();
  }

  function mousePressed() {
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.mousePressed();
    }
  }
