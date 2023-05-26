const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var background1Img;
var bg1;
var wall1;


function preload(){
  background1Img=loadImage("BG1.jpg");
  

}

function setup() {
 createCanvas(1000, 700);
 rectMode(CENTER);
 engine = Engine.create();
	world = engine.world;
  
  //adicionando a imagem de fundo
  bg1=createSprite(500, 350, 20, 20);
  bg1.addImage(background1Img);
  bg1.scale=1.1;

  wall1=new Ground(200, 0, 800, 20);
  
  console.log(wall1.depth);
}

function draw() {
  background(0); 
  wall1.show();




  drawSprites();

}
