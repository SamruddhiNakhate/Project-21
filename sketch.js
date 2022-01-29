
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(0,10)
  weight=random(30,52)


  thickness=random(22,83)




  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color("red");

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color("green");
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color("orange");
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color("yellow");
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


