
"use strict";

let synth;
let notes = [`F2`, `G2`, `F2`, `C3`, `C3`, `F2`, `Eb3`, `C3`]; // F-minor
let currentNote = 0;

function preload() {

}


function setup() {
    createCanvas(600, 600);

    synth = new p5.PolySynth();

    userStartAudio();


}

function draw() {
    background(0);

}

function keyPressed() {
    // Start the ghost player
    setInterval(playRandomNote, 150);
}

function playRandomNote() {
    let note = notes[currentNote];
    synth.play(note, 1, 0, 0.1);

    currentNote = currentNote + 1;
    if (currentNote === notes.length) {
        currentNote = 0;
    }
}