const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var ball;
var rope;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(1500,790,3000,20);
  box1 = new Box(1500,750,80,80);
  box2 = new Box(1500,700,80,80);
  box3 = new Box(1500,650,80,80);
  box4 = new Box(1500,600,80,80);
  box5 = new Box(1500,550,80,80);
  box6 = new Box(1500,500,80,80);
  box7 = new Box(1500,450,80,80);
  box8 = new Box(1500,400,80,80);
  box9 = new Box(1500,350,80,80);
  ball = new Ball(1200,300,120,120);
  rope = new Rope(ball.body,{
    x:1100,y:0
  });
  

}
function draw()
{
  background("black");
  
  Engine.update(engine);
  ground1.display(); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ball.display();
  rope.display();             

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}