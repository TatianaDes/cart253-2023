// class Level1 {

//     // Creating dimensions of the player
//     constructor({ x, y, w, h, red, green, blue, leftKey, rightKey, upKey, downKey }) {
//         this.player = {
//             x: x,
//             y: y,
//             w: w,
//             h: h,
//             size: 40,

//             speed: 5,
//             vx: 0,
//             vy: 0,
//             ax: 0,
//             ay: 0,

//             r: red,
//             g: green,
//             b: blue,

//             leftKey: leftKey,
//             rightKey: rightKey,
//             upKey: upKey,
//             downKey: downKey
//         }
//     }

//     draw() {
//         background(186, 239, 158);

//         // Call the state's methods to make the animation work
//         this.move();
//         this.display();
//         this.keyPressed(keyCode);
//         this.keyReleased(keyCode);
//         this.checkEnding();
//     }

//     // Gives movement to the player
//     move() {
//         this.player.x += this.player.vx;
//         this.player.y += this.player.vy;
//     }

//     // Displays the player
//     display() {
//         push();
//         noStroke();
//         fill(this.player.r, this.player.g, this.player.b);
//         rectMode(CENTER);
//         rect(this.player.x, this.player.y, this.player.w, this.player.h);
//         pop();
//     }

//     // Starts the player when the arrow keys are pressed
//     keyPressed(keyCode) {
//         if (keyCode === this.player.leftKey) {
//             this.player.vx = -this.player.speed;
//         }
//         else if (keyCode === this.player.rightKey) {
//             this.player.vx = this.player.speed;
//         }

//         if (keyCode === this.player.upKey) {
//             this.player.vy = -this.player.speed;
//         }
//         else if (keyCode === this.player.downKey) {
//             this.player.vy = this.player.speed;
//         }
//     }

//     // Stops the player when the arrow keys are released
//     keyReleased(keyCode) {
//         if (keyCode === this.player.leftKey && this.player.vx < 0) {
//             this.player.vx = 0;
//         }
//         else if (keyCode === this.player.rightKey && this.player.vx > 0) {
//             this.player.vx = 0;
//         }

//         if (keyCode === this.player.upKey && this.player.vy < 0) {
//             this.player.vy = 0;
//         }
//         else if (keyCode === this.player.downKey && this.player.vy > 0) {
//             this.player.vy = 0
//         }
//     }

//     checkEnding() {
//         let d = dist(player2.x, player2.y, creature.x, creature.y);
//         if (d < player2.size / 2 + creature.size / 2) {
//             state = `note`;
//             currentState = new Ending();
//         }
//     }
// }