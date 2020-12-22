
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Constraint;
var tree,stone,ground,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
function preload()
{
	
}

function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
  world = engine.world;
  
  stone= new Stone(160,500,20)

  mango1 = new Mango(1250,170,30);
  mango2 = new Mango(1230,250,30);
  mango3 = new Mango(1150,290,30);
  mango4 = new Mango(1200,330,30);
  mango5 = new Mango(1320,210,30);
  mango6 = new Mango(1300,290,30);
  mango7 = new Mango(1400,230,30);
  mango8 = new Mango(1450,310,30);
  mango9 = new Mango(1380,310,30);

  //Create the Bodies Here.
    tree = new Tree(1300,680)
    ground = new Ground(0,680,4000,20);
    boy = new Boy(250,570);
    boy.scale = 0.005;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  boy.display()
  mango1.display()
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display()
  stone.display()
  tree.display()


  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  
 
}
function mouseDragged(){

     Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){

 chain.fly();


}
function keyPressed(){
if(keyCode === 32){
   Matter.Body.setPosition(stone.body,{x:160,y:300});
   chain.attach(stone.body);

}
}
function detectCollision(lstone,lmango){
 stoneBodyPosition = lstone.body.position;
 mangoBodyPosition = lmango.body.position;

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
 if(distance <= lmango.r +  lstone.r){
   Matter.Body.setStatic(lmango.body,false);

 }



}


















