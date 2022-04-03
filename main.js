const game = new Game()

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    clear()
    background(220);
    game.draw()
  }

  function keyPressed() {
    if (keyCode === 32) {
        console.log( game.ball.y)
        game.ball.jump();
    }
  }