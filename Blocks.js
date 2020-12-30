class Blocks{
    constructor(x,y,width,height){
       var options = {
      isStatic:false,
       restitution:0.4,
       density:0.3,
       friction:0.4
       }
       this.body = Bodies.rectangle(x,y,width,height,options)
       this.width = width
       this.height = height
       World.add(world,this.body)
   }
   display(){
       var pos = this.body.position
       push();
       translate(pos.x,pos.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       stroke("black")
       fill(20, 158, 158)
       rect(0,0,this.width,this.height)
       pop();
       }
   }