class Snow {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic : false
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = radius;
        World.add(world, this.body);   

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0 , 0, 50, 50);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        noStroke();
        ellipse(0, 0, this.radius);
        pop();
    }
}