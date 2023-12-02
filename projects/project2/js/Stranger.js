class Stranger {

    constructor(x, y, red, green, blue /*note*/) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.r = red;
        this.g = green;
        this.b = blue;
        this.speed = 3;
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);

        // // Oscillator
        // this.oscillator = new p5.Oscillator();
        // this.nearFreq = 220;
        // this.farFreq = 440;
        // this.oscillator.amp(0.025);
        // this.oscillator.start();

        // // Synth
        // this.note = note;
        // this.synth = new p5.PolySynth();
    }

    move() {
        let change = random(0, 1);
        if (change < 0.05) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);

        // // Update frequency
        // let d = dist(this.x, this.y, width / 2, height / 2);
        // let maxDist = dist(0, 0, width / 2, height / 2);
        // let newFreq = map(d, 0, maxDist, this.nearFreq, this.farFreq);
        // this.oscillator.freq(newFreq);
    }

    // bounce() {
    //     if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
    //         this.vx = -this.vx;
    //         this.playNote();
    //     }

    //     if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
    //         this.vy = -this.vy;
    //         this.playNote();
    //     }
    // }

    // playNote() {
    //     this.synth.play(this.note, 0.4, 0, 0.1);
    // }

    display() {
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    mousePressed() {

    }

    keyPressed() {

    }

    keyReleased() {

    }
}

