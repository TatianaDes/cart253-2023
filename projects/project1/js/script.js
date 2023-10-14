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

let circle2 = {
    x: 0,
    y: 490,
    size: 20,
    speed: 0.5
};

let circle3 = {
    x: 250,
    y: 20,
    size: 50,
    speed: 0.25,
};

let shiba = {
    x: 110,
    y: 392,
    size: 100,
    image: undefined
};

let golden = {
    x: 420,
    y: 445, 
    sizeX: 170,
    sizeY: 100,
    image: undefined
};

let pug = {
    x: 345,
    y: 117, 
    sizeX: 60,
    sizeY: 80,
    image: undefined
};

let cashier = {
    x: 263, 
    y: 260, 
    sizeX: 120,
    sizeY: 100,
    image: undefined
};

let state = `title`; // Can be: title, simulation, shiba, goldenretriever, pug, cashier

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
    onOff();
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
    text(`Age: 8 Year`, 50, 230);
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
    text(`Age: 11 Years`, 50, 230);
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
    fill(255,23,23);
    text(`Name: Hades`, 50, 80);
    text(`Sex: Male`, 50, 130);
    text(`Breed: Pug`, 50, 180);
    text(`Age: 2 Years`, 50, 230);
    textSize(14.8);
    text(`Who is Hades: Hades is a hyper and silly dog.`, 50, 280);
    text(`He can be loud but can easily be calmed down by toys.`, 50, 310);
    text(`He is great with other dogs and loves to make friends.`, 50, 340);
    text(`He is loving and adores company.`, 50, 370);
    text(`Hades is looking for a family ready to love a little fur ball,`, 50, 400);
    text(`and can also make him feel safe in this big world of big dogs!`, 50, 430);
    pop();
}

function cashierWorker() {
    // Cashier state
    push();
    background(0);
    textSize(30);
    fill(255,127,214);
    textAlign(CENTER, CENTER);
    text(`I hope you have a wonderful day,`, 250, 220);
    text(`and we hope to see you soon!`, 250, 250);
    text(`The dogs will surely miss you!`, 250, 300);
    pop();
}

function move() {
    // Move circle1
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    // Constrains circle1 from passing any border of the screen
    circle1.x = constrain(circle1.x, 0, width);
    circle1.y = constrain(circle1.y, 0, height);

    // Circle2 moving
    circle2.x = circle2.x + circle2.speed;
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
    // Check if circle1 and shiba overlap
    let d = dist(circle1.x, circle1.y, shiba.x, shiba.y);
    if (d < circle1.size/2 + shiba.size/2) {
       state = `shiba`;
    }
    // Check if circle1 and golden overlap
    let i = dist(circle1.x, circle1.y, golden.x, golden.y);
    if (i < circle1.size/2 + golden.sizeX/2) {
       state = `goldenRetriever`;
    }
    // Check if circle1 and pug overlap
    let s = dist(circle1.x, circle1.y, pug.x, pug.y);
    if (s < circle1.size/2 + pug.sizeX/2) {
       state = `pug`;
    }
    // Check if circle1 and cashier overlap
    let t = dist(circle1.x, circle1.y, cashier.x, cashier.y);
    if (t < circle1.size/2 + cashier.sizeX/2) {
       state = `cashier`;
    }

    // Giving circle2 boundaries as well as check if circle1 and circle2 overlap
    let a = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (a < circle1.size/2 + circle2.size/2) {
        circle2.speed = -circle2.speed
   }
   // Creating boundaries
   else if (circle2.x < 0) {
    circle2.speed = -circle2.speed;
   }
   else if (circle2.x > 329) {
    circle2.speed = -circle2.speed;
   }
}

function onOff() {
    // Circle3 moving back and forth
    circle3.x = circle3.x + circle3.speed;

    if (circle3.x > 260) {
        circle3.speed = -circle3.speed;
    }
    
    if (circle3.x < 240) {
        circle3.speed = -circle3.speed;
    }
}

function display() {
    // Display the circles
    ellipse(circle1.x, circle1.y, circle1.size);

    push();
    noStroke();
    fill(16,30,88);
    ellipse(circle2.x, circle2.y, circle2.size);
    pop();

    push();
    noStroke();
    ellipse(circle3.x, circle3.y, circle3.size);
    pop();

    imageMode(CENTER);
    // Display the shiba image from "Prompt Hunt"
    image(shiba.image, shiba.x, shiba.y, shiba.size, shiba.size);
    // Display the golden retriever image from "PNGTree"
    image(golden.image, golden.x, golden.y, golden.sizeX, golden.sizeY);
    // Display the pug image from "FreePik"
    image(pug.image, pug.x, pug.y, pug.sizeX, pug.sizeY);
    // Display the cashier image from "Adobe Stock"
    image(cashier.image, cashier.x, cashier.y, cashier.sizeX, cashier.sizeY);

}

function mousePressed() {
    // When pressing the mouse button, changes the title screen
    if (state === `title`) {
        state = `simulation`;
    }
}
