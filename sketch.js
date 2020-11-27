var bullet,wall;
var speed,weight,thickness;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor=("white");
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);
  deformation =
   speed*speed*weight*0.5/22500;
}

function draw() {
  background("black"); 
  bullet.collide(wall);
  bulletCollide();
  drawSprites();
}
function bulletCollide(){
  if(deformation<10){
    wall.shapeColor = ("green");
  }
  if(deformation>10){
    wall.shapeColor = ("red");
  }
}