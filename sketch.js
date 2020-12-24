const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(200,390,400,20)

    box1=new Box(200,200,60,70)
    box2=new Box(250,100,60,90)
}

function draw(){
    background(0);
    Engine.update(engine);
    

    box1.display()
    ground.display()
    box2.display()
}