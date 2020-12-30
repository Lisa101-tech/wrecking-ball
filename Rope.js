class Rope{
constructor(B,pointB){
var options = {
 bodyA: B ,
 pointB: pointB,
 stiffness:0.1,
 length:200
}
this.pointB =pointB
this.rope = Matter.Constraint.create(options)
World.add(world,this.rope)
}
display(){
var pointA = this.rope.bodyA.position
var pointB = this.pointB
push();
stroke("black")
strokeWeight(5)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop();
}

}