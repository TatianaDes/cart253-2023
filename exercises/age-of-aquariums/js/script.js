/**
 * Play Time!
 * Tatiana Désormeaux
 * 
 * A program about a big dog scaring off little puppies from eating the dog food.
 */

"use strict";

let grassImage;

let dog = {
    x: 550,
    y: 300,
    sizeX: 120,
    sizeY: 110,
    vx: 0,
    vy: 0,
    speed: 5,
    image: undefined
  }

let litter = [];
let litterSize = 4;
//let displayImage;

let food = [];
let foodSize = 1;

let state = `title`; // Can be: title, simulation, dog, puppies

function preload() {
    grassImage = loadImage("assets/images/stardewvalleygrass.jpg");
    dog.image = loadImage("assets/images/labrador.png");
    //litter[0] = loadImage("assets/images/puppy.png");
    //litter[1] = loadImage("assets/images/puppy2.png");
    //litter[2] = loadImage("assets/images/puppy3.png");
    //litter[3] = loadImage("assets/images/puppy4.png");
    //foodimages[0] = loadImage("assets/images/dogfood(1).png");

}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // Make the puppies have random positions and clean up the code
    for (let i = 0; i < litterSize; i++) {
        litter[i] = createPuppies(random(0, width), random(0, height));
        //displayImage = random(litter);
    }

    for (let i = 0; i < foodSize; i++) {
        food[i] = createDogFood(random(0, width), random(0, height));
    }
}

// Creating the puppies object for all the puppies
function createPuppies(x, y) {
    let puppies = {
        x: x,
        y: y,
        size: random(10, 50),
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        acceleration: 1,
        maxSpeed: 1,
        image: undefined
    };
    return puppies;
}

// Creating the dogFood object for all the dog food
function createDogFood(x, y) {
    let dogFood = {
        x: x,
        y: y,
        size: 20,
        eaten: false,
        image: undefined
    };
    return dogFood;
}

function draw() {
    // Setting up all the different states
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `dogAte`) {
        dogEat();
    }
    else if (state === `puppiesAte`) {
        puppiesEat();
    }
}

function title() {
    // Title state
    push();
    background(186,209,252);
    textSize(60);
    fill(7,33,78);
    textAlign(CENTER, CENTER);
    text(`Play Time!`, windowWidth/2, windowHeight/2);
    textSize(20);
    fill(231,96,84);
    text(`(Press Any Key to Start)`, windowWidth/2, 350);
    textSize(15);
    fill(57,160,100);
    text(`Use the arrow keys to move the dog towards the puppies and food, and click the mouse to drop the food.`, 1000, 570);
    pop();
}

function simulation() {
    // Simulation state
    push();
    background(grassImage, 0, 0);
    moveDog();
    displayDog();

    // Calling the functions for all the puppies in a clean way
    for (let i = 0; i < food.length; i++) {
        displayFood(food[i]);

        for (let j = 0; j < litter.length; j++) {
            checkOverlap(food[i], litter[j]);
             movePuppies(food[i], litter[j]);
            displayPuppies(litter[j]);
        }
    }
    pop();
}

function dogEat() {
    push();
    background(255,110,110);
    textSize(60);
    fill(192,9,9);
    textAlign(CENTER, CENTER);
    text(`You Ate!`, windowWidth/2, windowHeight/2);
    text(`But at what cost? Now the puppies are hungry. :(`, windowWidth/2, 360);
    textSize(20);
    fill(76,8,111);
    text(`(Refresh Page to Restart)`, windowWidth/2, 410);
    pop();
}

function puppiesEat() {
    push();
    background(248,248,89);
    textSize(50);
    fill(159,113,49);
    textAlign(CENTER, CENTER);
    text(`The Puppies Ate!`, windowWidth/2, windowHeight/2);
    text(`Thank you for being kind and letting the puppies eat first! :)`, windowWidth/2, 360);
    textSize(20);
    fill(223,122,20);
    text(`(Refresh Page to Restart)`, windowWidth/2, 400);
    pop();
}

