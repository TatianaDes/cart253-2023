class Bee {

    // constructor() sets up our starting properties
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 40;
      this.minSize = 10; // If we get smaller than this minimum we're dead
      this.maxSize = 40;
      this.vx = 0;
      this.vy = 0;
      this.ax = 0;
      this.ay = 0;
      this.maxSpeed = 5;
      this.shrinkRate = 0.05; // How much smaller we get each frame
      this.growRate = 0.05;
      this.jitteriness = 0.1; // How likely the bee is to change direction
      this.alive = true; // The Bee starts out alive!
    }
  
    gravity(force) {
        this.ay = this.ay + force;
    }

    // shrink() causes the bee to get smaller over time
    shrink() {
      // Shrink by reducing the size by a set amount
      this.size = this.size - this.shrinkRate;
      // Check if we're smaller than the minimum size
      if (this.size < this.minSize) {
        // If so, we're dead
        this.alive = false;
      }
    }

    tryToPollinate(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.size/2 + flower.size/2 + flower.petalThickness) {
            this.grow();
            flower.pollinate();
        }
    }

    grow() {
        this.size = this.size + this.growRate;
        this.size = constrain(this.size, this.minSize, this.maxSize);
    }
  
    // move() moves the bee by potentially changing direction
    // and then changing position based on velocity
    move() {
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.y - this.size/2 > height) {
            this.active = false;
        }
    }

    bounce(paddle) {
        if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {
            // Bounce
            let dx = this.x - paddle.x;
            this.vx = this.vx + map(dx, -paddle.width/2, paddle.width/2, -2, 2);

            this.vy = -this.vy;
            this.ay = 0;
        }
       
          
    }
  
    // display() draws our bee onto the canvas
    display() {
      push();
      // Wings on either side
      fill(255, 255, 255);
      noStroke();
      ellipse(this.x - this.size / 2, this.y, this.size / 2);
      ellipse(this.x + this.size / 2, this.y, this.size / 2);
      pop();
  
      // Body
      push();
      fill(225, 225, 50);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
  
      // Eyes
      push();
      fill(0, 0, 0);
      noStroke();
      ellipse(this.x - this.size / 10, this.y, this.size / 10);
      ellipse(this.x + this.size / 10, this.y, this.size / 10);
      pop();
    }
  }