const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine;






function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(1200,700);


  ball = new Ball(400,500,50)
  rope = new Rope(ball.body,{x:400,y:40})
  ground = new Ground(600,650,1200,20)

  box1 = new Blocks(650,605,70,70)
  box2 = new Blocks(730,605,70,70)
  box3 = new Blocks(810,605,70,70)
  box4 = new Blocks(650,530,70,70)
  box5 = new Blocks(730,530,70,70)
  box6 = new Blocks(810,530,70,70)
  
}

function draw() {
  background(255, 219, 250);  
  drawSprites();

  rope.display();
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
}

function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


