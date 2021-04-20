var movingRect,fixRect


function setup() {
  createCanvas(400,400);
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixRect=createSprite(100,200,50,100);
  fixRect.shapeColor="green";
  fixRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2
    &&fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2
    &&movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2
    &&fixRect.y-movingRect.y<movingRect.height/2+fixRect.height/2){
    movingRect.shapeColor="red";
    fixRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixRect.shapeColor="green";
  }
  drawSprites();
}