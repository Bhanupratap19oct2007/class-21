// bounceOff function with arguments
function bounceOff(sprite1, sprite2) {
    if(sprite1.x - sprite2.x < (sprite1.width + sprite2.width) /2 &&
      sprite2.x - sprite1.x < (sprite1.width + sprite2.width) /2) {
  
        sprite1.velocityX = sprite1.velocityX * (-1);
        sprite2.velocityX = sprite2.velocityX * (-1);
    }
  
    if(sprite1.y - sprite2.y < (sprite1.height + sprite2.height) /2 &&
      sprite2.y - sprite1.y < (sprite1.height + sprite2.height) /2) {
      
        sprite1.velocityY = sprite1.velocityY * (-1);
        sprite2.velocityY = sprite2.velocityY * (-1);
    }
  }

// isTouching function with arguments and returns
function isTouching(sprite1, sprite2) {
    if(sprite1.x - sprite2.x < (sprite1.width + sprite2.width) /2 &&
      sprite2.x - sprite1.x < (sprite1.width + sprite2.width) /2 &&
      sprite1.y - sprite2.y < (sprite1.height + sprite2.height) /2 &&
      sprite2.y - sprite1.y < (sprite1.height + sprite2.height) /2) {
  
        return true 
    } else {
        false
    }
}