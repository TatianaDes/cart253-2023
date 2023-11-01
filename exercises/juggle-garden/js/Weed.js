class Weed {
      // constructor() sets up our starting properties
      constructor(x, y, weedkillerImage) {
        this.x = x;
        this.y = y;
        this.sizeX = 80;
        this.sizeY = 100;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 5;
        this.alive = true;
        this.image = weedkillerImage;

      }
    
      // Adding gravity to the weedkiller so that it can bounce
      gravity(force) {
          this.ay = this.ay + force;
      }
  
      // move() moves the weedkiller by potentially changing direction
      // and then changing position based on velocity
      move() {
          this.vx = this.vx + this.ax;
          this.vy = this.vy + this.ay;
  
          this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
          this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
  
          this.x = this.x + this.vx;
          this.y = this.y + this.vy;
  
          if (this.y - this.sizeX/2 > height) {
              this.active = false;
          }
      }
  
      // Making the weedkiller able to bounce like a ball and changing the way the bounce is displayed
      bounce(paddle) {
          if (this.x > paddle.x - paddle.width/2 &&
          this.x < paddle.x + paddle.width/2 &&
          this.y + this.sizeX/2 > paddle.y - paddle.height/2 &&
          this.y - this.sizeX/2 < paddle.y + paddle.height/2) {
              // Bounce
              let dx = this.x - paddle.x;
              this.vx = this.vx + map(dx, -paddle.width/2, paddle.width/2, -2, 2);
  
              this.vy = -this.vy;
              this.ay = 0;
          }
      }

      // Once the weedkiller touches the flower, the flower dies
      kill(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.sizeX/2 + flower.size/2 + flower.petalThickness) {
            flower.alive = false;
        }
      }
    
      // display() draws our bee onto the canvas
      display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.sizeX, this.sizeY);
        pop();
    
    }
}
