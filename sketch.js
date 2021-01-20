var garden,tom,jerry;
var tomStanding,tomSitting,tomRunning,gardenImg;
var jerrySearching,jerryTeazing,jerryGift




function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png")
    tomSitting = loadAnimation("images/tomOne.png")
    tomRunning = loadAnimation("images/tomTwo.png","images/tomThree.png")
    tomStanding = loadAnimation("images/tomFour.png")
    jerryGift = loadAnimation("images/jerryOne.png")
    jerryTeazing = loadAnimation("images/jerryTwo","images/jerryThree")
    jerrySearching = loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400,250,200)
    garden.addImage(gardenImg)
    //create tom and jerry sprites here
    tom = createSprite (850,600,20,20)
    tom.addAnimation(tomSitting);
    tom.scale = 0.2
    jerry = createSprite(100,600,20,20)
    jerry.addAnimation(jerryGift);
    jerry.scale = 0.2
    //

 
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <(tom.width - jerry.width)/2){
      tom.velocityX = 0

       tom.addAnimation("sitting",tomSitting)
        
        tom.changeAnimation(tomSitting)
        jerry.addAnimation(jerryTeazing)
        jerry.changeAnimation(jerryTeazing)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode == LEFT_ARROW){
      tom.velocityX = -5
      tom.addAnimation("catRunning",tomRunning)
      tom.changeAnimation(tomRunning)
  
  }


}
