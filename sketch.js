const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  canvas = createCanvas(1000,650);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(325,630,1000,15);
 ground2=new Ground(500,580,400,20);
 ground3=new Ground(625,270,300,20);

 box1=new Box(335,530,40,50);
 box2=new Box(375,530,40,50);
 box3=new Box(415,530,40,50);
 box4=new Box(455,530,40,50);
 box5=new Box(495,530,40,50);
 box6=new Box(535,530,40,50);
 box7=new Box(575,530,40,50);
 box8=new Box(615,545,40,50);
 box9=new Box(660,545,40,50);
 box10=new Box(355,480,40,50);
 box11=new Box(400,480,40,50);
 box12=new Box(425,480,40,50);
 box13=new Box(480,480,40,50);
 box14=new Box(515,480,40,50);
 box15=new Box(560,480,40,50);
 box16=new Box(595,480,40,50);
 box17=new Box(480,400,40,50);
 box18=new Box(530,400,40,50);
 box19=new Box(430,400,40,50);
 box27=new Box(480,355,40,50);

 box20=new Box(510,225,40,60);
 box21=new Box(550,225,40,60);
 box22=new Box(590,225,40,60);
 box23=new Box(640,225,40,60);
 box24=new Box(680,225,40,60);
 box25=new Box(540,160,40,60);
 box26=new Box(580,160,40,60);

 box28=new Box(620,160,40,60);
 box29=new Box(660,160,40,60);
 box30=new Box(595,100,40,60);

 body = new Body(50,500);

 chain1 = new chain(body.body,{x:150,y:550})
}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();  
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  chain1.display();

  body.display();
}

function mouseDragged(){
  Matter.Body.setPosition(body.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain1.attach(body.body);
  }
}