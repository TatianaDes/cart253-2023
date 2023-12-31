// Animation
// Handles the actual animation sequence of the program. A circle
// moves from left to right across the screen. When it reaches the right
// side the program will switch to the Ending state.

class Animation {

  // Acts as the setup() of the state, called when the
  // state is created. Creates a circle object and sets its
  // velocity.
  constructor() {
    // Create a circle property with our moving object in it.
    this.circle = {
      x: 0,
      y: 250,
      size: 100,
      vx: 0,
      vy: 0,
      speed: 2,
    };

    // Set the velocity of the circle to its speed.
    // NOTE: we cannot use this.circle.speed INSIDE the object
    // definition above. That's why this is on a separate line.
    this.circle.vx = this.circle.speed;
  }

  // draw()
  // Called every frame in the main script. Handles what the title
  // state needs to do each frame. It moves and displays the circle
  // and checks if it has reached the right hand side.
  draw() {
    background(0);

    // Call the state's methods to make the animation work
    this.move();
    this.display();
    this.checkEnding();
  }

  // move()
  // Updates the circle's position with its velocity
  move() {
    this.circle.x = this.circle.x + this.circle.vx;
    this.circle.y = this.circle.y + this.circle.vy;
  }

  // display()
  // Displays the circle as an ellipse on the canvas
  display() {
    push();
    ellipse(this.circle.x, this.circle.y, this.circle.size);
    pop();
  }

  // checkEnding()
  // Checks if the circle has moved past the right hand side
  // of the canvas and changes to the Ending state if it has.
  checkEnding() {
    if (this.circle.x > width) {
      // Switch to the ending state

      // NOTE how we do not need to check if the state is animation,
      // because this class IS the animation state

      // NOTE that we switch states by changing what kind of state object is in
      // the currentState variable from the main script. By putting a new Ending
      // state object into it, the program will start using the Ending class to
      // determine how to handle draw() and keyPressed()

      // NOTE that creating a new Ending object like this automatically calls its
      // constructor(), which therefore acts like setup(), called once when the state
      // starts.

      currentState = new Ending();
    }
  }

  keyPressed() {

  }
}