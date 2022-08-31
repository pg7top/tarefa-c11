 
var sea,ship;
var shipImg1,seaImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 
  
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(50,100);
  sea.addImage(seaImg);
  sea.scale = 0.7;
  ship = createSprite(120,200);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.3;
  
  if (sea.x < 0){
    sea.x = sea.width/2;


  } 
}

function draw() {
  background("blue");
  sea.velocityX = -2;
  if (sea.x < 0){
    sea.x = sea.width/2;


  } 
 
  drawSprites();

 
}
