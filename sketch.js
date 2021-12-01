
function preload(){
  //pre-load images
  var pathImg;
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.VelocityY=4;
  path.scale=1.2;
}

function draw() {
  background(0);
 
}
