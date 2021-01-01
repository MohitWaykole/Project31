const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particle = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

function preload(){
  bgImg = loadImage("plinko.jpg");
}

function setup() {  
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  ground = new Ground(240, 795, width, 10);
  
}

function draw() {
  background(bgImg);  

  Engine.update(engine);

  for(var k=0; k<=width; k=k+80){
    divisions.push(division1 = new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=40; j<=width; j=j+50){
    plinko.push(plinko1 = new Plinko(j,75,10));
    plinko1.display();
  }

  for(var l=15; l<=width-10; l=l+50){
    plinko.push(plinko2 = new Plinko(l, 175, 10));
    plinko2.display();
  }

  for(var m=40; m<=width; m=m+50){
    plinko.push(plinko1 = new Plinko(m,275,10));
    plinko1.display();
  }

  for(var o=15; o<=width-10; o=o+50){
    plinko.push(plinko2 = new Plinko(o, 375, 10));
    plinko2.display();
  }

  if(frameCount%60===0){
    particle.push(particles1 = new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for (var j = 0; j < particle.length; j++){
    particle[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  ground.display();

  drawSprites();
}