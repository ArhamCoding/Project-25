
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinLeft;
var dustbinRight;
var dustbinBottom;

var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();

	world = engine.world;


	ground = new Ground(600,height-30,1200,20);

	paper1 = new Paper (200, 590);

	dustbinBottom=new Dustbin(900,640,140,20,{isStatic:true});
	//bottomwall.shapeColor = color(255);
	//bottomwall = Bodies.rectangle(390, 310, 100, 20 , {isStatic:true} );

	dustbinLeft=new Dustbin(840,600,20,100, {isStatic:true});
	//leftwall.shapeColor = color(255);
	//leftwall = Bodies.rectangle(390, 300, 100, 20 , {isStatic:true} );

	dustbinRight=new Dustbin(960,600,20,100, {isStatic:true});
	//rightwall.shapeColor = color(255);
	//rightwall = Bodies.rectangle(390, 300, 100, 20 , {isStatic:true} );


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);
dustbinBottom.display();
dustbinLeft.display();
dustbinRight.display();
  //drawSprites();
  ground.display();
  paper1.display();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:540, y:380});
	}
}
