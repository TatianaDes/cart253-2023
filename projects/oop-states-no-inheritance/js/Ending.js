// Ending
// Displays the ending message of the program.
class Ending {

  // constructor()
  // Acts as the setup() of the state, called when the
  // state is created. Sets the ending message of the program.
  constructor() {
    // Set our property determining the ending message of the simulation
    this.endingString = "Ah, mortality.";
  }

  // draw()
  // Called every frame in the main script. Handles what the ending
  // state needs to do each frame, which is display the ending message.
  draw() {
    background(0);

    // Overkill perhaps, but we have a separate method to just display
    // the actual ending text. More methods/functions is generally better.
    this.displayEnding();
  }

  // displayTitle()
  // Sets style and then display the text in the endingString property on the canvas
  displayEnding() {
    push();
    fill(255, 0, 0);
    text(this.endingString, width / 2, height / 2)
    pop();
  }

  keyPressed() {

  }
}