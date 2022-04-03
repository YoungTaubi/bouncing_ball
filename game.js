class Game {

    constructor() {
        this.ball = new Ball(175, 0)
        this.ball2 = new Ball(200, 200)
        this.ballBounces = 6
    }

    draw() {
        this.ball.draw()
        this.ball2.draw()
        // this.ball.velocity += this.ball.gravity 
        // this.ball.y += this.ball.velocity
        if (this.ball.y +50 > this.ball2.y -50
            && this.ball2.y +50 > this.ball.y -50) {
            console.log('touching');
            this.ball.r = 255
            this.ball.g = 0
            this.ball.b = 0 
            this.ball.velocity = -5 * this.ballBounces
            if (this.ballBounces > 0) {
                this.ballBounces -= 1 
            }
            
            console.log(this.ballBounces);
            if (this.ball.y +50 > this.ball2.y-100) {
                this.ball.y = this.ball2.y-100
            }
            // if (this.bounces > 0 ) {
                // this.velocity = -5 * this.bounces
                
            // } 
            }
        //     if (this.ball.jumpingStatus === false) {
        //         this.ball.velocity += this.ball.gravity 
        //         this.ball.y += this.ball.velocity
        //         if (this.ball.y +50 > 400) {
        //             this.ball.y = 350
        //         }
        //     }         
        //     if (this.ball.jumpingStatus === true) {
        //         this.ball.velocity += this.ball.gravity 
        //         this.ball.y += this.ball.velocity
        //         if (this.ball.y +50 >  400) {
        //             if (this.ball.bounces > 0) {
        //                 this.ball. bounces -= 1
        //             }
        //             // if (this.ball.y +50 === 400) {
        //             // console.log(this.ball.bounces);
        //             if (this.ball.bounces > 0 ) {
        //                 this.ball.velocity = -5 * this.ball.bounces
        //             }           
        //         } 
        //         if (this.ball.y +50 > 400) {
        //             this.ball.y = 350
        //         }
        //     }
        //     if (this.ball.bounces === 0) {
        //         this.ball.bounces = 6
        //         this.ball.jumpingStatus = !this.jumpingStatus
        //     }
        // } else {
        //     console.log('not touching');
        //     this.ball.r = 255
        //     this.ball.g = 205
        //     this.ball.b = 0 
        // }
        // if (this.ball2.y +50 > this.ball.y -50
        //     && this.ball.y +50 > this.ball2.y -50) {
        //     console.log('touching');
        //     this.ball.r = 255
        //     this.ball.g = 0
        //     this.ball.b = 0 
        //     // this.ball.velocity = -22
        //     if (this.ball2.jumpingStatus === false) {
        //         this.ball2.velocity += this.ball2.gravity 
        //         this.ball2.y += this.ball2.velocity
        //         if (this.ball2.y +50 > 400) {
        //             this.ball2.y = 350
        //         }
        //     }         
        //     if (this.ball2.jumpingStatus === true) {
        //         this.ball2.velocity += this.ball2.gravity 
        //         this.ball2.y += this.ball2.velocity
        //         if (this.ball2.y +50 >  400) {
        //             if (this.ball2.bounces > 0) {
        //                 this.ball2. bounces -= 1
        //             }
        //             // if (this.ball2.y +50 === 400) {
        //             // console.log(this.ball2.bounces);
        //             if (this.ball2.bounces > 0 ) {
        //                 this.ball2.velocity = -5 * this.ball2.bounces
        //             }           
        //         } 
        //         if (this.ball2.y +50 > 400) {
        //             this.ball2.y = 350
        //         }
        //     }
        //     if (this.ball2.bounces === 0) {
        //         this.ball2.bounces = 6
        //         this.ball2.jumpingStatus = !this.jumpingStatus
        //     }
        // }
        // ellipse(this.x +50,this.y +50,20,20);
        // ellipse(this.x -50,this.y -50,20,20);
        // ellipse(this.x -50,this.y +50,20,20);
        // ellipse(this.x +50,this.y -50,20,20);
    }
}