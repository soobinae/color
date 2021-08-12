var box;



function setup() {
  createCanvas(400,400);
  background("orange");
box = createSprite(200,200,10,10);
}


 

function draw() {
  
  if (keyIsDown(UP_ARROW)){
    background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)){
    background("purple");
  }

  if (keyIsDown(LEFT_ARROW)){
    background("pink");
  }

  if (keyIsDown(RIGHT_ARROW)){
    background("blue");
  }

drawSprites();
}




