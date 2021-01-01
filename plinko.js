class Plinko{
    constructor(x,y,radius){
        var option = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        push();
        var p = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(p.x, p.y, this.radius, this.radius);
        pop();
    }
}
