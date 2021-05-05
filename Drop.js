class Drop {
    constructor(x, y) {
        var options = {
            restutuion:0.1,
            friction: 0.01
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("blue")
        ellipse(pos.x, pos.y, 5, 5);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400),y: random(0, 400)})
        }
    }
    
}