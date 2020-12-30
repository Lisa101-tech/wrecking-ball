class Ball{
 constructor(x,y,radius){
    var options = {
    restitution:0.4,
    density:0.3
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius
    World.add(world,this.body)
}
display(){
    var pos = this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    fill(214, 0, 0)
    ellipse(0,0,this.radius,this.radius)
    pop();
    }
}