const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background, backgroundImg;
var snow, ball;
var snowArray = []

function preload(){
   backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  background = createSprite(400, 200, 50, 50);
  background.addAnimation("bg", backgroundImg);

  if (frameCount%60===0) {
    snow = new Snow(random(10,width-10),random(10,50));
    snowArray.push(snow);
  }

  ball = Bodies.circle(200, 100, 20, 20);
  World.add(world,ball);

  
}

function draw() {
  
  for (var k = 0; k < snowArray.length; k++) {
        
    snowArray[k].display();
    
  }
   
  
  drawSprites();
}