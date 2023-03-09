var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottomground
var leftWall
var rightWall
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(250,100,20,ball_options)
	World.add(world,ball)
	bottomground=new Ground(300,680,width,20)
	leftWall=new Ground(500,620,20,60)
	rightWall=new Ground(600,620,20,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  bottomground.display()
  leftWall.display()
  rightWall.display()
  drawSprites();
 
}
function keyPressed(){
	  if(keyCode===UPARROW){
		 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	  }

}



