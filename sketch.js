const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground1,platform,platform2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,400,1200,20);
    platform = new Ground(600,300,300,10);
    platform2 = new Ground(1000,150,225,10);

    b1 = new Box(500,272.9,30,40);
    b2 = new Box(530,272.9,30,40);
    b3 = new Box(560,272.9,30,40);
    b4 = new Box(590,272.9,30,40);
    b5 = new Box(620,272.9,30,40);
    b6 = new Box(650,272.9,30,40);
    b7 = new Box(680,272.9,30,40);

    b8 = new Box(530,234,30,40);
    b9 = new Box(560,234,30,40);
    b10 = new Box(590,234,30,40);
    b11 = new Box(620,234,30,40);
    b12 = new Box(650,234,30,40);

    b13 = new Box(560,195,30,40);
    b14 = new Box(590,195,30,40);
    b15 = new Box(620,195,30,40);

    b16 = new Box(590,152.5,30,40);

    b17 = new Box(930,122.5,30,40);
    b18 = new Box(960,122.5,30,40);
    b19 = new Box(990,122.5,30,40);
    b20 = new Box(1020,122.5,30,40);
    b21 = new Box(1050,122.5,30,40);

    b22 = new Box(960,82,30,40);
    b23 = new Box(990,82,30,40);
    b24 = new Box(1020,82,30,40);

    b25 = new Box(990,42,30,40);

}

function draw(){
    background(200)
    ground1.display();1

    platform.display();
    platform2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();
    b15.display();

    b16.display();

    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    b22.display();
    b23.display();
    b24.display();

    b25.display();

}