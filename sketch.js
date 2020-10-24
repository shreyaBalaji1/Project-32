const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var polygon, polygonImg;
var slingshot;

function preload() {
    polygonImg = loadImage("hexagon.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
      density: 5
    }
    polygon = Bodies.circle(50,200,20,options);
    World.add(world, polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});

    stand1 = new Ground(404, 325, 250, 7);
    //level one
    box1 = new Box(300, 275, 30, 40);
    box2 = new Box(330, 275, 30, 40);
    box3 = new Box(360, 275, 30, 40);
    box4 = new Box(390, 275, 30, 40);
    box5 = new Box(420, 275, 30, 40);
    box6 = new Box(450, 275, 30, 40);
    box7 = new Box(480, 275, 30, 40);
    //level two
    box8 = new Box(330, 235, 30, 40);
    box9 = new Box(360, 235, 30, 40);
    box10 = new Box(390, 235, 30, 40);
    box11 = new Box(420, 235, 30, 40);
    box12 = new Box(450, 235, 30, 40);
    //level three
    box13 = new Box(360, 195, 30, 40);
    box14 = new Box(390, 195, 30, 40);
    box15 = new Box(420, 195, 30, 40);
    //top
    box16 = new Box(390, 155, 30, 40);

}

function draw(){
    background("yellow");
    Engine.update(engine);

    
    stand1.display();
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

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
    slingshot.display();
}

function mouseDragged() {
  //plygon follows the mouse
  Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased() {
  //Polygon flies = Body A is detached from the constraint
  slingshot.fly();  
}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(this.polygon);
  }
}
