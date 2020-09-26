var car ;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(1400,1400);

 speed =Math.round(random(55,90));

 weight =Math.round(random(400,1500));

 car = createSprite(200, 300, 30, 30);
 car.shapeColor ="pink";
car.velocityX =speed;

 wall =createSprite(1000,300,30,300);
 wall.shapeColor ="white";

}
function draw() {
  background(0,0,0);  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX =0;
    var deformation =0.5 * weight * speed * speed / 22509;

    if(deformation > 180)
    {
      car.shapeColor ="red";
    }

    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor ="yellow";
    }

    if(deformation < 100)
    {
      car.shapeColor ="green";
    }
  }

  drawSprites();

}
