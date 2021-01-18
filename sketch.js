var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

box1 = createSprite(50,387,100,20);
box1.shapeColor = ("blue"); 
box2 = createSprite(155,387,105,20);
box2.shapeColor = ("orange");  
box3 = createSprite(260,387,95,20);
box3.shapeColor = ("purple");  
box4 = createSprite(355,387,90,20);  
box4.shapeColor = ("green");
  ball = createSprite(random(20,370),347,20,20);
  ball.velocityY = random(3,7);
  ball.velocityX = random(2,6);
  
}

function draw() {
    background(rgb(169,169,169));
  
edges=createEdgeSprites();

ball.bounceOff(edges[1]);
ball.bounceOff(edges[2]);
 ball.bounceOff(edges[3]); 
 ball.bounceOff(edges[0]);

  
 if (ball.isTouching(box2)){
  ball.shapeColor = ("orange");
   ball.velocityY = 0;
  ball.velocityX = 0;
   music.stop();
}
  ball.collide(box2);
  
  if (box1.isTouching(ball) && ball.bounceOff(box1)){
      ball.shapeColor = ("blue");
    music.play();
  }
  
  if (box3.isTouching(ball) && ball.bounceOff(box3)){
      ball.shapeColor = ("purple");
    music.play();
      }
  
  if (box4.isTouching(ball) && ball.bounceOff(box4)){
      ball.shapeColor = ("green");
    music.play();
      }
  
  drawSprites();
}
