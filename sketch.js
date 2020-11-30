
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200, 200, 5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper1.display();
}
