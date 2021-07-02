var car1;
var car2;
var car3;
var car4;


var wall1;
var wall2;
var wall3;
var wall4;

var border1;
var speed,speed1,speed3,speed4;
var weight; 


function setup() {
  createCanvas(800,400);
 wall1 = createSprite(780,50,10,30);
 wall2 = createSprite(780,150,10,30);
 wall3 = createSprite(780,250,10,30);
 wall4 = createSprite(780,350,10,30);


 car1 = createSprite(20,50,15,15)
car1.shapeColor=("white");

car2 = createSprite(20,150,15,15)
car2.shapeColor=("white");

car3 = createSprite(20,250,15,15)
car3.shapeColor=("white");

car4 = createSprite(20,350,15,15)
car4.shapeColor=("white");

border1 = createSprite(200,100,2000,10);
border1.shapeColor=("white");
border1 = createSprite(200,200,2000,10);
border1.shapeColor=("white");
border1 = createSprite(200,300,2000,10);
border1.shapeColor=("white");
border1 = createSprite(200,400,2000,10);

speed=random(2,30);
speed1=random(3,35)
speed3=random(3,25)
speed4=random(4,45)

}

function draw() {
  background("black");  
 
 
 car1.velocityX=speed;
 car2.velocityX=speed1;
car3.velocityX=speed3;
car4.velocityX=speed4;
 if(car1.isTouching(wall1)){
  car1.velocityX=0;
car1.shapeColor=("red");
}
if(car2.isTouching(wall2)){
  car2.velocityX=0;
car2.shapeColor=("green");
}
if(car3.isTouching(wall3)){
  car3.velocityX=0;
car3.shapeColor=("yellow");
}
if(car4.isTouching(wall4)){
  car4.velocityX=0;
car4.shapeColor=("pink");
}
 drawSprites();



}