var wall1;
var wall2;
var bird;
var wall1Img;
var wall2Img;
var birdImg;
var gameState= "play";

var rect;
var score;
var h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26;
var w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19;
var r1,r2,r3,r4,r5,r6,r7,r7;
var trempImage;
var climbImage;


function preload(){
wall1Img= loadImage(" Screenshot (39).png")
wall2Img= loadImage("Screenshot (39).png")
birdImg= loadImage("usebird.png")
trempImage= loadImage("usetremp.png")
climbImage= loadImage("climber.png")
}
function setup() {
  createCanvas(1350, 600);
  
  wall1=createSprite(1500,50,10,10)
  wall1.addImage("wall1",wall1Img)
  wall1.scale=3;

  wall2=createSprite(1500,550,10,10)
  wall2.addImage("wall2",wall2Img)
  wall2.scale=3;

  bird=createSprite(500,200)
  bird.addImage("bird",birdImg)
  bird.scale=.37
  
  rect=createSprite(600,500,1600,1000)
  rect.visible= false

  h1=createSprite(1500,300,1,100)
  h1.visible=false;

  w3=createSprite(2300,50)
  w3.addImage("w3",wall1Img)
  w3.scale=5

  h2=createSprite(2300,470,1,200)
  h2.visible=false;

  w3=createSprite(2300,50)
  w3.addImage("w3",wall1Img)
  w3.scale=5

  w4=createSprite(3000,50)
  w4.addImage("w3",wall1Img)
  w4.scale=2
 
  w5=createSprite(3000,500)
  w5.addImage("w3",wall1Img)
  w5.scale=3
  
  h3=createSprite(3000,270,1,100)
  h3.visible=false;

  w6=createSprite(3600,450)
  w6.addImage("w6",wall2Img)
  w6.scale=5
  h4=createSprite(3600,80,1,100)
  h4.visible=false



  r1=createSprite(4000,400,250,20);
  r1.addImage("climber",climbImage)
  r1.scale=1.8
  //r1.shapeColor="green"
  r2=createSprite(4700,300,350,20);
  r2.addImage("climber",climbImage)
  r2.scale=1.8
  //r2.shapeColor="orange"
  r3=createSprite(5400,200,450,20);
  r3.addImage("climber",climbImage)
  r3.scale=1.8
  //r3.shapeColor="black"
  r4=createSprite(6100,100,450,20);
  r4.addImage("climber",climbImage)
  r4.scale=1.8
  //r4.shapeColor="blue"
  r5=createSprite(9500,400,250,20);
  r5.addImage("tremp",trempImage)
  r5.scale=.5
 // r5.shapeColor="black"
  r6=createSprite(9750,300,250,20)
  r6.addImage("tremp",trempImage)
  r6.scale=.5
 // r6.shapeColor="green"
  r7=createSprite(10000,200,250,20)
  r7.addImage("tremp",trempImage)
  r7.scale=.5
//r7.shapeColor="blue"

  w7=createSprite(7700,50)
  w7.addImage("w6",wall2Img)
  w7.scale=3

  w8=createSprite(7700,550)
  w8.addImage("w6",wall2Img)
  w8.scale=2.5

  h5=createSprite(7700,320,1,150);
h5.visible=false

w9=createSprite(8000,50)
w9.addImage("w6",wall2Img)
w9.scale=2.7

w10=createSprite(8400,500)
w10.addImage("w6",wall2Img)
w10.scale=5
h6=createSprite(8200,200,1,400)
h6.visible=false

w11=createSprite(8900,50)
w11.addImage("w11",wall1Img)
w11.scale=3

w12=createSprite(9100,550)
w12.addImage("w12",wall2Img)
w12.scale=2.5


w13=createSprite(10700,100)
w13.addImage("w12",wall1Img)
w13.scale=5

h7=createSprite(9000,300,1,200)
h7.visible=false

h8=createSprite(10700,470,1,200)
h8.visible=false
  score=0
  
}

function draw() {
  background(200,20,20);
  if(gameState==="play"){
    fill("blue")
    textSize(40)
    text("Score: "+score,600,100)
wall1.velocityX=-8;
wall2.velocityX=-8;
h1.velocityX=-8;
w3.velocityX=-8;
h2.velocityX=-8;
w4.velocityX=-8;
w5.velocityX=-8;
h3.velocityX=-8;
w6.velocityX=-8;
h4.velocityX=-8;
r1.velocityX=-8;
r2.velocityX=-8;
r3.velocityX=-8;
r4.velocityX=-8;
w7.velocityX=-8;
w8.velocityX=-8;
h5.velocityX=-8;
w9.velocityX=-8;
w10.velocityX=-8;
h6.velocityX=-8;
w11.velocityX=-8
w12.velocityX=-8
h7.velocityX=-8
r5.velocityX=-8
r6.velocityX=-8
r7.velocityX=-8
w13.velocityX=-8
h8.velocityX=-8
//bird.bounce(r1)
if(mousePressedOver(rect)){
  bird.velocityY=-9;
}
if(keyDown("w")){
  bird.velocityY=-7
}
bird.velocityY=bird.velocityY+1;
if(bird.isTouching(h1)){
  score=score+1
}
if(bird.isTouching(h2)){
  score=score+1
}
if(bird.isTouching(h3)){
  score=score+1
}
if(bird.isTouching(h4)){
  score=score+1
}
if(bird.isTouching(h5)){
  score=score+1
}
if(bird.isTouching(h6)){
  score=score+1
}
if(bird.isTouching(h7)){
  score=score+1
}
if(bird.isTouching(h8)){
  score=score+1
}
if(touches.length > 0) {
  bird.velocityY = -7;
   touches = [];
}
if(bird.isTouching(r1)){
  bird.collide(r1)
}
if(bird.isTouching(r2)){
  bird.collide(r2)
}
if(bird.isTouching(r3)){
  bird.collide(r3)
}
if(bird.isTouching(r4)){
  bird.collide(r4)
}
bird.bounceOff(r5)
bird.bounceOff(r6)
bird.bounceOff(r7)


if(bird.isTouching(wall1)|| bird.isTouching(wall2)|| bird.isTouching(w3)||bird.isTouching(w4)|| bird.isTouching(w5)||bird.isTouching(w6)||bird.isTouching(w7)||bird.isTouching(w8)||bird.isTouching(w9)||bird.isTouching(w10)||bird.isTouching(w11)||bird.isTouching(w12)||bird.isTouching(w13)){
  bird.x=-200
  //alert("Gameover: You can keep on pressing OK or reload the game!- Score: "+score)
  background("black")
 /* wall1.velocityX=0;
wall2.velocityX=0;
h1.velocityX=0;
w3.velocityX=0;
h2.velocityX=0;
w4.velocityX=0;
w5.velocityX=0;
h3.velocityX=0;
w6.velocityX=0;
h4.velocityX=0;
r1.velocityX=0;
r2.velocityX=0*/
}
//if(score>40){
  //bird.velocityY=bird.velocityY+1;
//}
  }
  
  
 drawSprites();
    
}

  