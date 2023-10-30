/**
 * Beautiful Ecosystem
 * Tatiana Désormeaux
 * 
 * Adding onto the garden simulation and making it more user-friendly
 */

"use strict";

let grassImage;

let gravityForce = 0.0005;

let paddle;

// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 30,
  };

// An array of bees
let bees = [];
// How many bees in the garden
let numBees = 5;

// An array of weedkiller
let weedkillers = [];
// How many weedkillers are in the garden
let numWeedkillers = 1;

let state = `title`; // Can be: title, simulation, bees, weedkiller
  

// preload() creates the images I wish to put in my program
function preload() {
grassImage = loadImage("assets/images/grassbackground.avif");
// weedkillerImage = loadImage("assets/images/weedkiller.png");
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
        // Create a new bee
      for (let i = 0; i < numBees; i++) {
            let x = random(0, width);
            let y = random(-400, -100);
            let bee = new Bee(x, y);
            bees.push(bee);
        }

         // Create a new weedkiller
      for (let i = 0; i < numWeedkillers; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let weedkiller = new Weedkiller(x, y);
        weedkillers.push(weedkiller);
    }
    // Create the paddle inside the main script
    paddle = new Paddle(300, 20);
  }

  // draw()
// Displays our flowers
function draw() {
    // Display the grass
    background(grassImage, 0, 0);
  
    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
      let flower = garden.flowers[i];
      if (flower.alive) {
      flower.shrink();
      flower.display();
      }
    }

    // Making the bees bounce like a ball on the paddle
    for (let i = 0; i < bees.length; i++) {
        let bee = bees[i];
        if (bee.alive) {
            bee.gravity(gravityForce);
            bee.move();
            bee.bounce(paddle);
            bee.display();
            
            // Making the bees pollinate the flowers to make them grow
            for (let j = 0; j < garden.flowers.length; j++) {
                let flower = garden.flowers[j];
                if (flower.alive) {
                    bee.tryToPollinate(flower);
                }
            }
        }
    }

     // Making the weedkiller bounce like a ball on the paddle
     for (let i = 0; i < weedkillers.length; i++) {
        let weedkiller = weedkillers[i];
        if (weedkiller.alive) {
            weedkiller.gravity(gravityForce);
            weedkiller.move();
            weedkiller.bounce(paddle);
            weedkiller.display();
        }
    }
    

    // Making the paddle able to display in the main script
    paddle.move();
    paddle.display();
  }

function mousePressed() {
    // Making the flowers grow when the user presses them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.mousePressed();
    }
    /*// Make bees be placed by clicking the mouse
    for (let i = 0; i < bees.length; i++) {
        let bee = new Bee(mouseX, mouseY);
        bees.push(bee);
    }*/
  }


