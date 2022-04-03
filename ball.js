class Ball {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.gravity = 1
        this.velocity = -0.5
        this.bounces = 6
        this.bouncynes = 1
        this.jumpingStatus = true
        this.r = 255
        this.g = 204
        this.b = 0 
    }

    draw() { 
        // console.log(this.jumpingStatus );
        this.color = color(this.r, this.g, this.b);
        fill(this.color);
        noStroke();
        ellipse(this.x,this.y,100,100);
        ellipse(this.x +50,this.y +50,20,20);
        ellipse(this.x -50,this.y -50,20,20);
        ellipse(this.x -50,this.y +50,20,20);
        ellipse(this.x +50,this.y -50,20,20);
        if (this.jumpingStatus === false) {
            this.velocity += this.gravity 
		    this.y += this.velocity
            if (this.y +50 > 400) {
                this.y = 350
            }
        }         
        if (this.jumpingStatus === true) {
            this.velocity += this.gravity 
		    this.y += this.velocity
            if (this.y +50 >  400) {
                if (this.bounces > 0) {
                    this. bounces -= 1
                }
                // if (this.y +50 === 400) {
                // console.log(this.bounces);
                if (this.bounces > 0 ) {
                    this.velocity = -5 * this.bounces
                }           
            } 
            if (this.y +50 > 400) {
                this.y = 350
            }
        }
        if (this.bounces === 0) {
            this.bounces = 6
            this.jumpingStatus = !this.jumpingStatus
        }                       
    }

    jump() {
        // this.bounces = 6
        // console.log(this.jumpingStatus);
        // this.y = 350 
        this.velocity = - 28
        // console.log(this.velocity);
        this.jumpingStatus = !this.jumpingStatus
        
    }
}