var garden,tom,jerry;
var tomStanding,tomSitting,tomRunning,gardenImg;
var jerrySearching,jerryTeazing,jerryGift




function preload() {
    //load the images here
    gardenImg = loadImage("garden.png")
    tomSitting = loadImage("tomOne.png")
    tomRunning = loadAnimation("tomTwo.png","tomThree.png")
    tomStanding = loadImage("tomFour.png")
    jerryGift = loadImage("jerryOne.png")
    jerryTeazing = loadAnimation("jerryTwo","jerryThree")
    jerrySearching = loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400)
    garden.addImage (gardenImg)
    //create tom and jerry sprites here
    tom = createSprite (850,700,20,20)
    tom.addImage(tomStanding)
    jerry = createSprite(250,700,20,20)
    jerry.addImage(jerryGift)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
