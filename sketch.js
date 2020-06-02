function setup() {
  createCanvas(800,400);
  var Package;
  var line;
  var line2;
  var line3;
}

function draw() {
  background(0);  
  Package=createSprite(250,200,10,10)
  if (keyDown("space")) {
    Package.velocityX=0
    Package.velocityY=4
  }
  line=createSprite(200,380,10,70)
  line2=createSprite(400,380,10,70)
  line3=createSprite(300,400,190,10)
  Package.display();
  line.display();
  line2.display();
  line3.display();
}
