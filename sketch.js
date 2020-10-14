var car,wall;
var speed,weight;



function setup() {
  createCanvas(1300,400);
 
car = createSprite(50 , 200, 50, 50);
wall = createSprite(1200,200,50,200);


speed = random(55,90);
weight = random(400,1500);

car.velocityX = speed;

}

function draw() {
  background("black");  

  

  
  if(car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 &&
    car.y - wall.y < car.height/2 + wall.height/2 &&
    wall.y - car.y < car.height/2 + wall.height/2){

     var deformation = 0.5 * weight * speed * speed/22500;
    
      if(deformation > 180){
       
        car.shapeColor = color(255,0,0);
        car .velocityX = 0;

      }

    if(deformation < 180 && deformation >100){

       car.shapeColor = color(230,230,0);
       car .velocityX = 0;
    }

    if(deformation < 100){
     
      car.shapeColor = color(0,255,0);
      car .velocityX = 0;

    }
  }
  
  
  
  
  
  drawSprites();
}