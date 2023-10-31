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
        background(186,209,252);
        textSize(60);
        fill(7,33,78);
        textAlign(CENTER, CENTER);
        text(`Juggle the Ecosystem`, windowWidth/2, windowHeight/2);
        textSize(20);
        fill(231,96,84);
        text(`(Press Any Key to Start)`, windowWidth/2, 350);
        textSize(15);
        fill(57,160,100);
        text(`Use the mouse to direct the paddle to catch the bees, and click the mouse to drop the weedkiller.`, 1000, 570);
        pop();
    }

    function simulation() {
        // Simulation state
        push();
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
      for (let i = 0; i < weeds.length; i++) {
        let weedkiller = weeds[i];
        if (weedkiller.alive) {
            weedkiller.gravity(gravityForce);
            weedkiller.move();
            weedkiller.bounce(paddle);
            weedkiller.display();

          // Making the bees pollinate the flowers to make them grow
          for (let j = 0; j < garden.flowers.length; j++) {
            let flower = garden.flowers[j];
            if (flower.alive) {
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

  function flowersDead() {
    // flowers state
    push();
    background(186,209,252);
    textSize(60);
    fill(7,33,78);
    textAlign(CENTER, CENTER);
    text(`Oh no! All the flowers are dead.`, windowWidth/2, windowHeight/2);
    textSize(20);
    fill(231,96,84);
    text(`(Refresh Page to Restart)`, windowWidth/2, 350);
    pop();
  }

  function beesDead() {
    // bees state
    push();
    background(186,209,252);
    textSize(60);
    fill(7,33,78);
    textAlign(CENTER, CENTER);
    text(`Better luck next time, all the bees fell.`, windowWidth/2, windowHeight/2);
    textSize(20);
    fill(231,96,84);
    text(`(Refresh Page to Restart)`, windowWidth/2, 350);
    pop();
  }

  function weedkillerKills() {
    // weedkiller state
    push();
    background(186,209,252);
    textSize(60);
    fill(7,33,78);
    textAlign(CENTER, CENTER);
    text(`Horrible weed killer, now the ecosystem is ruined.`, windowWidth/2, windowHeight/2);
    textSize(20);
    fill(231,96,84);
    text(`(Refresh Page to Restart)`, windowWidth/2, 350);
    pop();
  }

  function allFlowersDead() {
    let allFlowersDead = true; // Are they all dead? Assume they are...
    for (let i = 0; i < garden.flowers.length; i++) {
      if (flowers[i].alive) {
        allFlowersDead = false; // We found a living flower
        break; // Stop searching the flowers
      }
      else if (allFlowersDead = false) {
        state = `flowers`;
      }
    }
}

    function allBeesFell(bees) {
        for (let i = 0; i < bees.length; i++) {
            if (bee.x < 0 || bee.x > width || bee.y < 0 || bee.y > height) {
                return true;
            }
            else {
                return false;
        }
    }
}

    function fell() {
    if (allBeesFell(bee)) {
        state = `bees`;
      }
    }

    function weedkillerLoss() {


  }

    function mousePressed() {
    // Making the flowers grow when the user presses them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.mousePressed();
    }
   /* // Make weedkiller be placed by clicking the mouse
    for (let i = 0; i < weedkillers.length; i++) {
        let weedkiller = new Weedkiller(mouseX, mouseY);
        weedkillers.push(weedkiller);
    } */
  }

  function keyPressed() {
    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
       state = `simulation`;
   }
}

