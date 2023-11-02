/**
 * Juggle the Ecosystem
 * Tatiana Désormeaux
 * 
 * A simulation about juggling bees to make flowers grow, but the weedkiller is also juggled and will kill the flowers faster.
 */

"use strict";

let grassImage;

let gravityForce = 0.0005;

let paddle;

let weedkillerImage;

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
let weeds = [];
let numWeed = 1;

let flowerDeath = 0;

let state = `title`; // Can be: title, simulation, flowers, bees, weedkiller


// preload() creates the images I wish to put in my program
function preload() {
  grassImage = loadImage("assets/images/grassbackground.avif");
  weedkillerImage = loadImage("assets/images/weedkiller.png");
}


// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
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
  for (let i = 0; i < numWeed; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let weed = new Weed(x, y, weedkillerImage);
    weeds.push(weed);
  }

  // Create the paddle inside the main script
  paddle = new Paddle(300, 20);
}

// draw()
// Displays our flowers
function draw() {

  // Setting up all the different states
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `flowers`) {
    flowersDead();
  }
  else if (state === `bees`) {
    beesDead();
  }
  else if (state === `weedkiller`) {
    weedkillerKills();
  }

  function title() {
    // Title state
    push();
    background(3, 59, 10);
    textSize(60);
    fill(25, 187, 100);
    textAlign(CENTER, CENTER);
    text(`Juggle the Ecosystem`, windowWidth / 2, windowHeight / 2);
    textSize(20);
    fill(90, 176, 57);
    text(`(Press Any Key to Start)`, windowWidth / 2, 350);
    textSize(15);
    fill(176, 129, 57);
    text(`Use the mouse to direct the paddle to catch the bees, and click the mouse to drop the weedkiller and make it harder. If the weedkiller kills 15 flowers, it is game over!`, 800, 570);
    pop();
  }

  function simulation() {
    // Simulation state
    push();
    background(grassImage, 0, 0);
    textSize(60);
    fill(255);
    textAlign(CENTER, CENTER);
    text(flowerDeath, 50, 50);

    checkEndings();

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
    for (let i = 0; i < weeds.length; i++) {
      let weedkiller = weeds[i];
      if (weedkiller.alive) {
        weedkiller.gravity(gravityForce);
        weedkiller.move();
        weedkiller.bounce(paddle);
        weedkiller.display();

        // Making the weedkiller kills the flowers when touched
        for (let j = 0; j < garden.flowers.length; j++) {
          let flower = garden.flowers[j];
          if (flower.alive) {
            let d = dist(weedkiller.x, weedkiller.y, flower.x, flower.y);
            if (d < weedkiller.sizeX / 2 + flower.size / 2 + flower.petalThickness) {
              flowerDeath += 1;
            }
            weedkiller.kill(flower);
          }
        }
      }
    }

    // Making the paddle able to display in the main script
    paddle.move();
    paddle.display();
    pop();
  }
}

function checkEndings() {
  // Checks if all the flowers have died, then `flowers` state occurs
  let allFlowersDead = true;
  for (let i = 0; i < garden.flowers.length; i++) {
    if (garden.flowers[i].alive) {
      allFlowersDead = false;
      break;
    }
  }

  // Checks if all flowers are actually dead and starts the ending
  if (allFlowersDead) {
    state = `flowers`;
  }

  // Checks if all the bees have fallen, then `bees` state occurs
  let allBeesDead = true;
  for (let i = 0; i < bees.length; i++) {
    if (bees[i].alive) {
      allBeesDead = false;
      break;
    }
  }

  // Checks if all the bees are actually dead and starts the ending
  if (allBeesDead) {
    state = `bees`;
  }

  // Checks if the weedkiller kills 15 flowers, then `weedkiller` state occurs
  if (flowerDeath >= 15) {
    state = `weedkiller`;
  }
}


function flowersDead() {
  // flowers state
  push();
  background(130, 34, 34);
  textSize(60);
  fill(255, 199, 78);
  textAlign(CENTER, CENTER);
  text(`Oh no! All the flowers are dead.`, windowWidth / 2, windowHeight / 2);
  textSize(20);
  fill(213, 170, 218);
  text(`(Refresh Page to Restart)`, windowWidth / 2, 350);
  pop();
}

function beesDead() {
  // bees state
  push();
  background(0);
  textSize(60);
  fill(255, 246, 25);
  textAlign(CENTER, CENTER);
  text(`Better luck next time, all the bees fell.`, windowWidth / 2, windowHeight / 2);
  textSize(20);
  fill(208, 245, 253);
  text(`(Refresh Page to Restart)`, windowWidth / 2, 350);
  pop();
}

function weedkillerKills() {
  // weedkiller state
  push();
  background(236, 242, 88);
  textSize(60);
  fill(31, 94, 28);
  textAlign(CENTER, CENTER);
  text(`Horrible weed killer, now the ecosystem is ruined.`, windowWidth / 2, windowHeight / 2);
  textSize(20);
  fill(255);
  text(`(Refresh Page to Restart)`, windowWidth / 2, 350);
  pop();
}

function mousePressed() {
  // Make weedkiller be placed by clicking the mouse
  let weedkill = new Weed(mouseX, mouseY, weedkillerImage);
  weeds.push(weedkill);
}

function keyPressed() {
  // When pressing the mouse button, changes the title screen
  if (state === `title`) {
    state = `simulation`;
  }
}

