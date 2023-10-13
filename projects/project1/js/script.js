/**
 * The Right Dog For You
 * Tatiana Désormeaux
 * 
 * This is a simulation about a pet store and about finding the right fit dog for you, you can go over each type of dog to find out what breed it is as well as a bit of a description of the dog.
 */

"use strict";

let petstoreImage;

let circle1 = {
    x: 250,
    y: 450,
    size: 40,
    vx: 0,
    vy: 0,
    speed: 3,
};

let shiba = {
    x: 110,
    y: 395,
    size: 120,
    image: undefined
};

let golden = {
    x: 420,
    y: 450, 
    size: 170,
    image: undefined
};

let pug = {
    x: 345,
    y: 117, 
    size: 120,
    image: undefined
};

let cashier = {
    x: 265, 
    y: 240, 
    sizeX: 200,
    sizeY: 140,
    image: undefined
}

let state = `title`; // Can be: title, simulation, shiba, goldenretriever, pug, cashier

/**
 * Description of preload
*/
function preload() {
    petstoreImage = loadImage("assets/images/pet-shop-interior.avif");
    shiba.image = loadImage("assets/images/shiba.png");
    golden.image = loadImage("assets/images/goldenretriever.png");
    pug.image = loadImage("assets/images/pug.png");
    cashier.image = loadImage("assets/images/cashier.png");

}

function setup() {
    createCanvas(500, 500);
}

function draw() {
   // Setting up all the different states
   if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `shiba`) {
        shibaDog();
    }
    else if (state === `goldenRetriever`) {
        goldenRetrieverDog();
    }
    else if (state === `pug`) {
        pugDog();
    }
    else if (state === `cashier`) {
        cashierWorker();
    }
}

function title() {
    // Title state
    push();
    background(0);
    textSize(30);
    fill(255,181,48);
    textAlign(CENTER, CENTER);
    text(`Welcome to Our Humble Pet Store!`, width/2, height/2);
    pop();
}

function simulation() {
    // Simulation state
    push();
    background(petstoreImage, 0, 0);
    move();
    handleInput();
    checkOverlap();
    display();
    pop();
}

function shibaDog() {
    // Shiba state
    push();
    background(0);
    textSize(30);
    fill(255,237,32);
    text(`Name: Luna`, 50, 80);
    text(`Sex: Female`, 50, 130);
    text(`Breed: Shiba Inu`, 50, 180);
    text(`Age: 1 Year`, 50, 230);
    textSize(14.8);
    text(`Who is Luna: Luna is an excitable, lovable dog.`, 50, 280);
    text(`She is gentle and always happy to be around people of any age.`, 50, 310);
    text(`She can get nervous when too much stimulation occurs around her,`, 50, 340);
    text(`but a little breather outside and comforting`, 50, 370);
    text(`pets can calm her straight down.`, 50, 400);
    text(`Luna is looking for a beautiful family`, 50, 430);
    text(`ready to treat her like the wonderful dog she is!`, 50, 460);
    pop();
}


function goldenRetrieverDog() {
    // Golden Retriever state
    push();
    background(0);
    textSize(30);
    fill(27,22,255);
    text(`Name: Mia`, 50, 80);
    text(`Sex: Female`, 50, 130);
    text(`Breed: Golden Retriever`, 50, 180);
    text(`Age: 6 Years`, 50, 230);
    textSize(14.8);
    text(`Who is Mia: Mia is a calm and gentle dog.`, 50, 280);
    text(`She is quiet and loves watching TV by the couch.`, 50, 310);
    text(`While she likes to rest, she puts a heavy importance on protection.`, 50, 340);
    text(`She is a wonderful guard dog and`, 50, 370);
    text(`loves to make sure everyone is safe.`, 50, 400);
    text(`Mia is looking for a family that likes to stay at home,`, 50, 430);
    text(`but is more than willing to give her the exercise she needs!`, 50, 460);
    pop();
}

function pugDog() {
    // Pug state
    push();
    background(0);
    textSize(30);
    fill(255,181,48);
    textAlign(CENTER, CENTER);
    text(`Pug`, width/2, height/2);
    pop();
}

function cashierWorker() {
    // Cashier state
    push();
    background(0);
    textSize(30);
    fill(255,181,48);
    textAlign(CENTER, CENTER);
    text(`Cashier`, width/2, height/2);
    pop();
}

function move() {
    // Move circle1
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    // Constrains circle1 from passing any border of the screen
    circle1.x = constrain(circle1.x, 0, width);
    circle1.y = constrain(circle1.y, 0, height);
}

function handleInput() {
    // Make circle1 move using the arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        circle1.vx = -circle1.speed; 
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        circle1.vx = circle1.speed;
    }
    else {
        circle1.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
        circle1.vy = -circle1.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        circle1.vy = circle1.speed;
    }
    else {

        circle1.vy = 0;
    }
}

function checkOverlap() {
    // Check if the circles overlap
    let d = dist(circle1.x, circle1.y, shiba.x, shiba.y);
    if (d < circle1.size/2 + shiba.size/2) {
       state = `shiba`;
    }
    let i = dist(circle1.x, circle1.y, golden.x, golden.y);
    if (i < circle1.size/2 + golden.size/2) {
       state = `goldenRetriever`;
    }
    let s = dist(circle1.x, circle1.y, pug.x, pug.y);
    if (s < circle1.size/2 + pug.size/2) {
       state = `pug`;
    }
    let t = dist(circle1.x, circle1.y, cashier.x, cashier.y);
    if (t < circle1.size/2 + cashier.sizeX/2) {
       state = `cashier`;
    }
   }

function display() {
    // Display the circles
    ellipse(circle1.x, circle1.y, circle1.size);
    imageMode(CENTER);
    // Display the shiba image from "Prompt Hunt"
    image(shiba.image, shiba.x, shiba.y, shiba.size, shiba.size);
    // Display the golden retriever image from "PNGTree"
    image(golden.image, golden.x, golden.y, golden.size, golden.size);
    // Display the pug image from "FreePik"
    image(pug.image, pug.x, pug.y, pug.size, pug.size);
    // Display the cashier image from "Adobe Stock"
    image(cashier.image, cashier.x, cashier.y, cashier.sizeX, cashier.sizeY);

}

function mousePressed() {
    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}
