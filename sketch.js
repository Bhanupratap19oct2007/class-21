var rect1, rect2;

function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(200, 200, 50, 50);
  rect1.shapeColor = "green";
  rect1.velocityX = 5;
  rect1.debug = true;

  rect2 = createSprite(600,200,50,50);
  rect2.shapeColor = "green";
  rect2.velocityX = -5;
  rect2.debug = true;
}

function draw() {
  background(255,255,255);  

  //bounceOff(rect1, rect2);
  
  if(isTouching(rect1, rect2)) {
    rect1.shapeColor  = "red";
    rect2.shapeColor = "blue"; 
  } else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  drawSprites();
}