var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var runner1,runner2
function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200,400,400) 
 path.addImage("E",pathImg)
path.velocityY=1
path.scale=1.2;

boy = createSprite(200,300,20,50)
boy.addAnimation("boy",boyImg)
boy.scale=1;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
 
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
