class House {

    // Creating dimensions of the house
    constructor(x, y, w, h, size) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = size;
    }

    // Checks if the player touches the house and constrains them (not working)
    checkHouse(player) {
        let d = dist(this.x, this.y, player.x, player.y);
        if (d < this.size / 2 + player.size / 2) {
            player.speed = -player.speed
        }
    }

    // Displays the house
    display() {
        // Displaying the walls
        push();
        noStroke();
        fill(113, 61, 244);
        rectMode(CENTER);
        rect(this.x, this.y - 23.5, this.w + 80, this.h + 50);
        pop();

        // Displaying the door frame
        push();
        noStroke();
        fill(65, 13, 197);
        rectMode(CENTER);
        rect(this.x, this.y - 3, this.w + 10, this.h + 7);
        pop();

        // Displaying the door
        push();
        noStroke();
        fill(131, 112, 244);
        rectMode(CENTER);
        rect(this.x, this.y + 1, this.w, this.h);
        pop();

        // Displaying the door knob
        push();
        fill(0);
        noStroke();
        ellipse(this.x + 15, this.y, this.size);
        pop();



        // Displaying the walls2
        push();
        noStroke();
        fill(43, 165, 79);
        rectMode(CENTER);
        rect(this.x - 500, this.y - 400, this.w + 80, this.h + 50);
        pop();

        // Displaying the door frame2
        push();
        noStroke();
        fill(20, 62, 33);
        rectMode(CENTER);
        rect(this.x - 500, this.y - 379, this.w + 10, this.h + 7);
        pop();

        // Displaying the door2
        push();
        noStroke();
        fill(82, 188, 112);
        rectMode(CENTER);
        rect(this.x - 500, this.y - 375, this.w, this.h);
        pop();

        // Displaying the door knob2
        push();
        fill(0);
        noStroke();
        ellipse(this.x - 485, this.y - 375, this.size);
        pop();



        // Displaying the walls3
        push();
        noStroke();
        fill(28, 123, 138);
        rectMode(CENTER);
        rect(this.x + 450, this.y - 250, this.w + 80, this.h + 50);
        pop();

        // Displaying the door frame3
        push();
        noStroke();
        fill(33, 75, 82);
        rectMode(CENTER);
        rect(this.x + 450, this.y - 229, this.w + 10, this.h + 7);
        pop();

        // Displaying the door3
        push();
        noStroke();
        fill(162, 197, 203);
        rectMode(CENTER);
        rect(this.x + 450, this.y - 225, this.w, this.h);
        pop();

        // Displaying the door knob3
        push();
        fill(0);
        noStroke();
        ellipse(this.x + 465, this.y - 225, this.size);
        pop();

    }

}