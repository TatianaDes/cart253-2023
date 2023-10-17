/**
 * The Right Dog For You
 * Tatiana Désormeaux
 * 
 * This is a simulation about a pet store and about finding the right fit dog for you, you can go over each type of dog to find out what breed it is as well as a bit of a description of the dog.
 */

"use strict";

let petstoreImage;

let carrier = {
    x: 250,
    y: 450,
    size: 60,
    vx: 0,
    vy: 0,
    speed: 3,
    image: undefined
};

let ball = {
    x: 0,
    y: 490,
    size: 20,
    speed: 0.5
};

let light = {
    x: undefined,
    y: undefined,
    size: 50,
    speed: 0.25,
    fill: 255
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
    carrier.image = loadImage("assets/images/carrier.png");
    shiba.image = loadImage("assets/images/shiba.png");
    golden.image = loadImage("assets/images/goldenretriever.png");
    pug.image = loadImage("assets/images/pug.png");
    cashier.image = loadImage("assets/images/cashier.png");

}

function setup() {
    createCanvas(500, 500);
    
    // Giving light a location
    noStroke();
    light.x = 250;
    light.y = 20;
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
    background(255,227,78);
    textSize(30);
    fill(238,159,19);
    textAlign(CENTER, CENTER);
    text(`The Right Dog for You:`, 250, 250);
    text(`Welcome to Our Humble Pet Store!`, 250, 290);
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
    background(212,119,33);
    textSize(30);
    fill(255,237,32);
    text(`Name: Luna`, 50, 70);
    text(`Sex: Female`, 50, 120);
    text(`Breed: Shiba Inu`, 50, 170);
    text(`Age: 8 Years`, 50, 220);
    textSize(14.8);
    text(`Who is Luna:`, 50, 260);
    text(`Who is Luna: Luna is an excitable, lovable dog.`, 50, 290);
    text(`She is gentle and always happy to be around people of any age.`, 50, 320);
    text(`She can get nervous when too much stimulation occurs around her,`, 50, 350);
    text(`but a little breather outside and comforting`, 50, 380);
    text(`pets can calm her straight down.`, 50, 410);
    text(`Luna is looking for a beautiful family`, 50, 440);
    text(`ready to treat her like the wonderful dog she is!`, 50, 470);
    pop();
}


function goldenRetrieverDog() {
    // Golden Retriever state
    push();
    background(157,168,255);
    textSize(30);
    fill(27,22,255);
    text(`Name: Mia`, 50, 70);
    text(`Sex: Female`, 50, 120);
    text(`Breed: Golden Retriever`, 50, 170);
    text(`Age: 11 Years`, 50, 220);
    textSize(14.8);
    text(`Who is Mia:`, 50, 260);
    text(`Who is Mia: Mia is a calm and gentle dog.`, 50, 290);
    text(`She is quiet and loves watching TV by the couch.`, 50, 320);
    text(`While she likes to rest, she puts a heavy importance on protection.`, 50, 350);
    text(`She is a wonderful guard dog and`, 50, 380);
    text(`loves to make sure everyone is safe.`, 50, 410);
    text(`Mia is looking for a family that likes to stay at home,`, 50, 440);
    text(`but is more than willing to give her the exercise she needs!`, 50, 470);
    pop();
}

function pugDog() {
    // Pug state
    push();
    background(102,36,36);
    textSize(30);
    fill(255,23,23);
    text(`Name: Hades`, 50, 70);
    text(`Sex: Male`, 50, 120);
    text(`Breed: Pug`, 50, 170);
    text(`Age: 2 Years`, 50, 220);
    textSize(14.8);
    text(`Who is Hades:`, 50, 260);
    text(`Who is Hades: Hades is a hyper and silly dog.`, 50, 290);
    text(`He can be loud but can easily be calmed down by toys.`, 50, 320);
    text(`He is great with other dogs and loves to make friends.`, 50, 350);
    text(`He is loving and adores company.`, 50, 380);
    text(`Hades is looking for a family ready to love a little fur ball,`, 50, 410);
    text(`and can also make him feel safe in this big world of big dogs!`, 50, 440);
    pop();
}

function cashierWorker() {
    // Cashier state
    push();
    background(112,22,114);
    textSize(30);
    fill(255,127,214);
    textAlign(CENTER, CENTER);
    text(`I hope you have a wonderful day,`, 250, 220);
    text(`and we hope to see you soon!`, 250, 250);
    text(`The dogs will surely miss you!`, 250, 300);
    pop();
}

function move() {
    // Move carrier
    carrier.x = carrier.x + carrier.vx;
    carrier.y = carrier.y + carrier.vy;

    // Constrains carrier from passing any border of the screen
    carrier.x = constrain(carrier.x, 0, width);
    carrier.y = constrain(carrier.y, 0, height);

    // Ball moving
    ball.x = ball.x + ball.speed;
}

function handleInput() {
    // Make carrier move using the arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        carrier.vx = -carrier.speed; 
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        carrier.vx = carrier.speed;
    }
    else {
        carrier.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
        carrier.vy = -carrier.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        carrier.vy = carrier.speed;
    }
    else {

        carrier.vy = 0;
    }
}

function checkOverlap() {
    // Check if carrier and shiba overlap
    let d = dist(carrier.x, carrier.y, shiba.x, shiba.y);
    if (d < carrier.size/2 + shiba.size/2) {
       state = `shiba`;
    }
    // Check if carrier and golden overlap
    let i = dist(carrier.x, carrier.y, golden.x, golden.y);
    if (i < carrier.size/2 + golden.sizeX/2) {
       state = `goldenRetriever`;
    }
    // Check if carrier and pug overlap
    let s = dist(carrier.x, carrier.y, pug.x, pug.y);
    if (s < carrier.size/2 + pug.sizeX/2) {
       state = `pug`;
    }
    // Check if carrier and cashier overlap
    let t = dist(carrier.x, carrier.y, cashier.x, cashier.y);
    if (t < carrier.size/2 + cashier.sizeX/2) {
       state = `cashier`;
    }

    // Giving ball boundaries as well as check if carrier and ball overlap
    let a = dist(carrier.x, carrier.y, ball.x, ball.y);
    if (a < carrier.size/2 + ball.size/2) {
        ball.speed = -ball.speed
   }
   // Creating boundaries
   else if (ball.x < 0) {
    ball.speed = -ball.speed;
   }
   else if (ball.x > 329) {
    ball.speed = -ball.speed;
   }
}

function onOff() {
    // Light moving back and forth
    light.x = light.x + light.speed;

    if (light.x > 260) {
        light.speed = -light.speed;
    }
    
    if (light.x < 240) {
        light.speed = -light.speed;
    }
}

function display() {
    // Display carrier
    push();
    imageMode(CENTER);
    image(carrier.image, carrier.x, carrier.y, carrier.size, carrier.size);
    pop();

    // Display ball
    push();
    noStroke();
    fill(16,30,88);
    ellipse(ball.x, ball.y, ball.size);
    pop();

    // Display light
    push();
    noStroke();
    light.fill = map(mouseX, 0, width, 0, 255);
    fill(light.fill);
    ellipse(light.x, light.y, light.size);
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
