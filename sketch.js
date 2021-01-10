var survivalistIMG, zombieIMG, nightIMG, morningIMG
var survivalist
var zombieGroup
var NightBackground
var bullet
var scream
var edges
var zombieExpiriment

var score = 0;

function setup() {     
  var canvas = createCanvas(1450, 735);
  edges = createEdgeSprites();
  
  
  survivalist = createSprite(765,354.75,100,100);
  survivalist.addImage(survivalistIMG,1064.25,354.75, 50, 50); 
  survivalist.velocityY = 5;
  survivalistIMG.resize(250, 0);
  


  bullet = createSprite(765,354.75,100,100);
  bullet.addImage(bulletIMG,1064.25,354.75, 50, 50); 
  bullet.visible = false;
  bulletIMG.resize(50, 0)
  bullet.velocityY = 5
  
  if(zombieExpiriment.isTouching(survivalist)){
    survivalist.destroy();
  }
  
   }
function preload(){
nightIMG = loadImage("/Pictures/Night time warzone.jpg")
survivalistIMG = loadImage('/Pictures/Survivalist.png');
zombieIMG = loadImage('/Pictures/TransparentZombie.png');
bulletIMG = loadImage('/Pictures/bulletTransparent.png')
morningIMG = loadImage('/Pictures/warzone(1).jpg')


}

function draw() {
 background(nightIMG);
 
  survivalist.y = mouseY
  bullet.y = mouseY
 



  if(keyCode === 87){
  survivalist.velocityY = -4  
}

  if(keyCode === 83){
  survivalist.velocityY = 4  
 
}
  
  if(keyCode === 81){
  bullet.velocityX = -3;
  bullet.visible = true;
}

  drawSprites();
  fill(239,34,91);
  textFont('Langar')
  textSize(40)
  text("Can you defeat the Zombies?", 532.125, 100); 


 leftZombies();


}


function leftZombies(){
  if(World.frameCount % 80 === 0){
  var zombieExpiriment = createSprite(100,200,10,10);
  zombieExpiriment.velocityX = 11;
  zombieExpiriment.addImage(zombieIMG)
  zombieExpiriment.y = random(25,700);
  zombieIMG.resize(150, 0)
  //zombieExpiriment.add(zombieGroup);
 
  }
}
 


