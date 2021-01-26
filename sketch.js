const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld
var backgroundImg, ground ;
var box1 , box2 , box3 , box4 ,box5 , log1 , log2 , log3, log4;
var obstacle1 ,obstacle2;
var player , playerImg;
var back;

function preload(){
  backgroundImg = loadImage("images/backgroundImg.jpg");
  obstacleImg1 = loadImage("images/obstacle1.png");
  obstacleImg2 = loadImage("images/obstacle2.png");
  image2 = loadImage("images/obstacle2.png")
}

function setup() {
  
  createCanvas(displayWidth,displayHeight);
 
  myengine = Engine.create();
  myworld = myengine.world;
  
  back = createSprite(displayWidth / 2,displayHeight / 2,displayWidth,displayHeight);
  back.velocityY = 5;
  back.addImage(backgroundImg);
  back.scale= 2;

  ground = new Ground(displayWidth/2 ,displayHeight - 100,displayWidth,20);
 
  player = new Player(100,100);
  
  obstaclesGroup = new Group();



  Engine.run(myengine);

}

function draw() {

  background(0);  
  Engine.update(myengine);
  
  if(back.y > 600){
      back.y = 300;
  }

  drawSprites();

  spawnObstacles();

  player.display();
  
//ground.display();
}

function keyPressed(){

    if(keyCode === UP_ARROW){
     /* console.log(keyCode);
      console.log(player.body.position);*/
        Matter.Body.setPosition(player.body, {x : player.body.position.x , y : player.body.position.y-200});
    }
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(obstacleImg1);
               break;
       case 2: obstacle.addImage(obstacleImg2);
               break;

       default: break;
     }
    
     obstaclesGroup.add(obstacle);
  }
 }