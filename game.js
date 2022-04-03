class Game {

    constructor() {
        this.ball = new Ball(175, 0)
        this.ball2 = new Ball(200, 200)
        this.ballBounces = 6
    }

    draw() {
        this.ball.draw()    
    }
}