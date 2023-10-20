
"use strict";

let fortunes = [
    `It's not looking so good.`,
    `You will trip over Brad Pitt today.`,
    `You are going to enjoy gum.`,
    `Happiness is yours for the taking.`,
    `You will meet David Lynch.`
];

let chosenFortune = `Click to see your future!`;

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
}

function draw() {
    background(0);
    text(chosenFortune, width/2, height/2);
}

function mousePressed() {
    chosenFortune = random(fortunes);
}