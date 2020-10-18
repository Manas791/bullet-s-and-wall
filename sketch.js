var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 50);
  bullet.shapeColor="white"
wall=createSprite(1500, 200, 60, height/2);
wall.shapeColor="purple"
speed=random(223,321)
thickness=random(50,83)
weight=random(30,52)
bullet.velocityX=speed
}

function draw() {
  background("black");  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
 bullet.velocityX=0   
var damage=0.5*weight*speed*speed/thickness*thickness*thickness
if(damage>10){
bullet.shapeColor ="red"
}

  if(damage<10){
    bullet.shapeColor ="green"
    }
}
  drawSprites();
}