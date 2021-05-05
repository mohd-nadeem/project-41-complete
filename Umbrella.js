class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
            friction: 0.1
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 25;
        this.image = loadImage("images/Walking Frame/walking_1.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 300, 300);
    }
    
}