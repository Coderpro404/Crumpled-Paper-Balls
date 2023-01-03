
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(400,550,800,15);
	leftSide = new Ground(700,492,15,100);
	rightSide = new Ground(550,492,15,100);
	

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction:0.,
		density:0.5
	}

	ball = Bodies.circle(100,20,10,ball_options);
	World.add(world,ball);

	

	Engine.run(engine);
  
}

function forceH(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function forceV(){
	
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function draw() {

	Engine.update(engine);
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		forceH();
		forceV();
	}
}



