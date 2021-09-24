const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher,computer,computerBase;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic : true
  };

player = new Player(100,150,100,100);
World.add(world,player);
playerBase = new Base(100,player.y+50,100,100,options);
World.add(world,playerBase);
computer = new Player(600,150,100,100);
World.add(world,computer);
computerBase = new Base(600,computer.y+50,100,100);
World.add(world,computerBase);
}

function draw() {
  background(backgroundImg);

 


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
 player.display();
 computer.display();
 playerBase.show();
 computerBase.show();
}
