
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    

	engine = Engine.create();
	world = engine.world;
    tree1 = new Tree(700,410,200,600);
	//Create the Bodies Here.
	mango1 = new Mango(690,210);
    mango2 = new Mango(700,320);
	mango3 = new Mango(675,160);
	mango4 = new Mango(650,310);
	boy = new Boy(190,620,100,300);
	stone = new Stone(160,550,25,25);
	slingshot1 = new SlingShot(stone.body,{x:160,y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy.display();
  stone.display();
  slingshot1.display();
  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
if(keyCode===32){
	slingshot1.attach(stone.body);
}
}



