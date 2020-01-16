const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    //create engine
    engine = Engine.create();
    world = engine.world;

    //create ground
   ground=new Ground(600,390,1200,20);

   //first layer
   box1=new Box(700,320,70,70);
   box2=new Box(920,320,70,70);
   log1=new Log(810,260,20,300,PI/2);
   pig1=new Pig(810,365,50,50);

   //second layer
   box3=new Box(700,240,70,70);
   box4=new Box(920,240,70,70);
   log2=new Log(810,180,20,300,PI/2);
   pig2=new Pig(810,220,50,50);
   
   //third layer
   box5=new Box(810,160,70,70);
   log3=new Log(760,120,20,150,PI/7);
   log4=new Log(870,120,20,150,-PI/7);
   bird1=new Bird(100,100,50,50);
}
function draw()
{
    //clear background
    background(0);

    //updating engine
    Engine.update(engine);

    //display ground 
    ground.display();

    //display first layer
    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    
    //display second layer
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    
    //display third layer
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
   
}