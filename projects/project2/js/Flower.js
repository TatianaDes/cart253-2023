//Credit to my Professor, Pippin Barr, and TA, Mathilde Davan, for helping me with all the code that I have written step by step as I was struggling.
//Credit to Pippin Barr for introducing the vignette code to me and me following along his guidelines.
class Flower {

    //Credit to Pippin Barr for the video from the activity "7.5. Object-Oriented Programming activity" for showing me all the code for how to make flowers and make them able to grow and shrink.
    // Creating dimensions of flower
    constructor(x, y, size, stemLength, petalColor) {
        // Position and size information
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxSize = size;
        this.stemLength = stemLength;
        this.stemThickness = 10;
        this.petalThickness = 10;
        this.maxPetalThickness = 10,
            // Color information
            this.stemColor = {
                r: 50,
                g: 150,
                b: 50
            },
            this.petalColor = petalColor;
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        };
        this.alive = true;
    }

    // Makes the flowers shrink as time passes
    shrink() {
        let shrinkage = random(0, 0.2);
        this.size = this.size - shrinkage;
        this.petalThickness = this.petalThickness - shrinkage / 10;

        if (this.size <= 0 || this.petalThickness <= 0) {
            this.alive = false;
        }
    }

    // Allows the bees to pollinate the flowers as they are touched
    pollinate() {
        let growth = random(0, 0.5);
        this.size = this.size + growth;
        this.petalThickness = this.petalThickness + growth / 10;

        this.size = constrain(this.size, 0, this.maxSize);
        this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);

    }

    // Allows the flowers to be displayed
    display() {
        push();
        // Draw a line for the stem
        strokeWeight(this.stemThickness);
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
        // Draw a circle with a heavy outline for the flower
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    // Calls the mousePressed function to work
    mousePressed() {

    }

    // Calls the keyPressed function to work
    keyPressed() {

    }

    // Calls the keyReleased function to work
    keyReleased() {

    }
}