// Move dog with the mouse
function moveDog() {

    // Moving dog
    dog.x = dog.x + dog.vx;
    dog.y = dog.y + dog.vy;

    // Make dog move using the arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        dog.vx = -dog.speed; 
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        dog.vx = dog.speed;
    }
    else {
        dog.vx = 0;
    }
    
    if (keyIsDown(UP_ARROW)) {
        dog.vy = -dog.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        dog.vy = dog.speed;
    }
    else {
    
        dog.vy = 0;
    }
}

// Make the puppies run away from the dog
function movePuppies(dogFood, puppies) {
    let a = dist(dog.x, dog.y, puppies.x, puppies.y);
    if (a < dog.sizeX/2 + puppies.size/2 + 300) {
         if (dog.x < puppies.x) {
            puppies.ax = puppies.acceleration;
        }
        else {
            puppies.ax = -puppies.acceleration;
        }

        if (dog.y < puppies.y) {
            puppies.ay = puppies.acceleration;
        }
        else {
            puppies.ay = -puppies.acceleration;
        }
   }
   else {

   }

    //Trying to see if I can make the puppies scared of the dog but attracted to the food
    let t = dist(dogFood.x, dogFood.y, puppies.x, puppies.y);
    if (t < dogFood.size/2 + puppies.size/2 + 200) {
        if (dogFood.x < puppies.x) {
            puppies.ax = -puppies.acceleration;
        }
        else {
            puppies.ax = puppies.acceleration;
        }

        if (dogFood.y < puppies.y) {
            puppies.ay = -puppies.acceleration;
        }
        else {
            puppies.ay = puppies.acceleration;
        }
    }
    

    puppies.vx = puppies.vx + puppies.ax;
    puppies.vx = constrain(puppies.vx, -puppies.maxSpeed, puppies.maxSpeed);
    puppies.vy = puppies.vy + puppies.ay;
    puppies.vy = constrain(puppies.vy, -puppies.maxSpeed, puppies.maxSpeed);  
   
// Position is being added onto the velocity of puppies
puppies.x = puppies.x + puppies.vx;
puppies.y = puppies.y + puppies.vy;

// Constrain the puppies to the width and height of the canvas
puppies.x = constrain(puppies.x, 0, width);
puppies.y = constrain(puppies.y, 0, height);

}


function checkOverlap(dogFood, puppies) {
    // Check if dog and dogFood overlap
    let d = dist(dog.x, dog.y, dogFood.x, dogFood.y);
    if (d < dog.sizeX/2 + dogFood.size/2) {
       state = `dogAte`;
    }
    
    
    // Check if puppies and dogFood overlap
    let s = dist(puppies.x, puppies.y, dogFood.x, dogFood.y);
    if (s < puppies.size/2 + dogFood.size/2) {
       state = `puppiesAte`;

    }

}

// Display the dog
function displayDog() {
    push();
    imageMode(CENTER);
    image(dog.image, dog.x, dog.y, dog.sizeX, dog.sizeY);
    pop(); 
    }

// Display the puppies
function displayPuppies(puppies) {
    push();
    noStroke();
    fill(227,198,106);
    //imageMode(CENTER);
    /*image*/ ellipse(/*displayImage,*/ puppies.x, puppies.y, puppies.size);
    pop();
}

// Display the food
function displayFood(dogFood) {
    if (!food.eaten) {
        push();
        noStroke();
        fill(51,29,8);
        ellipse(dogFood.x, dogFood.y, dogFood.size);
        pop();
    }
}

// Make dogFood be placed by clicking the mouse
function mousePressed() {
    let dogFood = createDogFood(mouseX, mouseY);
    food.push(dogFood);
}

function keyPressed() {
     // When pressing the mouse button, changes the title screen
     if (state === `title`) {
        state = `simulation`;
    }
}